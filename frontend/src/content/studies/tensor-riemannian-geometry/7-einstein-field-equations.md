### The Equivalence Principle

To derive Einstein's field equations, we start with the equivalence principle. 

The equivalence principle states that locally, gravity and acceleration are the same thing. A freely falling observer does not experience gravity as a force.

The Newtonian gravitational potential $\Phi$ becomes part of the metric. In special relativity, the spacetime interval is

$$
ds^2 = -c^2 dt^2 + dx^2 + dy^2 + dz^2
$$

For a clock at rest in an inertial frame:

$$
dx = dy = dz = 0
$$

Therefore, 

$$
ds^2 = - c^2 dt^2
$$

We define proper time through:

$$
ds^2 = - c^2 d\tau^2
$$

Thus, in flat spacetime for a stationary clock:

$$
d\tau = dt
$$

However, in a gravitational field, clocks at different gravitational potentials run at different rates.

Imagine a rocket accelerating upward with constant acceleration $g$. Inside the rocket, consider two clocks:

- Clock A is at the bottom.
- Clock B is at the top, a distance $h$ above A.

Suppose clock A emits a light signal toward clock B. In the rocket's instantaneous inertial frame at the moment of emission, the light travels at speed $c$.

The travel time is approximately,

$$
\Delta t = \frac{h}{c}
$$

During this time, the rocket accelerates upward.

Its velocity changes by

$$
\Delta v = g \Delta t = \frac{gh}{c}
$$

Thus, when the light reaches B, the receiver is moving upward relative to the inertial frame in which the light was initially emitted.

Apply the Doppler effect,

$$
f_B = f_A \sqrt{\frac{1 - \beta}{1 + \beta}}, \qquad \beta = v/c
$$

For $v \ll c$,

$$
f_B \approx f_A (1 - \frac{v}{c})
$$

Using $v \approx gh/c$,

$$
\frac{f_B}{f_A} \approx (1 - \frac{gh}{c^2})
$$

Thus, the receiver measures a lower frequency. The number of oscillations counted by each clock is invariant. Therefore,

$$
f_A d\tau_A = f_B d\tau_B \implies \frac{d\tau_B}{d\tau_A} = \frac{f_A}{f_B} = \frac{1}{(1 - \frac{gh}{c^2})}
$$

Since $gh/c^2 \ll 1$, we use

$$
\frac{1}{1 - x} \approx 1 + x
$$

Hence,

$$
\frac{d\tau_B}{d\tau_A} \approx 1 + \frac{gh}{c^2}
$$

This tells us that the upper clock runs faster. In Newtonian gravity, the gravitational potential difference between two points in a uniform gravitational field is

$$
\Phi_B - \Phi_A = gh
$$

Therefore,

$$
\frac{d\tau_B}{d\tau_A} \approx 1 + \frac{\Phi_B - \Phi_A}{c^2}
$$

We can choose A as our reference point and define its gravitational potential to be zero:

$$
\Phi_A = 0
$$

We can also identify its proper-time interval with the reference time interval:

$$
d\tau_A = dt
$$

In the weak-field approximation, the gravitational time dilation is:

$$
d \tau = (1 + \frac{\Phi}{c^2}) dt
$$

For a rocket at rest,

$$
d \tau^2 = - g_{00} d t^2 
$$

$$
g_{00} = - (1 + \frac{2 \Phi}{c^2})
$$

to first order in $\Phi/c^2$. 

The potential is part of geometry - $\Phi$ is geometry. It tells us how fast time runs from place to place.

### From Free Fall to the Geodesic Equation

In Newtonian mechanics, a freely moving particle in the absence of forces satisfies

$$
\frac{d^2 x^i}{dt^2} = 0
$$

In special relativity, the corresponding statement is that a freely moving particle follows a straight worldline in Minkowski spacetime. Its four-position is:

$$
\xi^\alpha = \xi^\alpha(\tau)
$$

Here, $\xi^\alpha$ represents coordinates in an inertial, freely falling reference frame. The four-velocity is:

$$
U^\alpha = \frac{d \xi^\alpha}{d\tau}
$$

For free motion:

$$
\frac{d U^\alpha}{d\tau} = \frac{d^2 \xi^\alpha}{d\tau^2} = 0
$$

Free fall is a geodesic. The freely falling frame experiences no force. So a particle moves at constant speed. 

Now consider a ground coordinate fixed to earth $x^\mu$. and falling coordinate carried by the box $\xi^\alpha$

$$
\xi^\alpha = \xi^\alpha(x^\mu)
$$

$$
\frac{d \xi^\alpha}{d\tau} = \frac{\partial \xi^\alpha}{\partial x^\mu} \frac{d x^\mu}{d \tau}
$$

$$
\frac{d^2 \xi^\alpha}{d\tau^2} = 0 = \frac{\partial \xi^\alpha}{\partial x^\mu} \frac{d^2 x^\mu}{d \tau^2} + \frac{\partial^2 \xi^\alpha}{\partial x^\mu \partial x^\nu} \frac{d x^\mu}{d \tau} \frac{d x^\nu}{d \tau} 
$$

Therefore,

$$
\frac{d^2 x^\lambda}{d \tau^2} + \Gamma^\lambda_{\mu \nu} \frac{d x^\mu}{d \tau} \frac{d x^\nu}{d \tau} = 0
$$

where,

$$
\Gamma^\lambda_{\mu \nu} = \frac{\partial x^\lambda} {\partial \xi^\alpha} \frac{\partial^2 \xi^\alpha}{\partial x^\mu \partial x^\nu}
$$

This is the geodesic equation.

### Christoffel Symbol

We need a mathematical expression for $\Gamma^\lambda_{\mu\nu}$ in terms of the metric. We impose two conditions on the connection:

1. Metric compatibility: $\nabla_\lambda g_{\mu \nu} = 0$
2. Torsion-free connection: $\Gamma^\lambda_{\mu \nu} = \Gamma^\lambda_{\nu \mu}$

Metric compatibility gives:

$$
\nabla_\mu g_{\nu \rho} = 0
$$

$$
\partial_\mu g_{\nu \rho} - \Gamma^\sigma_{\mu \nu} g_{\sigma \rho} - \Gamma^\sigma_{\mu \rho} g_{\nu \sigma} = 0
$$

$$
\partial_\mu g_{\nu \rho} = \Gamma^\sigma_{\mu \nu} g_{\sigma \rho} + \Gamma^\sigma_{\mu \rho} g_{\nu \sigma}
$$

We can write two more such equations by permuting the indices and using the symmetry of Christoffel symbol, we obtain

$$
\Gamma^\lambda_{\mu \nu} = \frac{1}{2} g^{\lambda \rho} (\partial_\mu g_{\rho \nu} + \partial_\nu g_{\mu \rho} - \partial_\rho g_{\mu \nu})
$$

This is the Levi-Civita connection.


### Recovering Newtonian Gravity

We have obtained the geodesic equation:

$$
\frac{d^2 x^\lambda}{d \tau^2} + \Gamma^\lambda_{\mu \nu} \frac{d x^\mu}{d \tau} \frac{d x^\nu}{d \tau} = 0
$$

But we don't yet know whether this describes the gravity we observe. 

We need to recover Newtonian gravity in the appropriate limit. This is called the Newtonian limit of General Relativity.

We make three assumptions:

1. The gravitational field is weak: $|\Phi|/c^2 \ll 1$
2. The gravitational field is static: $\partial_0 g_{\mu \nu} = 0$
3. The particle moves slowly compared with the speed of light: $v \ll c$

Analogy between Einstein and Newton,

$$
\begin{array}{|c|c|c|}
\hline
\text{Analogy} & \text{Newton} & \text{Einstein}  \\
\hline
\text{potential} & \Phi & g_{\mu \nu}  \\
\text{field: force per unit mass} & \vec{g} = - \nabla \Phi & \Gamma^\lambda_{\mu \nu} \\
\hline
\end{array}
$$

Take a slow particle in a weak static field (example: Earth's field). Almost all of its motion is through time.

$$
\frac{dx^0}{d \tau} \approx c, \qquad \frac{dx^i}{d\tau} \ll c
$$

So

$$
\frac{d^2 x^i}{d \tau^2} \approx - \Gamma^i_{00} c^2
$$

Also,

$$
\Gamma^i_{00} = \frac{1}{2} g^{i \rho} (\partial_0 g_{\rho 0} + \partial_0 g_{0 \rho} - \partial_\rho g_{0 0})
$$

Static field means $\partial_0 g_{\mu \nu} = 0$,

$$
\Gamma^i_{00} \approx - \frac{1}{2} \partial_i g_{0 0}
$$

So,

$$
\frac{d^2 x^i}{d \tau^2} = \frac{c^2}{2} \partial_i g_{0 0}
$$

$$
g_{00} = - (1 + \frac{2 \Phi}{c^2}) \implies \partial_i g_{0 0} = - \frac{2}{c^2} \partial_i \Phi
$$

Thus, accelaration is

$$
\frac{d^2 \vec{x}}{dt^2} = - \nabla \Phi
$$


### How Matter Creates Geometry?

The Newton–Poisson equation describes how the gravitational potential is related to the distribution of mass in space.

$$
\nabla^2 \Phi = 4 \pi G \rho
$$

Consider a point mass $M$ located at the origin. The gravitational force experienced by a test mass $m$ at position $\mathbf r$ is

$$
\mathbf{F} = - \frac{GMm}{r^2} \hat{\mathbf r}
$$

Dividing by the test mass gives the gravitational acceleration:

$$
\mathbf{g} = \frac{\mathbf{F}}{m} = - \frac{GM}{r^2} \hat{\mathbf r}
$$

The negative sign indicates that gravity points toward the source mass.

We define the gravitational potential $\Phi$ such that the gravitational acceleration is the negative gradient of the potential:

$$
\mathbf{g} = - \nabla \Phi
$$

For a point mass with spherical symmetry, the potential depends only on the radial coordinate $r$.

Therefore, 

$$
g_r = - \frac{d\Phi}{dr} = - \frac{GM}{r^2}
$$

$$
\frac{d\Phi}{dr} = \frac{GM}{r^2}
$$

$$
\Phi(r) = GM \int \frac{1}{r^2} dr
$$

Taking the gravitational potential to vanish at infinity,

$$
\Phi(r) = - \frac{GM}{r}
$$

The Laplacian of a scalar function in spherical coordinates is

$$
\nabla^2 = \frac{1}{r^2} \frac{\partial}{\partial r} (r^2 \frac{\partial}{\partial r}) + \frac{1}{r^2 \sin \theta} \frac{\partial}{\partial \theta} (\sin \theta \frac{\partial}{\partial \theta}) + \frac{1}{r^2 \sin^2 \theta} \frac{\partial^2}{\partial \phi^2}
$$

Since the potential is spherically symmetric, it depends only on $r$. Thus,

$$
\nabla^2 \Phi =  \frac{1}{r^2} \frac{d }{d r} (r^2 \frac{d \Phi}{d r}) = \frac{1}{r^2} \frac{d }{d r} (r^2 \frac{GM}{r^2}) = 0, \space r \ne 0
$$

Apply Gauss's theorem,

$$
\mathbf g = - \nabla \Phi
$$

$$
\nabla \cdot \mathbf g = - \nabla \cdot (\nabla \Phi) = - \nabla^2 \Phi
$$

Gauss's divergence theorem states:

$$
\oint \mathbf{g} \cdot d \mathbf A = \int_V (\nabla \cdot \mathbf{g}) dV
$$

Using Newton's gravitational field,

$$
\oint \mathbf{g} \cdot d \mathbf A = - \frac{GM}{r^2} 4 \pi r^2
$$

Therefore,

$$
\int_V (\nabla \cdot \mathbf{g}) dV = - 4 \pi GM
$$

For general mass distribution,

$$
M = \int_V \rho dV
$$

Consequently,

$$
\int_V (\nabla \cdot \mathbf{g}) dV = - 4 \pi G \int_V \rho dV
$$

Since this holds for arbitrary volumes, the integrands must be equal:

$$
\nabla \cdot \mathbf{g} = - 4 \pi G \rho
$$

Therefore,

$$
\nabla^2 \Phi =  4 \pi G \rho
$$


### From Gravitational Acceleration To Tidal Effects

Let's consider two nearby freely falling particles.

Because a uniform gravitational acceleration can be eliminated by choosing a freely falling reference frame. But the difference in acceleration between nearby particles cannot generally be eliminated.

This difference is called a tidal effect.

Let the particles have positions:

$$
\vec{x} \text{ and } \vec{x} + \vec{\xi} 
$$

where $\vec \xi$ is their small separation vector.

The acceleration of the first particle is:

$$
\vec{a}(\vec{x}) = - \nabla \Phi(\vec{x}) 
$$

The acceleration of the second particle is:

$$
\vec{a}(\vec{x} + \vec{\xi}) = - \nabla \Phi(\vec{x} + \vec{\xi}) 
$$

Using a first-order Taylor expansion:

$$
\partial_i \Phi(\vec{x} + \vec{\xi}) \approx \partial_i \Phi(\vec{x}) + \xi^j \partial_j \partial_i \Phi
$$

Therefore, their relative acceleration is:

$$
\delta a^i = - \xi^j \partial_j \partial_i \Phi
$$

$$
\delta a^i = - \frac{\partial^2 \Phi}{\partial x^i \partial x^j} \xi^j
$$

This gives us the Newtonian tidal tensor:

$$
\frac{\partial^2 \Phi}{\partial x^i \partial x^j} = \begin{pmatrix}
\Phi_{xx} & \Phi_{xy} & \Phi_{xz} \\
\Phi_{yx} & \Phi_{yy} & \Phi_{yz} \\
\Phi_{zx} & \Phi_{zy} & \Phi_{zz} \\
\end{pmatrix}
$$

The trace or sum of diagonals,

$$
\nabla^2 \Phi = \Phi_{xx} + \Phi_{yy} + \Phi_{zz} = 4 \pi G \rho
$$

In empty space, 

$$
\nabla^2 \Phi = 0
$$

Inside matter, the ball shrinks,

$$
\frac{\ddot{V}}{V} = - 4 \pi G \rho
$$


### Tidal Gravity Becomes Spacetime Curvature

In General Relativity, we replace the Newtonian description of tidal acceleration with the Riemann curvature tensor.

 Two nearby falling particles drift apart or together because spacetime is curved and the Riemann tensor measures it. 

$$
\boxed{
\frac{D^2 \xi^\mu}{d \tau^2} = R^\mu_{\nu \rho \sigma} u^\nu u^\rho \xi^\sigma
}
$$

Connect curvature to Newtonian tidal tensor. For a slowly moving particle:

$$
u^0 = \frac{dx^0}{d\tau} \approx c
$$

$$
u^i \approx 0
$$

The spatial component of geodesic deviation becomes:

$$
\frac{D^2 \xi^i}{d\tau^2} \approx R^i_{00j} c^2 \xi^j
$$

Because the Riemann tensor is antisymmetric in its last two indices:

$$
R^i_{00j} = - R^i_{0j0}
$$

So,

$$
\frac{D^2 \xi^i}{d\tau^2} \approx - R^i_{0j0} c^2 \xi^j
$$

Compare this with the Newtonian tidal equation:

$$
\delta a^i = - \partial_i \partial_j \Phi \xi^j
$$

We identify,

$$
R^i_{0j0} \approx \frac{1}{c^2} \frac{\partial^2 \Phi}{\partial x^i \partial x^j}
$$

This is the weak-field relationship between spacetime curvature and the Newtonian tidal tensor.

The Riemann tensor is the relativistic generalization of the tidal tensor.

Newton law already states that a trace of the curvature is fixed by the matter,

$$
R_{00} \approx \frac{1}{c^2} \nabla^2 \Phi = \frac{4 \pi G}{c^2} \rho
$$

This is one of the most important steps in the entire derivation.


### Energy Momentum Tensor And Curvature

Our Newtonian equation contains $\rho$. But mass density alone is insufficient in relativity because mass and energy are related. 

Furthermore, energy and momentum are components of a single four-vector.

In relativity, mass is a form of energy. And energy is tangled up with momentum, pressure and stress.

$$
\begin{pmatrix}
T_{00} & T_{01} & T_{02} & T_{03} \\
T_{10} & T_{11} & T_{12} & T_{13} \\
T_{20} & T_{21} & T_{22} & T_{23} \\
T_{30} & T_{31} & T_{32} & T_{33} \\
\end{pmatrix}
$$

$T_{00}$ is energy density ($\rho c^2$), $T_{0i}$ or $T_{i0}$ is momentum density and energy flux, rest is momentum flux, pressure and shear stress

Now we use the template to get a tensor built from the metric and its second derivative.

$$
[?]_{\mu \nu} (g, \partial g, \partial^2 g) = \kappa T_{\mu \nu}
$$

It must satisfy 4 conditions,

1. It is a tensor
2. Contains at most second derivative of metric 
3. Weak static fields give back poisson
4. Energy and momentum are conserved


Conservation is local, the four divergence of $T$ vanishes,

$$
\partial_\mu T^{\mu \nu} = 0
$$

The energy in the box changes by what flows through the walls. 

$$
\partial_0 T^{00} + \partial_i T^{i0} = 0
$$

This is the local conservation equation for energy. The first term describes how energy density changes with time. The second describes the flow of energy through space.

The space component say the same for momentum,

$$
\partial_0 T^{0j} + \partial_i T^{ij} = 0
$$

This expresses momentum conservation. The divergence of the stress tensor describes the net momentum flux through a small volume.

In curved spacetime, we replace ordinary derivative by covariant derivative,

$$
\nabla_\mu T^{\mu \nu} = 0
$$

This is the law of motion of the matter.

$$
[?]^{\mu \nu} = \kappa T^{\mu \nu}
$$

$$
\nabla_\mu [?]^{\mu \nu} = \kappa \nabla_\mu T^{\mu \nu} = 0
$$

Einstein's first serious guess,

$$
R_{\mu \nu} = \kappa T_{\mu \nu} ?
$$

Ricci is a natural guess. If

$$
R_{\mu \nu} = \kappa T_{\mu \nu}
$$

$$
\nabla^\mu R_{\mu \nu} = \kappa \nabla^\mu T_{\mu \nu} = 0
$$

But, we know that

$$
\nabla^\mu R_{\mu \nu} = \frac{1}{2} \nabla_\nu R
$$

This is an identity of geometry true for every metric.

Therefore,

$$
\nabla_\nu R = 0
$$

which means that R must be same through out the spacetime. To check if this is true, 

$$
g^{\mu \nu} R_{\mu \nu} = \kappa g^{\mu \nu} T_{\mu \nu}
$$

$$
R = \kappa T
$$

The trace of stress energy tensor. So, $T$ would have to be constant too. This is simply not true.

### Bianchi Identity

We will use the trick - go into free fall.

At any coordinate $p$, we can choose coordinate such that first derivative of the metric vanishes.

$$
\partial_\lambda g_{\mu \nu}(p) = 0
$$

$$
\Gamma^\lambda_{\mu \nu} (p) = 0 \implies \nabla_\lambda = \partial_\lambda
$$

We can get to 

$$
\partial_\lambda R_{\rho \sigma \mu \nu} + \partial_\mu R_{\rho \sigma \nu \lambda} + \partial_\nu R_{\rho \sigma \lambda \mu} = 0
$$

in one coordinate system. But it is a tensor equation so for any point, this is true,

$$
\nabla_\lambda R_{\rho \sigma \mu \nu} + \nabla_\mu R_{\rho \sigma \nu \lambda} + \nabla_\nu R_{\rho \sigma \lambda \mu} = 0
$$

Now contract with $g^{\rho \mu}$, then with $g^{\sigma \nu}$

$$
\nabla^\mu R_{\mu \nu} = \frac{1}{2} \nabla_\nu R
$$


### The Einstein Tensor

Try some combination of $R_{\mu \nu}$ and $R g_{\mu \nu}$,

$$
R_{\mu \nu} + a R g_{\mu \nu}
$$

Take its divergence,

$$
\nabla^\mu (R_{\mu \nu} + a R g_{\mu \nu}) = \nabla^\mu R_{\mu \nu} + a \nabla_\nu R\\
 = \frac{1}{2} \nabla_\nu R + a \nabla_\nu R = (\frac{1}{2} + a) \nabla_\nu R
$$

For this to vanish for every metric, we need 

$$
a = - \frac{1}{2}
$$

Now we get einstein tensor,

$$
G_{\mu \nu} = R_{\mu \nu} - \frac{1}{2} R g_{\mu \nu}
$$

By geometry alone,

$$
\nabla^\mu G_{\mu \nu} = 0
$$


conservation is no longer an extra assumption, it is built into field equation.

Also,

$$
\nabla^\mu g_{\mu \nu} = 0
$$

$$
G_{\mu \nu} + \Lambda g_{\mu \nu} = \kappa T_{\mu \nu}
$$

The consmological constant was added in 1917 but was left out initially in 1915.


### Coupling Constant

Now to find $\kappa$, you need weak, static field, slow matter, Newton must comback.

$$
G_{\mu \nu} = \kappa T_{\mu \nu}
$$

$$
R_{\mu \nu} - \frac{1}{2} R g_{\mu \nu} = \kappa T_{\mu \nu}
$$

Contracting both sides with $g^{\mu \nu}$,

$$
g^{\mu \nu} R_{\mu \nu} - \frac{1}{2} R g^{\mu \nu} g_{\mu \nu} = \kappa g^{\mu \nu} T_{\mu \nu}
$$

$$
R - \frac{1}{2} R (4) = \kappa T
$$

Therefore,

$$
R = - \kappa T
$$

This is the trace equation.

Now return to the original field equation:

$$
R_{\mu \nu} - \frac{1}{2} R g_{\mu \nu} = \kappa T_{\mu \nu}
$$

$$
R_{\mu \nu} + \frac{1}{2} \kappa T g_{\mu \nu} = \kappa T_{\mu \nu}
$$

Therefore,

$$
R_{\mu \nu} = \kappa (T_{\mu \nu} - \frac{1}{2}  T g_{\mu \nu} )
$$

This is called the trace-reversed form of Einstein's field equations. It will make the Newtonian limit much easier.

For nonrelativistic matter at rest:

$$
T_{00} \approx \rho c^2
$$

The trace is 

$$
T = g^{\mu \nu} T_{\mu \nu}
$$

Since the spatial stresses are negligible:

$$
T \approx g^{00} T_{00}
$$

In the weak-field limit:

$$
g^{00} \approx - 1
$$

Therefore,

$$
T \approx - \rho c^2
$$

Now consider the $00$ component of the trace-reversed equation:

$$
R_{0 0} = \kappa (T_{0 0} - \frac{1}{2} T g_{0 0} )
$$

$$
R_{0 0} = \kappa (\rho c^2 + \frac{1}{2} (-\rho c^2)(-1))
$$

$$
R_{0 0} \approx  \frac{1}{2} \kappa \rho c^2
$$

Comparing with Newtonian gravity,

$$
R_{00} \approx \frac{4 \pi G}{c^2} \rho
$$

Finally we get,

$$
\kappa = \frac{8 \pi G}{c^4}
$$

Therefore, the Einstein field equations take the form,

$$
\boxed{
R_{\mu \nu} - \frac{1}{2} R g_{\mu \nu} = \frac{8 \pi G}{c^4} T_{\mu \nu}
}
$$
