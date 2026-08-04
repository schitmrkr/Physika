### Tensors

The contravariant and covariant vectors defined above are special cases of differential invariants called tensors. The components of tensors are of form $T^{a_1a_2..a_r}_{b_1b_2..b_s}$ where the indices $a_1, a_2, ...,a_r, b_1, b_2, ...,b_s$ run through the integers $1,2,..,n$ and the components transform according to the rule

$$
\bar{T}^{a_1a_2..a_r}_{b_1b_2..b_s} = |\frac{\partial x}{\partial \bar{x}}|^N \bar{T}^{ \alpha_1 \alpha_2.. \alpha_r}_{\beta_1\beta_2..\beta_s} \frac{\partial \bar{x}^{\alpha_1}}{\partial x^{\alpha_1}} .... \frac{\partial \bar{x}^{\alpha_r}}{\partial x^{\alpha_r}} \frac{\partial x^{\beta_1}}{\partial \bar{x}^{\beta_1}} .... \frac{\partial x^{\beta_s}}{\partial \bar{x}^{\beta_s}}
$$

We call the exponent N of the Jacobian the weight of the tensor field. The tensor field is absolute when $N=0$. The vectors that we dealt with previously are absolute tensors of order 1. The tensor we defined above is said to be contravariant of order $r$ and covariant of order $s$. 

- The sum of two tensors of the same kind is a tensor of same kind. 

- The product of two tensors is a tensor. 

Example:

Assume $g_{\alpha\beta}dx^\alpha dx^\beta$ is invariant:

$$
\bar{g}_{\alpha\beta}d\bar{x}^\alpha d\bar{x}^\beta = g_{\alpha\beta}dx^\alpha dx^\beta 
$$

We know that,

$$
d\bar{x}^\alpha = \frac{\partial \bar{x}^\alpha}{\partial x^\mu} dx^\mu
$$

so,

$$
\bar{g}_{\alpha\beta} \frac{\partial \bar{x}^\alpha}{\partial x^\mu} \frac{\partial \bar{x}^\beta}{\partial x^\nu} dx^\mu dx^\nu = g_{\alpha\beta}dx^\alpha dx^\beta 
$$

$$
(\bar{g}_{\alpha\beta} \frac{\partial \bar{x}^\alpha}{\partial x^\mu} \frac{\partial \bar{x}^\beta}{\partial x^\nu}  - g_{\mu\nu}) dx^\mu dx^\nu = 0
$$

Therefore,

$$
g_{\mu\nu} = \bar{g}_{\alpha \beta} \frac{\partial \bar{x}^\alpha}{\partial x^\mu} \frac{\partial \bar{x}^\beta}{\partial x^\nu} 
$$


### The Line Element

In the Euclidean space of three dimensions we have assumed that

$$
ds^2 = dx^2 + dy^2 + dz^2
$$

In the Euclidean n-space, we have

$$
ds^2 = (dx^1)^2 + (dx^2)^2 + ... + (dx^n)^2 \\
= \delta_{\alpha \beta} dx^\alpha dx^\beta
$$

If  we apply transformation of coordinates

$$
x^i = x^i(\bar{x}^1, \bar{x}^2, ...., \bar{x}^n)
$$

we have that 

$$
dx^i = \frac{\partial x^i}{\partial \bar{x}^\alpha} d \bar{x}^\alpha
$$

so that,

$$
ds^2 = \delta_{\alpha \beta} \frac{\partial x^\alpha}{\partial \bar{x}^\mu} \frac{\partial x^\beta}{\partial \bar{x}^\nu} d\bar{x}^\mu d\bar{x}^\nu
$$

We may write,

$$
ds^2 = \bar{g}_{\mu\nu} d\bar{x}^\mu d\bar{x}^\nu
$$

where,

$$
\bar{g}_{\mu \nu} = \delta_{\alpha \beta} \frac{\partial x^\alpha}{\partial \bar{x}^\mu} \frac{\partial x^\beta}{\partial \bar{x}^\nu}
$$

$$
\sum_{\alpha=1}^n \frac{\partial x^\alpha}{\partial \bar{x}^\mu} \frac{\partial x^\alpha}{\partial \bar{x}^\nu}
$$

The most general form for line element $(ds)^2$ for a Euclidean spaceis the quadratic form:

$$
ds^2 = g_{\alpha \beta} dx^\alpha dx^\beta
$$

The components of $g_{\alpha \beta}$ are the components of metric tensor. 

If there is a coordinate transformation 

$$
x^i = x^i(y^1, y^2, ...., y^n)
$$

such that $ds^2 = \delta_{\alpha \beta} dy^\alpha dy^\beta$, we say that the Riemannian space is Euclidean. Any coordinate system for which $g_{ij}$ are constants is called a cartesian coordinate system.

We can choose the metric tensor symmetric, for

$$
g_{ij} \equiv \frac{1}{2}(g_{ij}+g_{ji}) + \frac{1}{2}(g_{ij}-g_{ji})
$$

The terms $\frac{1}{2}(g_{ij}-g_{ji})$ contribute nothing to the sum $ds^2$. The terms $\frac{1}{2}(g_{ij}+g_{ji})$ are symmetric in $i$ and $j$.

Example:

In a three dimensional Euclidean space $ds^2 = (dx^1)^2 + (dx^2)^2 + (dx^3)^2$ for an orthogonal coordinate system, so that

$$
\left\|g\right\| = \left\|
\begin{matrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1 \\
\end{matrix}
\right\|
$$

Let 

$$
x^1 = r\sin\theta\cos\phi = y^! \sin y^2 \cos y^3 \\
x^1 = r\sin\theta\sin\phi = y^! \sin y^2 \sin y^3 \\
x^1 = r\cos\theta = y^! \sin y^2  \\
$$

Now

$$
\bar{g}_{ij}(r,\theta,\phi) = g_{\alpha \beta} \frac{\partial x^\alpha}{\partial y^i} \frac{\partial x^\beta}{\partial y^i}
$$

$$
= \frac{\partial x^1}{\partial y^i} \frac{\partial x^1}{\partial y^i} + \frac{\partial x^2}{\partial y^i} \frac{\partial x^2}{\partial y^i} + \frac{\partial x^3}{\partial y^i} \frac{\partial x^3}{\partial y^i}
$$

Hence

$$
\bar{g}_{11} = (\sin y^2 \cos y^3)^2 + (\sin y^2 \sin y^3)^2 + (\cos y^2)^2 \\ = 1  
$$

Similarly,
$$
\bar{g}_{22} = (y^1)^2, \space 
\bar{g}_{33} = (y^1)^2(\sin y^2)^2, \space 
\bar{g}_{ij} = 0 \space for \space i \ne j
$$

So that,

$$
ds^2 = (dy^1)^2 + (y^1)^2(dy^2)^2 + (y^1 \sin y^2)^2(dy^3)^2 \\
= dr^2 + r^2d\theta^2 + r^2 \sin^2\theta d\phi^2
$$

is the line element in spherical coordinates. Since g's are not constants, a spherical coordinate system is not a cartesian coordinate system. 

#### Notes

We define $g^{ij}$ as the reciprocal tensor  to $g_{ij}$, that is, $g^{i \alpha} g_{\alpha j} = \delta^i_j$. 

We define the length $L$ of a vector $A^i$ in a Reimannian space by the quadratic form

$$
L^2 = g_{\alpha \beta} A^\alpha A^\beta
$$

The associated vector of $A^i$ is the covariant vector

$$
A_i = g_{i \alpha}A^\alpha
$$

It is easily seen that $A^i=g^{i\beta}A_\beta$, so that

$$
L^2 = g_{\alpha \beta} g^{\alpha \mu} A_\mu g^{\beta \nu} A_\nu = g^{\mu \nu} A_\mu A_\nu
$$

#### Angles between two vectors

Let $A^i$ and $B_j$ be unit vectors. We define the consine of the angle between these two vectors by

$$
\cos \theta = A^i B_i = A^i g_{ij} B^j = g_{ij} A^i B^j \\
= g^{ij} A_j B_i = g^{ij} A_i B_j
$$

If the vectors are not unit vectors,

$$
\cos \theta = \frac{g_{ij} A^i B^j}{(g_{ij} A^i A^j)^{1/2} (g_{ij} B^i B^j)^{1/2}}
$$


