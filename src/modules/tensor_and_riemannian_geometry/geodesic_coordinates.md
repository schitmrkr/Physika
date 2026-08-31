### Geodesic coordinates

The equations of the geodesics are given by 

$$
\frac{d^2 x^i}{ds^2} + \Gamma^i_{jk} \frac{dx^j}{ds} \frac{dx^k}{ds} = 0
$$

where the $\Gamma^i_{jk}$ transforms according to the law

$$
\bar{\Gamma}^i_{jk} = \Gamma^\alpha_{\beta \gamma} \frac{\partial x^\beta}{\partial \bar{x}^j} \frac{\partial x^\gamma}{\partial \bar{x}^k} \frac{\partial \bar{x}^i}{\partial x^\alpha} + \frac{\partial^2 x^\alpha}{\partial \bar{x}^j \partial \bar{x}^k} \frac{\partial \bar{x}^i}{\partial x^\alpha}
$$

If the $\Gamma^i_{jk}$ are different from zero at a point $x^i=q^i$, can we find a coordinate system such that $\bar{\Gamma}^i_{jk} = 0$ at the corresponding point? That is we can,

Let,

$$
\bar{x}^i = (x^i-q^i) + \frac{1}{2}(\Gamma^i_{\alpha \beta})_q (x^\alpha - q^\alpha) (x^\beta - q^\beta)
$$

so that $\frac{\partial \bar{x}^i}{\partial x^j}|_q = \delta^i_j$ and $\left| \frac{\partial \bar{x}^i}{\partial x^j} \right|_q = 1$. Moreover the transformation is non singular. The point $x^i=q^i$ corresponds to the point $\bar{x}^i=0$.

Now differentiating with respect to $\bar{x}^j$, we obtain

$$
\delta^i_j = \frac{\partial x^i}{\partial \bar{x}^j} + (\Gamma^i_{\alpha \beta})_q (x^\alpha - q^\alpha)(x^\beta - q^\beta) \frac{\partial x^\beta}{\partial \bar{x}^j}
$$

because of the symmetry of $\Gamma^i_{\alpha \beta}$.

Now, differentiating with respect to $\bar{x}^k$, we obtain

$$
0 = \frac{\partial^2 x^i}{\partial \bar{x}^k \partial \bar{x}^j} + (\Gamma^i_{\alpha \beta})_q \frac{\partial x^\alpha}{\partial \bar{x}^k} \frac{\partial x^\beta}{\partial \bar{x}^j} + (\Gamma^i_{\alpha \beta})_q (x^\alpha - q^\beta) \frac{\partial^2 x^\beta}{\partial \bar{x}^k \partial \bar{x}^j}
$$

so that,

$$
\frac{\partial^2 x^i}{\partial \bar{x}^k \partial \bar{x}^j}|_q = -(\Gamma^i_{\alpha \beta})_q \frac{\partial x^\alpha}{\partial \bar{x}^k}|_q   \frac{\partial x^\beta}{\partial \bar{x}^j}|_q = - (\Gamma^i_{\alpha \beta})_q \delta^\alpha_k \delta^\beta_j = -(\Gamma^i_{jk})_q
$$

Substituting we get,

$$
(\bar{\Gamma}^i_{jk})_0 = (\Gamma^\alpha_{\beta \gamma})_q \delta^\beta_j  \delta^\gamma_k \delta^i_\alpha - (\Gamma^\alpha_{jk})_q \delta^i_\alpha = (\Gamma^i_{jk})_q - (\Gamma^i_{jk})_q = 0
$$

Q.E.D.

Any coordinate system for which $(\Gamma^i_{jk})_P = 0$ at a point P is called a geodesic coordinate system. In such as system, the covariant derivative, when evaluated at the origin, becomes the ordinary derivative evaluated at the origin. For example,

$$
(A^i_{,j})_0 = (\frac{\partial A^i}{\partial x^j})_0 + (\Gamma^i_{\alpha j})_0 (A^\alpha)_0 = (\frac{\partial A^i}{\partial x^j})_0
$$

since $\Gamma^i_{\alpha j} = 0$ at the origin.

The covariant derivative of a sumor product of tensors must obey the same rules that hold for ordinary derivatives of calculus, for at any point we can choose geodesic coordinates so that 

$$
A^i_{,j} + B^i_{,j} = \frac{\partial A^i}{\partial x^j} + \frac{\partial B^i}{\partial x^j} = \frac{\partial (A^i+B^i)}{\partial x^j} = (A^i + B^i)_{,j}
$$

and $A^i_{,j} + B^i_{,j} - (A^i + B^i)_{,j}$ is a zero tensor for geodesic coordinates. Hence, $A^i_{,j} + B^i_{,j} - (A^i + B^i)_{,j}$ is zero in all coordinate systems, so that

$$
A^i_{,j} + B^i_{,j} \equiv  (A^i + B^i)_{,j}
$$


Notes:

At any particular point, you can choose coordinates in which all Christofell symbols vanish at that point. These are called geodesic coordinates. Christofell symbols are not tensors. 

A geodesic satisfies

$$
\frac{d^2 x^i}{ds^2} + \Gamma^i_{jk} \frac{dx^j}{ds} \frac{dx^k}{ds} = 0
$$

There are two terms: $d^2x^i/ds^2$ (ordinary acceleration) and $\Gamma^i_{jk} \frac{dx^j}{ds} \frac{dx^k}{ds}$ (effects of coordinates/curvature). Suppose at some point $P$, located at $x^i = q^i$, the christoffel symbol are not zero. Can we change the coordinates such that they become zero at that point?

Answer: Yes

If we can find the coordinates such that $\bar{\Gamma}^i_{jk}(P)=0$, then the geodesic equation at $P$ becomes

$$
\frac{d^2x^i}{ds^2} = 0
$$

So, at that point the geodesic looks like a straight line.This is analogous to cartesian coordinates in a flat euclidean space. 

The important symbols transform according to 

$$
\bar{\Gamma}^i_{jk} = \Gamma^\alpha_{\beta \gamma} \frac{\partial x^\beta}{\partial \bar{x}^j} \frac{\partial x^\gamma}{\partial \bar{x}^k} \frac{\partial \bar{x}^i}{\partial x^\alpha} + \frac{\partial^2 x^\alpha}{\partial \bar{x}^j \partial \bar{x}^k} \frac{\partial \bar{x}^i}{\partial x^\alpha}
$$

A tensor transformation would contain only first derivatives of the coordinate transformation. But here we have

$$
\frac{\partial^2 x^\alpha}{\partial \bar{x}^j \partial \bar{x}^k}
$$

This term gives us enough freedom to make $\Gamma$ vanish.

We start with a point

$$
P: x^i=q^i
$$

The new coordinates 

$$
\bar{x}^i = (x^i-q^i) + \frac{1}{2}(\Gamma^i_{\alpha \beta})_q (x^\alpha - q^\alpha) (x^\beta - q^\beta)
$$

The idea behind it is very simple. We are deliberately adding a quadratic correction to the old coordinates. This is because when we differentiate twice, the quadratic term produces a constant involving $\Gamma$. And that is exactly what we need to cancel the original Christoffel symbol.

What happens to the point $P$?

At $P$, $x^i=q^i$. Therefore, $x^i-q^i=0$. So, $\bar{x}^i=0$. 

So the overall intuitive picture is that in original coordinate system at point $P$, $\Gamma^i_{jk} \ne 0$. So we deliberatly introduce quadratic correction so that the second derivative of the coordinate transformation produces a term proportional to $\Gamma$, such that $\bar{\Gamma} = 0$. You can make christofell symbol vanish at a point but not through out a curved space. 



