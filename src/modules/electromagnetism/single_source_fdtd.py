import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation

# -------------------------
# Parameters (2D FDTD setup)
# -------------------------
f0 = 2e7  # Hz
T = 1 / f0  # period
amp0 = 1
c = 3e8  # speed of light
courant = 0.99  # Courant number for stability

# Grid: make 4 wavelengths fit in the domain
n_waves = 20
lambda0 = c / f0
L = n_waves * lambda0
nx = ny = 500
dx = L / (nx - 1)
dy = dx

# Time stepping (CFL condition: dt <= dx/c * courant)
dt = courant * dx / c
n_periods = 10
nt = int(n_periods * T / dt) + 1
time = np.arange(nt) * dt

# Source at center (avoid boundaries)
src_ix, src_iy = nx // 2, ny // 2

# Initialize electromagnetic fields (2D TMz: Ez, Hx, Hy)
ez = np.zeros((ny, nx))
hx = np.zeros((ny, nx))
hy = np.zeros((ny, nx))

# Gaussian source envelope for better visualization
t_gauss = np.arange(nt) * dt
source = (
    amp0
    * np.sin(2 * np.pi * f0 * t_gauss)
    * np.exp(-((t_gauss - 3 * T) ** 2) / (2 * T**2))
)


# -------------------------
# FDTD Update Functions (Maxwell's equations in 2D) - FIXED
# -------------------------
def update_magnetic_fields():
    """Update Hx and Hy from Ez using Maxwell's curl equations"""
    global hx, hy
    # Hx: updated on rows 0:ny-1 (not ny), cols 0:nx
    hx[:-1, :] -= (dt / (2 * np.pi * 1e-7 * dy)) * (ez[1:, :] - ez[:-1, :])
    # Hy: updated on rows 0:ny, cols 0:nx-1 (not nx)
    hy[:, :-1] += (dt / (2 * np.pi * 1e-7 * dx)) * (ez[:, 1:] - ez[:, :-1])


def update_electric_field(n):
    """Update Ez from Hx and Hy + source injection"""
    global ez
    # Ez updated on rows 0:ny-1, cols 0:nx-1
    # x-direction curl from Hy
    ez[:-1, :-1] += (dt / (2 * np.pi * 8.85e-12 * dx)) * (hy[:-1, 1:] - hy[:-1, :-1])
    # y-direction curl from Hx
    ez[:-1, :-1] -= (dt / (2 * np.pi * 8.85e-12 * dy)) * (hx[1:, :-1] - hx[:-1, :-1])

    # Soft source injection (additive)
    if n < len(source):
        ez[src_iy, src_ix] += source[n]


# Pre-compute time evolution for smooth animation
ez_history = np.zeros((nt, ny, nx))
for n in range(nt):
    update_electric_field(n)
    if n < nt - 1:
        update_magnetic_fields()
    ez_history[n] = ez.copy()

# -------------------------
# Prepare figure
# -------------------------
fig, ax = plt.subplots(figsize=(8, 8))
im = ax.imshow(
    ez_history[0],
    cmap="seismic",
    extent=[0, L * 1e6, 0, L * 1e6],
    vmin=-amp0,
    vmax=amp0,
    origin="lower",
)
ax.set_xlabel("X (μm)")
ax.set_ylabel("Y (μm)")
ax.set_title("2D FDTD: Electromagnetic wave from point source (TMz)")
cbar = plt.colorbar(im, ax=ax, label="Ez (V/m)")


def animate(n):
    """Animation frame using pre-computed FDTD solution"""
    im.set_array(ez_history[n])

    # Dynamic title with time
    t = time[n]
    ax.set_title(f"2D FDTD | Ez propagation | t = {t*1e15:.1f} fs")

    return (im,)


anim = FuncAnimation(fig, animate, frames=nt, interval=20, blit=True, repeat=True)
plt.tight_layout()
plt.show()
