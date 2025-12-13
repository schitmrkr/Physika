### Finite Difference Time Domain (FDTD)

FDTD is a numerical method for solving Maxwell's equations. It is a time-domain method, meaning it solves the equations at each time-step. It updates for magnetic field components $B=(B_x,B_y,B_z)$ at each spatial grid point $(x,y,z)$ based on the curl of electric field $E=(E_x,E_y,E_z)$ at the same grid point and vice versa.

#### Physical Background

Maxwell's equation for $\vec{B}$

$$
\frac{\partial \vec{B}}{\partial t} = - \nabla \times \vec{E}
$$

The magnetic field $\vec{B}$ changes in time according to the spatial curl of the electric field $\vec{E}$. The minus sign indicates the direction of induced magnetic field w.r.t. electric field variations.

#### What curl means in Cartesian Coordinates

$$
\nabla \times \vec{E} = \left( \frac{\partial E_z}{\partial y} - \frac{\partial E_y}{\partial z} \right) \hat{i} + \left( \frac{\partial E_x}{\partial z} - \frac{\partial E_z}{\partial x} \right) \hat{j} + \left( \frac{\partial E_y}{\partial x} - \frac{\partial E_x}{\partial y} \right) \hat{k}
$$

where,  
$\vec{E} = E_x \hat{i} + E_y \hat{j} + E_z \hat{k}$

#### FDTD Implementations

Finite differences approximate derivative using central differences on discrete grid points spaced by distance $dx$ in each direction.  
Example derivative wrt $x$:

$$
\frac{\partial \vec{E}}{\partial x} \approx \frac{\vec{E}(i+1) - \vec{E}(i-1)}{2dx}
$$

For example, $B_x$ update (x-component of $\partial \vec{B}/\partial t$):

```python
Bx[1:-1, 1:-1, 1:-1] -= (dt / mu0) * (
    (Ez[1:-1, 2:, 1:-1] - Ez[1:-1, :-2, 1:-1]) / (2 * dx) #∂Ez/∂y
  - (Ey[1:-1, 1:-1, 2:] - Ey[1:-1, 1:-1, :-2]) / (2 * dx) #∂Ey/∂z
)
```
