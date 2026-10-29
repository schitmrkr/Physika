### Symmetry and physical equivalence

A symmetry is a transformation that leaves some specified aspect of a system unchanged.

Imagine a circle centred at the origin. Rotate it by any angle and its appearance is unchanged. Mathematically, a rotation transforms a position vector according to

$$
\mathbf{x} \to R\mathbf{x}
$$

where $R$ is a rotation matrix. For a two-dimensional rotation,

$$
R(\theta) = \begin{pmatrix}
\cos\theta & -\sin\theta \\
\sin\theta & \cos\theta
\end{pmatrix}
$$

The distance from the origin is preserved:

$$
|R(\mathbf{x})|^2 = |\mathbf{x}|^2
$$

### Symmetry of a physical theory

A transformation changes the description, while a particular physical quantity remains unchanged. Suppose a theory is described by fields $\phi(x)$ and a Lagrangian density

$$
\mathcal{L}(\phi, \partial_\mu \phi)
$$

with action

$$
S = \int d^4x\;\mathcal{L}.
$$

A transformation is a symmetry of the theory when it preserves the action, with appropriate care for boundary terms:

$$
S[\phi'] = S[\phi].
$$

The important move is to stop asking what the object *looks like* and start asking what the dynamics cannot distinguish. Local symmetry then becomes a generative constraint: demanding invariance forces us to introduce a connection, and the connection begins to behave like a field.

> Working principle: a gauge field is what the theory owes us when invariance is demanded point by point.
