### Tensor Analysis and Riemannian Geometry

Take for example the summation:

$$
S = a_1 x_1 + a_2 x_2 + .... + a_n x_n 
$$

We can write it as:

$$
S = \sum_{i=1}^n a_i x_i
$$

Now in Einstein's notation, we can write it as:

$$
S = a_i x^i
$$

Example:

$$
df = \frac{\partial{f}}{\partial{x^1}} dx^1 + \frac{\partial{f}}{\partial{x^2}} dx^2 + ... + \frac{\partial{f}}{\partial{x^n}} dx^n
$$

$$
df = \sum_{i=1}^n \frac{\partial f}{\partial x^i} dx^i
$$

$$
df = \frac{\partial{f}}{\partial{x^{\alpha}}} dx^{\alpha}
$$

Example:

$$
S = g_{\alpha\beta}x^{\alpha}x^{\beta}
$$

$$
S = g_{1\beta} x^1 x^{\beta} + g_{2\beta} x^2 x^{\beta} + g_{3\beta} x^3 x^{\beta} 
$$

$$
S = g_{11}x^1x^1 + g_{12}x^1x^2 + g_{13}x^1x^3 + g_{21}x^2x^1 + g_{22}x^2x^2 + g_{23}x^2x^3 + g_{31}x^3x^1 + g_{32}x^3x^2 + g_{33}x^3x^3  
$$

This represents a double sum:

$$
S = \sum_{\alpha = 1}^3 \sum_{\beta = 1}^3 g_{\alpha \beta} x^{\alpha} x^{\beta}
$$

$g_{\alpha \beta}$ can be thought of as a square matrix. 

### The Kronecker Deltas

We define Kronecker $\delta^{i}_{j}$ to be equal to 0 when $i \ne j$, and to equal one if $i = j$. 

$\delta^{i}_{j}$ can be thought of as identity matrix.

Example:

$$
S = a_{\alpha} x^{\alpha}_{\mu}
$$

$$
\frac{\partial{S}}{\partial{x^{\mu}}} = a_{\alpha}\frac{\partial{x^{\alpha}}}{\partial{x^\mu}}
$$

$$
\frac{\partial{S}}{\partial{x^{\mu}}} = a_{\alpha} \delta^\alpha_\mu
$$


### Determinants

We define the determinant $|a^i_j|$ by the equation:

$$
|a^i_j| = \begin{vmatrix}
a^1_1 && a^1_2 && .. && a^1_n \\
a^2_1 && a^2_2 && .. && a^2_n \\
.. && .. && .. && .. \\
.. && .. && .. && .. \\
a^n_1 && a^n_2 && .. && a^n_n
\end{vmatrix} = \epsilon_{i_1 i_2 .... i_n} a^{i_1}_1 a^{i_2}_2 .... a^{i_n}_n
$$

$$
|a^i_j| = \epsilon_{i_1 i_2 .... i_n} a^{i_1}_1 a^{i_2}_2 .... a^{i_n}_n
$$

### Contravariant Vectors

Elements of n-space are of form $(x^1,x^2,...,x^n)$, the $x^i$ taken as real. 

We consider the arithmetic n-space and define a space curve in this $V_n$ by

$$
x^i = x^i(t), \space i=1,2,..,n \\
\alpha \le t \le \beta
$$

Now we can define tangent vector to the space curve as having the components.

$$
\frac{dx^i}{dt}, \space i = 1,2,..,n
$$

Consider an allowable (one to one and single valued) coordinate transformation.

$$
y^i = y^i(x^1,x^2,..,x^n) \\
= y^i[x^1(t),x^2(t),..,x^n(t) \\
= y^i(t)
$$

The relationship between tangent of x coordinate system and tangent of y coordinate system,

$$
\frac{dy^i}{dt} = \frac{\partial y^i}{\partial x^\alpha} \frac{dx^\alpha}{dt}
$$

We now make the following generalization: Any set of numbers $A^i(x^1, x^2, .., x^n), \space i=1,2,..,n$, which transforms according to the law

$$
\bar{A}^i(\bar{x}^1, \bar{x}^2, .., \bar{x}^n) = A^\alpha(x^1,x^2, .., x^n) \frac{\partial \bar{x}^i}{\partial x^\alpha}
$$

Under the coordinate transformation $\bar{x}^i = \bar{x}^i(x^1, x^2, .., x^n)$ are saaid to be the components of a contravariant vector. The vector is the abstract quantity which is represented in each coordinate system x by the set of components $A^i(x)$.

Example:

Let X, Y,  be the components of a contravariant vector in a Euclidean space, for an orthogonal coordinate system, and let $ds^2=dx^2+dy^2+dz^2$. The components of this vector in a polar coordinate system are

$$
R = X \frac{\partial r}{\partial x} + Y \frac{\partial r}{\partial y} + Z \frac{\partial r}{\partial z} = cos\theta X + sin \theta Y 
$$

$$\Theta = X \frac{\partial \theta}{\partial x} + Y \frac{\partial \theta}{\partial y} + Z \frac{\partial \theta}{\partial z} = \frac{-sin\theta}{r} X + \frac{cos\theta}{r} Y
$$

$$
Z = X \frac{\partial z}{\partial x} + Y \frac{\partial z}{\partial y} + Z \frac{\partial z}{\partial z} = Z
$$

### Covariant Vectors

Consider scalar point function $\phi = \phi(x^1,x^2,..,x^n)$, and form the n-tuple.

$$
(\frac{\partial\phi}{\partial x^1}, \frac{\partial\phi}{\partial x^2}, .., \frac{\partial\phi}{\partial x^n})
$$

Now under the coordinate transformation

$$
\frac{\partial \phi}{\partial y^i} = \frac{\partial \phi}{\partial x^\alpha} \frac{x^\alpha}{\partial y^i}
$$

We say that the $\frac{\partial \phi}{\partial x^i}$ are the components of a covariant vector, called the gradient of $\phi$. 

$$
\bar{A}_i = A_\alpha \frac{\partial x^\alpha}{\partial \bar{x}^i}
$$

the $A_i$ are said to be the components of a covariant vector. 

### Scalar Product of Two Vectors

Let $A^i(x)$ and $B_i(x)$ be the components of a contravariant and a covariant vector. We for the scalar $A^\alpha B_\alpha$. Now,

$$
A^\alpha = \bar{A}^\beta \frac{\partial x^\alpha}{\partial \bar{x}^\beta} 
$$

$$
B^\alpha = \bar{B}_\sigma \frac{\partial \bar{x}^\sigma}{\partial x^\alpha}
$$

so that

$$
A^\alpha B_\alpha = \bar{A}^\beta \bar{B}_\sigma \frac{\partial x^\alpha}{\partial \bar{x}^\beta} \frac{\partial \bar{x}^\sigma}{\partial x^\alpha} = \bar{A}^\beta \bar{B}_\sigma \frac{\partial \bar{x}^\sigma}{\partial \bar{x}^\beta} = \bar{A}^\beta \bar{B}_\sigma \delta^\sigma_\beta = \bar{A}^\alpha \bar{B}_\alpha
$$


### Contravariant vs. Covariant Vectors

The names **contravariant** and **covariant** describe how the components of a vector change under a coordinate transformation.

#### Contravariant Vector

A contravariant vector transforms with the **forward Jacobian** of the coordinate transformation:

$$
\bar{A}^{i} = \frac{\partial \bar{x}^{\,i}}{\partial x^\alpha} A^\alpha
$$

A tangent vector to a curve,

$$
A^i = \frac{dx^i}{dt},
$$

is the canonical example. Since the coordinates transform as
$$
\bar{x}^i=\bar{x}^i(x),
$$
the chain rule gives

$$
\frac{d\bar{x}^i}{dt}
=
\frac{\partial \bar{x}^i}{\partial x^\alpha}
\frac{dx^\alpha}{dt},
$$

which matches the contravariant transformation law.

#### Covariant Vector

A covariant vector transforms with the **inverse Jacobian**:

$$
\bar{A}_{i}
=
A_\alpha
\frac{\partial x^\alpha}{\partial \bar{x}^{\,i}}
$$

The gradient of a scalar field,

$$
A_i=\frac{\partial\phi}{\partial x^i},
$$

is the canonical example. Applying the chain rule,

$$
\frac{\partial\phi}{\partial\bar{x}^i}
=
\frac{\partial\phi}{\partial x^\alpha}
\frac{\partial x^\alpha}{\partial\bar{x}^i},
$$

shows that gradients obey the covariant transformation law.

#### Why the Names?

- **Contravariant** vectors transform **opposite to the change of basis**, using the forward Jacobian.
- **Covariant** vectors transform **with the change of basis**, using the inverse Jacobian.

The contraction of one contravariant and one covariant vector is invariant under coordinate transformations:

$$
A^\alpha B_\alpha
=
\bar{A}^{\alpha}\bar{B}_{\alpha},
$$

because the Jacobian and its inverse cancel via the chain rule:

$$
\frac{\partial x^\alpha}{\partial \bar{x}^\beta}
\frac{\partial \bar{x}^\sigma}{\partial x^\alpha}
=
\delta^\sigma_\beta.
$$