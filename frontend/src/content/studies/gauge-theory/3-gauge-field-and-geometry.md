### The Covariant Derivative and the Gauge Connection

The derivative of a locally transformed matter field should transform in the same way as the matter field itself.

We will use natural units, $\hbar=c=1$, and the following conventions throughout this lesson:

$$
\begin{array}{c|c}
\text{Quantity} & \text{Definition} \\
\hline
\text{Matter field} & \psi(x), \text{ a complex scalar field} \\
\text{Gauge parameter} & \alpha(x), \text{a real function} \\
\text{Charge/coupling} & q, \text{ a real constant} \\
\text{Gauge potential} & A_\mu(x) \\ 
\text{Local transformation} & \psi'(x) = e^{iq\alpha(x)}\psi(x) \\
\text{Covariant derivative} & D_\mu = \partial_\mu + iq A_\mu
\end{array}
$$

### Why ordinary derivatives fail?

Start with the local transformation

$$
\psi'(x) = e^{iq \alpha(x)} \psi(x)
$$

Apply the ordinary derivative, we get

$$
\partial_\mu \psi' = e^{iq\alpha} [\partial_\mu \psi + iq (\partial_\mu \alpha) \psi]
$$

The first term is what we want: the ordinary derivative of $\psi$, multiplied by the same phase factor as the original field.

If $\alpha$ is constant, this term vanishes. But local gauge transformations allow $\alpha$ to vary with spacetime, so we must account for it.

The solution is to modify the derivative by introducing a field $A_\mu(x)$.

### Construct the covariant derivative

Define the covariant derivative by

$$
D_\mu = \partial_\mu + iq A_\mu
$$

Acting on the matter field, it gives

$$
D_\mu \psi = \partial_\mu \psi + iq A_\mu \psi
$$

There are two contributions:

- $\partial_\mu\psi$: measures how the field varies between nearby spacetime points.
- $iqA_\mu\psi$: an additional term that will compensate for the local phase variation.

At this stage, $A_\mu$ is an auxiliary field introduced into the derivative. We have not yet derived its transformation law, nor shown that it describes electromagnetism.

Our requirement is that the covariant derivative transform as

$$
(D_\mu \psi)' = e^{iq \alpha(x)} D_\mu \psi
$$

The left hand side means $D'_\mu \psi'$, where $D'_\mu = \partial_\mu + iq A'_\mu$.

Why impose this condition? Because it ensures that $D_\mu\psi$ transforms like $\psi$ itself. Then products such as $(D_\mu\psi)^*D^\mu\psi$ can remain gauge invariant.


### Derive the gauge-field transformation law

We now derive the law for $A_\mu$ from scratch.

The transformed derivative uses the transformed gauge potential $A'_\mu$:

$$
D'_\mu = \partial_\mu + iq A'_\mu
$$

Act on the transformed field:

$$
D'_\mu \psi' = (\partial_\mu + iq A'_\mu) e^{iq\alpha} \psi
$$

From our earlier calculation,

$$
\partial_\mu \psi' = e^{iq\alpha} [\partial_\mu \psi + iq (\partial_\mu \alpha) \psi]
$$

Substituting this into the covariant derivative gives

$$
D'_\mu \psi' = e^{iq\alpha} [\partial_\mu \psi + iq (\partial_\mu \alpha) \psi] + iq A'_\mu e^{iq\alpha} \psi
$$

$$
D'_\mu \psi' = e^{iq\alpha} [\partial_\mu \psi + iq (\partial_\mu \alpha) \psi + iq A'_\mu \psi]
$$

$$
D'_\mu \psi' = e^{iq\alpha} [\partial_\mu + iq (\partial_\mu \alpha) + iq A'_\mu] \psi
$$

We require this expression to equal

$$
e^{iq\alpha} D_\mu \psi = e^{iq\alpha} [\partial_\mu + iq A_\mu] \psi
$$

For these expressions to agree for arbitrary $\psi$, the gauge potentials must satisfy

$$
A'_\mu + \partial_\mu \alpha = A_\mu
$$

Therefore, the transformation law is

$$
A'_\mu = A_\mu - \partial_\mu \alpha
$$

**The two linked transformations**

$$
\psi'(x) = e^{iq\alpha(x)}\psi(x)
$$

$$
A'_\mu = A_\mu - \partial_\mu \alpha
$$

$$
D'_\mu \psi' = e^{i q \alpha(x)} D_\mu \psi 
$$


### What is a gauge connection, geometrically?

A field $\psi(x)$ assigns an internal complex value to each spacetime point. Its phase defines a direction in the complex plane, and local $U(1)$ transformations allow that phase convention to change independently at each point.

For $U(1)$, the connection is represented by $A_\mu$, and the covariant derivative is
$$
D_\mu\psi=(\partial_\mu + iqA_\mu)\psi
$$

In differential geometry, a connection tells us how to differentiate sections of a bundle while accounting for changes in local frames. Here, the internal space is the complex one-dimensional space associated with the $U(1)$ representation.

This gives us a useful distinction:
- The gauge potential $A_\mu$ is the connection.
- The covariant derivative $D_\mu$ uses that connection to differentiate a field consistently.
- The field strength $F_{\mu\nu}$, which we will derive next, measures the curvature associated with the connection.


### Preview: the electromagnetic field strength

Given the gauge potential, define

$$
F_{\mu \nu} = \partial_\mu A_\nu - \partial_\nu A_\mu
$$

Let's check what happens under our gauge transformation:

$$
A'_\mu = A_\mu - \partial_\mu \alpha
$$

Substitution gives

$$
F'_{\mu \nu} = \partial_\mu (A_\nu - \partial_\nu \alpha) - \partial_\nu (A_\mu - \partial_\mu \alpha)
$$

Expanding,

$$
F'_{\mu \nu} = F_{\mu \nu} - \partial_\mu \partial_\nu \alpha - \partial_\nu \partial_\mu \alpha
$$

For a sufficiently smooth gauge parameter, mixed partial derivatives commute:

$$
\partial_\mu \partial_\nu \alpha = \partial_\nu \partial_\mu \alpha
$$

Thus,

$$
F'_{\mu \nu} = F_{\mu \nu}
$$

The field strength is gauge invariant.

