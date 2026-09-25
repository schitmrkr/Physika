### Attempts At Relativistic Quantum Mechanics

The state of the system is represented by a vector in Hilbert space. Observables are represented by hermitian operators. The measurement of an observable yeilds one of its eigenvalues as the result.

The time evolution of the state of the system is governed by the Schrodinger's equation

$$
i \hbar \frac{\partial}{\partial t} | \psi, t \rangle = H | \psi, t \rangle
$$

where $H$ is the hamiltonian operator, representing total energy.

Let us consider a simple system: spinless, non relativistic particle with no forces acting on it. The hamiltonian is

$$
H = \frac{1}{2m} \mathbf{P}^2
$$

In the position basis, the equation becomes

$$
i \hbar \frac{\partial}{\partial t} \psi(x,t) = - \frac{\hbar^2}{2m} \nabla^2 \psi(x,t)
$$

We would like to generalize thi to relativistic motion. The obvious way to proceed is

$$
H = + \sqrt{\mathbf{P}^2 c^2 + m^2 c^4}
$$

If we formally expand this Hamiltonian in inverse powers of the speed of light $c$, we get

$$
H = mc^2 + \frac{1}{2m} \mathbf{P}^2 + ...
$$

With the relativistic Hamiltonian, the Schrodinger's equation becomes

$$
i \hbar \frac{\partial}{\partial t} \psi(x,t) =  \sqrt{- \hbar^2 c^2 \nabla^2 + m^2 c^4} \psi(x,t)
$$

We can square the differential operators by squaring them first before applying them to the wave function.

$$
- \hbar \frac{\partial^2}{\partial t^2} \psi(x,t) =  (- \hbar^2 c^2 \nabla^2 + m^2 c^4) \psi(x,t)
$$

This is the Klien-Gordon equation. 

***

**Notes**

In relativity,

$$
E^2 = p^2 c^2 + m^2 c^4
$$

We start by defining proper time. Here, $t$ is the time measured in rest frame while $\tau$ is time experienced by the moving frame. 

$$
c^2 d \tau^2 = c^2 dt^2 - dx^2
$$

The above equation is consequence of Lorentz invariance.

$$
d \tau^2 = (1 - \frac{v^2}{c^2}) dt^2
$$

$$
\frac{dt}{d \tau} = \gamma
$$

The particles spacetime position is

$$
x^\mu = (ct, x, y, z)
$$

Differentiate with respect to proper time

$$
U^\mu = \frac{dx^\mu}{d\tau} = (c\frac{dt}{d\tau}, \frac{dx}{d\tau}) = (c\frac{dt}{d\tau}, \frac{dx}{dt} \frac{dt}{d\tau}) = \gamma(c, v)
$$

Explicitly,

$$
U^\mu = (\gamma c, \gamma v_x, \gamma v_y, \gamma v_z)
$$

We have Minkowski metric

$$
\eta_{\mu \nu} = diag(1, -1, -1, -1)
$$

The four velocity satisfies:

$$
U^\mu U_\mu = \gamma^2 c^2 - \gamma^2 v^2 = c^2
$$

For a particle with rest mass $m$, we define four momentum.

$$
p^\mu = m U^\mu = m\gamma(c, v)
$$

We know that the spatial momentum is 

$$
p = m \gamma v
$$

The four momentum must transform as a four vector. It's spatial components are momentum. Therefore, zeroth component must be related to energy.


We define, as $p_0$ should have the same dimension and $E/c$ satisfies as same dimension as momentum.

$$
p_0 = E/c
$$

But,

$$
p_0 = \gamma mc 
$$

Comparing the two we get,

$$
E = \gamma m c^2
$$

Now we can derive energy momentum relation

$$
p^\mu = (E/c, p)
$$

In minkowski metric,

$$
p_\mu p^\mu = E^2/c^2 - p^2
$$

But since,

$$
p_\mu p^\mu = m^2 U^\mu U\mu = m^2 c^2
$$

Therefore,

$$
E^2/c^2 - p^2 = m^2 c^2
$$

$$
E^2 = p^2 c^2 + m^2 c^4
$$

***