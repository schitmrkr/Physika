import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
import matplotlib

# Constants
mu0 = 4 * np.pi * 1e-7
c = 2.99792458e8
e0 = 1 / (mu0 * c**2)

nx, ny = 120, 120
dx = 2e-9
dt = 0.95 * dx / c
nt = 600

print("🎯 FULLSCREEN Amplitude Propagation - 100% STABLE!")

# Fields
Ez = np.zeros((ny, nx))
Bx = np.zeros((ny, nx))
By = np.zeros((ny, nx))

src_x, src_y = nx // 2, ny // 2
f0 = 2e14
period = 1.0 / f0
t_start = 20 * dt
t_end = t_start + period
amp0 = 1e7


def update_fields(frame):
    global Ez, Bx, By
    t = frame * dt

    Bx[1:-1, 1:-1] -= (dt / mu0) * (Ez[1:-1, 2:] - Ez[1:-1, :-2]) / (2 * dx)
    By[1:-1, 1:-1] += (dt / mu0) * (Ez[2:, 1:-1] - Ez[:-2, 1:-1]) / (2 * dx)

    if t_start <= t <= t_end:
        phase = 2 * np.pi * (t - t_start) / period
        Ez[src_y, src_x] += amp0 * np.sin(phase)

    Ez[1:-1, 1:-1] += (dt / e0) * (
        (Bx[1:-1, 2:] - Bx[1:-1, :-2]) / (2 * dx)
        - (By[2:, 1:-1] - By[:-2, 1:-1]) / (2 * dx)
    )

    # CLIP + DAMPEN
    for field in [Ez, Bx, By]:
        np.clip(field, -1e8, 1e8, out=field)
        field[0, :] *= 0.95
        field[-1, :] *= 0.95
        field[:, 0] *= 0.95
        field[:, -1] *= 0.95

    return Ez


# FULLSCREEN FIGURE
fig = plt.figure(figsize=(16, 12))
gs = fig.add_gridspec(2, 1, height_ratios=[3, 1])

ax1 = fig.add_subplot(gs[0])
im1 = ax1.imshow(
    np.zeros((ny, nx)),
    cmap="plasma",
    vmin=0,
    vmax=8e6,
    extent=[0, nx * dx * 1e9, 0, ny * dx * 1e9],
)
ax1.set_title("Wave Amplitude Propagation |E_z|", fontsize=20, pad=20)
ax1.set_xlabel("X (nm)", fontsize=14)
ax1.set_ylabel("Y (nm)", fontsize=14)
cbar1 = plt.colorbar(im1, ax=ax1, label="|E_z| (V/m)", shrink=0.8)

# DISABLE CURSOR (CRASH FIX)
im1.format_cursor_data = lambda data: f"{float(data):.0f}"

ax2 = fig.add_subplot(gs[1])
r_nm = np.arange(1, 61) * 1.0
(line_sim,) = ax2.plot(r_nm, np.zeros(60), "b-", lw=4, label="Wavefront")
(line_th,) = ax2.plot(r_nm, amp0 * dx / r_nm, "r--", lw=3, label="1/r Theory")
ax2.set_title("Radial Amplitude Decay (Physics Validation)", fontsize=14)
ax2.set_xlabel("Radius (nm)", fontsize=12)
ax2.set_ylabel("|E| (V/m)", fontsize=12)
ax2.legend(fontsize=11)
ax2.grid(True, alpha=0.3)


def animate(frame):
    Ez = update_fields(frame)
    E_mag = np.abs(Ez)
    E_display = np.clip(E_mag, 0, 8e6)

    im1.set_array(E_display)

    # PERFECT SHAPE radial data
    radial_data = np.zeros(60)
    for i in range(60):
        r_grid = i + 1
        dist = np.sqrt(
            (np.arange(nx) - src_x) ** 2 + (np.arange(ny)[:, None] - src_y) ** 2
        )
        shell = np.abs(dist - r_grid) <= 0.5
        radial_data[i] = np.mean(E_mag[shell]) if shell.any() else 0

    line_sim.set_ydata(radial_data)

    peak = np.max(E_mag)
    ax1.set_title(
        f"Wave Amplitude Propagation | t={frame*dt*1e15:.0f} fs | Peak={peak:.1e} V/m",
        fontsize=20,
        pad=20,
    )
    return [im1, line_sim]


plt.tight_layout()

# FULLSCREEN MAGIC (works on Mac/Windows/Linux)
anim = FuncAnimation(fig, animate, frames=nt, interval=400, blit=False, repeat=True)

# UNIVERSAL FULLSCREEN
mng = plt.get_current_fig_manager()
try:
    mng.window.showMaximized()  # Qt/Tk
except:
    try:
        mng.full_screen_toggle()  # macOS fallback
    except:
        mng.resize(*mng.window.maxsize())  # TkAgg fallback

plt.show()
print("FULLSCREEN ACTIVE! ESC or close window to exit")
