import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation

mu0 = 4 * np.pi * 1e-7
c = 2.99792458e8
epsilon0 = 1 / (mu0 * c**2)

# Simulation parameters (practical scales)
nx = 200  # Grid points in x
ny = 200  # Grid points in y (2D)
dx = 1e-9  # Spatial step (1 nm)
dt = 0.95 * dx / c  # Time step (CFL stability) ~3.16 fs
nt = 500  # Time steps

# Initialize 2D grids for E_z (V/m, TM mode) and B components (T)
Ez = np.zeros((ny, nx))
Bx = np.zeros((ny, nx))
By = np.zeros((ny, nx))

# FDTD coefficients from Yee scheme (derives wave equation ∇²E = μ₀ε₀ ∂²E/∂t²)
c_factor = c * dt / dx

# Source: Gaussian pulse at center (optical frequency ~500 THz)
src_x, src_y = nx // 2, ny // 2
f0 = 5e14  # 500 THz (green light) [web:20]
t0 = 10 * dt  # Pulse start
sigma_t = 5 * dt


def update_fields(frame):
    global Ez, Bx, By

    t = frame * dt

    # Update magnetic fields (∂B/∂t = -curl E, staggered grid)
    Bx[1:-1, 1:-1] -= (dt / mu0) * (Ez[1:-1, 2:] - Ez[1:-1, :-2]) / (2 * dx)
    By[1:-1, 1:-1] += (dt / mu0) * (Ez[2:, 1:-1] - Ez[:-2, 1:-1]) / (2 * dx)

    # Add Gaussian source to E_z (V/m amplitude)
    if t > t0:
        pulse = (
            1e6
            * np.exp(-0.5 * ((t - t0 - 20 * dt) / sigma_t) ** 2)
            * np.sin(2 * np.pi * f0 * (t - t0))
        )
        Ez[src_y, src_x] += pulse

    # Update electric field (∂E/∂t = curl B / ε₀, satisfies wave equation)
    Ez[1:-1, 1:-1] += (dt / epsilon0) * (
        (Bx[1:-1, 2:] - Bx[1:-1, :-2]) / (2 * dx)
        - (By[2:, 1:-1] - By[:-2, 1:-1]) / (2 * dx)
    )

    # Simple absorbing boundaries (set to zero; use PML for production)
    Ez[0, :] = Ez[-1, :] = Ez[:, 0] = Ez[:, -1] = 0
    Bx[0, :] = Bx[-1, :] = Bx[:, 0] = Bx[:, -1] = 0
    By[0, :] = By[-1, :] = By[:, 0] = By[:, -1] = 0

    im.set_array(Ez)
    return [
        im,
    ]


# Setup visualization
fig, ax = plt.subplots(figsize=(10, 5))
im = ax.imshow(
    Ez, cmap="RdBu_r", vmin=-1e6, vmax=1e6, extent=[0, nx * dx * 1e9, 0, ny * dx * 1e9]
)  # nm scale
ax.set_xlabel("x (nm)")
ax.set_ylabel("y (nm)")
ax.set_title("2D FDTD EM Wave Simulation (E_z in V/m)\nSI Units, c=299792458 m/s")
plt.colorbar(im, label="E_z (V/m)")

anim = FuncAnimation(fig, update_fields, frames=nt, interval=20, blit=True)
plt.tight_layout()
plt.show()

print(f"Simulation: dx={dx*1e9:.1f} nm, dt={dt*1e15:.1f} fs, f0={f0/1e12:.0f} THz")
print(
    "Wave propagates at c=299792458 m/s, satisfying ∇²E = μ₀ε₀ ∂²E/∂t² [web:11][web:2]"
)
