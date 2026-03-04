import numpy as np
import matplotlib.pyplot as plt

# Parameter
t = np.linspace(0, 2*np.pi, 400)

# Sphere coordinates
theta = np.pi / 3
phi = t

x = np.sin(theta) * np.cos(phi)
y = np.sin(theta) * np.sin(phi)
z = np.cos(theta)

# Plot
fig = plt.figure()
ax = fig.add_subplot(projection='3d')
ax.plot(x, y, z)
ax.set_title("Geodesic (great circle) on a sphere")
plt.show()