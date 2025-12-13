import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation

# -------------------------
# Parameters
# -------------------------
f0 = 2e14  # Hz
T = 1 / f0  # period
amp0 = 1e19
c = 3e8  # speed of light

# Grid: make 4 wavelengths fit in the domain
n_waves = 4
lambda0 = c / f0
L = n_waves * lambda0
nx = ny = 200
x = np.linspace(0, L, nx)
y = np.linspace(0, L, ny)
X, Y = np.meshgrid(x, y)
src_x, src_y = L / 2, L / 2

# Time: 2 periods, enough steps
n_periods = 2
dt = 0.02 * T
nt = int(n_periods * T / dt) + 1
time = np.arange(nt) * dt

# Radial distance from source
R = np.sqrt((X - src_x) ** 2 + (Y - src_y) ** 2)

# -------------------------
# Prepare figure
# -------------------------
fig, ax = plt.subplots(figsize=(6, 6))
im = ax.imshow(
    np.zeros((ny, nx)),
    cmap="seismic",
    extent=[0, L * 1e6, 0, L * 1e6],
    vmin=-amp0,
    vmax=amp0,
    origin="lower",
)
ax.set_xlabel("X (μm)")
ax.set_ylabel("Y (μm)")
plt.colorbar(im, ax=ax, label="Ez (V/m)")


# Animation function
def animate(n):
    t = time[n]
    pulse = np.sin(2 * np.pi * f0 * (t - R / c))
    # single-period envelope
    pulse *= (t - R / c >= 0) & (t - R / c <= T)
    im.set_array(pulse)
    ax.set_title(f"Ez radial propagation | t = {t*1e15:.2f} fs")
    return (im,)


anim = FuncAnimation(fig, animate, frames=nt, interval=50, blit=False)
plt.show()
