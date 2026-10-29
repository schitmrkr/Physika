### Symmetry

A symmetry is a tranformation that leaves some specified aspect of a system unchanged. 

For example, imagine a circle centered at the origin. Rotate it by any angle. Its appearance remains unchanged. Mathematically, a rotation transforms a position vector according to

$$
\mathbf{x} \to R \mathbf{x}
$$

where $R$ is a rotation matrix. For 2 dimensional rotation,

$$
R(\theta) = \begin{pmatrix}
\cos \theta & - \sin \theta \\
\sin \theta & \cos \theta
\end{pmatrix}
$$

The distance from the origin is preserved:

$$
|R(\mathbf{x})|^2 = |\mathbf{x}|^2
$$

A transformation changes the description, while a particular physical quantity remains unchanged.

A symmetry of a geometric object is not automatically a symmetry of a physical theory. In physics, we must specify what transforms and what remains invariant.

### Symmetry of physical theory

Suppose a theory is described by a collection of fields $\phi(x)$ and a Lagrangian density

$$
\mathcal{L}(\phi, \partial_\mu \phi)
$$

The action is

$$
S = \int d^4 x \space \mathcal{L}
$$

The action determines the equations of motion through the principle of stationary action.

A transformation is a symmetry of the theory if it preserves the action, with appropriate care for boundary terms:

$$
S[\phi'] = S[\phi]
$$

Here, $\phi'$ is a transformed field. 

This is stronger than saying that one observable remains unchanged. We want the transformation to preserve the physical laws encoded by the action.

Spatial translation symmetry means that shifting the entire system by a constant displacement does not change the laws governing it. Under suitable conditions, Noether's theorem connects this continuous symmetry to conservation of momentum.

Similarly,

$$
\begin{array}{c|c}
\text{Symmetry} & \text{Associated conserved quantity} \\
\hline
\text{Time translations} & \text{Energy} \\
\text{Spatial translations} & \text{Momentum} \\
\text{Spatial rotations} & \text{Angular momentum} \\
\text{Global phase symmetry of a} & \text{A conserved charge} \\ 
\text{ complex matter field} & \space \\
\end{array}
$$

The last example will lead us toward gauge theory.

### Global phase symmetry

Consider a complex scalar field $\psi(x)$. A complex field assigns a complex number to every spacetime point $x$.

We can write it as 

$$
\psi(x) = \rho(x) e^{i \theta(x)}
$$

The field has an amplitude $\rho(x)$ and a phase $\theta(x)$.

Now perform the transformation

$$
\psi(x) \to \psi'(x) = e^{i \alpha} \psi(x)
$$

where $\alpha$ is a constant, independent of spacetime position. This transformation rotates every complex value by the same phase angle.

Under the transformation,

$$
|\psi'(x)|^2 = |e^{i \alpha} \psi(x)|^2 = |\psi(x)|^2 
$$

the amplitude is unchanged.

The derivative transforms similarly because $\alpha$ is a constant. 

$$
\partial_\mu \psi' = e^{i \alpha} \partial_\mu \psi
$$

Consequently, both terms in the free complex scalar field Lagrangian,

$$
\mathcal{L} = \partial_\mu \psi^* \partial^\mu \psi - m^2 \psi^* \psi
$$

remain unchanged under this transformation.

Because the same angle $\alpha$ applies everywhere, it is a global symmetry. Every point receives the same phase rotation.


### Local phase symmetry

Now let the phase depend on spacetime,

$$
\psi(x) \to \psi'(x) = e^{i \alpha(x)} \psi(x)
$$

This is called a local phase transformation. The probability density is still unchanged at every point,

$$
|\psi'(x)|^2 = |\psi(x)|^2
$$

But the derivative is now different,

$$
\partial_\mu \psi' = e^{i \alpha(x)} [\partial_\mu \psi + i (\partial_\mu \alpha) \psi]
$$

### Notes

In ordinary mechanics,

$$
L = T - V
$$

For example, for a non-relativistic particle moving in one dimension,

$$
L = \frac{1}{2} m \dot{x}^2 - V(x)
$$

The Lagrangian is a function of the particle's position and velocity. It allows us to derive the equation of motion using the principle of least (more precisely, stationary) action.

In field theory, the basic object is the Lagrangian density, written $\mathcal{L}$, rather than simply $L$.

The Lagrangian density describes the dynamics of a field at each point in spacetime. Integrating it over space gives the Lagrangian, and integrating it over spacetime gives the action:

$$
L(t) = \int d^3 x \space \mathcal{L}(x)
$$

$$
S = \int d^4 x \space \mathcal{L}(x)
$$

The action $S$ is the quantity whose stationary value determines the physical equations of motion.

$$
\mathcal{L} = \partial_\mu \psi^* \partial^\mu \psi - m^2 \psi^* \psi
$$

First term,

$$
\mathcal{L}_{\text{kin}} = \partial_\mu \psi^* \partial^\mu \psi
$$

Using the spacetime metric with signature $(+,-,-,-)$, the kinetic term becomes

$$
\partial_\mu \psi^* \partial^\mu \psi = |\partial_t \psi|^2 - |\nabla \psi|^2
$$

The time-derivative part is associated with the field's kinetic energy, while the spatial-derivative part describes spatial variations and contributes to the energy as well.

Second term,

$$
\mathcal{L}_{\text{mass}} = - m^2 \psi^* \psi = - m^2 |\psi|^2
$$

The mass term determines an important part of the field's dynamics. In particular, it sets the mass scale of the particle associated with the field.

***


