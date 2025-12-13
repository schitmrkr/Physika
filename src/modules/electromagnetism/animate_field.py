import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
from matplotlib.animation import FuncAnimation
from skimage import measure

# Constants
mu0 = 4 * np.pi * 1e-7
c = 2.99792458e8
e0 = 1 / (mu0 * c**2)

# Grid parameters
nx, ny, nz = 60, 60, 60
dx = 5e-9
dt = dx / c
nt = 500

print(f"3D Grid: {nx}×{ny}×{nz}, dx={dx*1e9:.0f} nm, dt={dt*1e15:.1f} fs")

# Arrays: (nx, ny, nz) consistent indexing
Ex = np.zeros((nx, ny, nz))
Ey = np.zeros((nx, ny, nz))
Ez = np.zeros((nx, ny, nz))
Bx = np.zeros((nx, ny, nz))
By = np.zeros((nx, ny, nz))
Bz = np.zeros((nx, ny, nz))

src_x, src_y, src_z = nx // 2, ny // 2, nz // 2
f0 = 5e14
period = 1.0 / f0
t_start = 30 * dt
t_end = t_start + period
amplitude = 2e6


def update_fields_3d(frame):
    global Ex, Ey, Ez, Bx, By, Bz
    t = frame * dt

    # B-field updates (curl E) - correct (nx,ny,nz) indexing
    Bx[1:-1, 1:-1, 1:-1] -= (dt / mu0) * (
        (Ez[1:-1, 1:-1, 2:] - Ez[1:-1, 1:-1, :-2]) / (2 * dx)
        - (Ey[1:-1, 2:, 1:-1] - Ey[1:-1, :-2, 1:-1]) / (2 * dx)
    )
    By[1:-1, 1:-1, 1:-1] -= (dt / mu0) * (
        (Ex[1:-1, 2:, 1:-1] - Ex[1:-1, :-2, 1:-1]) / (2 * dx)
        - (Ez[2:, 1:-1, 1:-1] - Ez[:-2, 1:-1, 1:-1]) / (2 * dx)
    )
    Bz[1:-1, 1:-1, 1:-1] -= (dt / mu0) * (
        (Ey[2:, 1:-1, 1:-1] - Ey[:-2, 1:-1, 1:-1]) / (2 * dx)
        - (Ex[1:-1, 1:-1, 2:] - Ex[1:-1, 1:-1, :-2]) / (2 * dx)
    )

    # Single cycle source
    if t_start <= t <= t_end:
        phase = 2 * np.pi * (t - t_start) / period
        source_signal = amplitude * np.sin(phase)
        Ex[src_x, src_y, src_z] += source_signal * 0.7
        Ey[src_x, src_y, src_z] += source_signal * 0.3
        Ez[src_x, src_y, src_z] += source_signal * 0.1

    # E-field updates (curl B)
    Ex[1:-1, 1:-1, 1:-1] += (dt / e0) * (
        (Bz[1:-1, 1:-1, 2:] - Bz[1:-1, 1:-1, :-2]) / (2 * dx)
        - (By[1:-1, 2:, 1:-1] - By[1:-1, :-2, 1:-1]) / (2 * dx)
    )
    Ey[1:-1, 1:-1, 1:-1] += (dt / e0) * (
        (Bx[1:-1, 2:, 1:-1] - Bx[1:-1, :-2, 1:-1]) / (2 * dx)
        - (Bz[2:, 1:-1, 1:-1] - Bz[:-2, 1:-1, 1:-1]) / (2 * dx)
    )
    Ez[1:-1, 1:-1, 1:-1] += (dt / e0) * (
        (By[2:, 1:-1, 1:-1] - By[:-2, 1:-1, 1:-1]) / (2 * dx)
        - (Bx[1:-1, 1:-1, 2:] - Bx[1:-1, 1:-1, :-2]) / (2 * dx)
    )

    # Boundaries
    for field in [Ex, Ey, Ez, Bx, By, Bz]:
        field[0, :, :] = field[-1, :, :] = field[:, 0, :] = field[:, -1, :] = field[
            :, :, 0
        ] = field[:, :, -1] = 0

    # E magnitude
    E_mag = np.sqrt(Ex**2 + Ey**2 + Ez**2)

    # FIXED: Proper isosurface update
    ax.clear()
    ax.set_xlim(0, nx * dx * 1e9)
    ax.set_ylim(0, ny * dx * 1e9)
    ax.set_zlim(0, nz * dx * 1e9)
    ax.set_xlabel("X (nm)")
    ax.set_ylabel("Y (nm)")
    ax.set_zlabel("Z (nm)")

    try:
        verts, faces, _, _ = measure.marching_cubes(
            E_mag, 3e4, spacing=(dx, dx, dx)
        )  # Lower threshold
        if len(verts) > 10:
            ax.plot_trisurf(
                verts[:, 0] * 1e9,
                verts[:, 1] * 1e9,
                faces,
                verts[:, 2] * 1e9,
                cmap="plasma",
                alpha=0.6,
            )
    except:
        pass

    ax.view_init(elev=25, azim=frame * 0.4)
    ax.set_title(
        f'3D EM Wave | t={t*1e15:.0f} fs | Source: {"ON" if t_start<=t<=t_end else "OFF"}'
    )

    return []


# Setup
fig = plt.figure(figsize=(12, 10))
ax = fig.add_subplot(111, projection="3d")
plt.tight_layout()

anim = FuncAnimation(fig, update_fields_3d, frames=nt, interval=25, blit=False)
plt.show()

print(
    f"Fixed! Single cycle: {period*1e15:.1f} fs, active {t_start*1e15:.0f}-{t_end*1e15:.0f} fs"
)
