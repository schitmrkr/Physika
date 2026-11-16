### Geodesics in Riemannian Space

If a space curve in a Riemannian space is given by $x^i=x^i(t)$, we can compute the distance between two points of the curve by the formula

$$
s = \int_{t_0}^{t_1} (g_{\alpha \beta} \frac{dx^\alpha}{dt} \frac{dx^\beta}{dt})^{1/2} dt
$$

To find the geodesic we extremalize the above equation by applying Euler-Lagrange equation. The differential equation of the geodesics are:

$$
\frac{d}{dt} (\frac{df}{d\dot{x}^i}) - \frac{\partial f}{\partial x^i} = 0
$$

where $f = (g_{\alpha \beta } \dot{x}^\alpha \dot{x}^\beta)^{1/2} = \frac{ds}{dt}$. Now,

$$
\frac{\partial f}{\partial x^i} = \frac{1}{2f}(\frac{\partial g_{\alpha \beta}}{\partial x^i} \dot{x}^\alpha \dot{x}^\beta)
$$

and

$$
\frac{d}{dt}(\frac{\partial f}{\partial \dot{x}^i}) = \frac{d}{dt} (\frac{g_{\alpha i} \dot{x}^\alpha + g_{i \beta} \dot{x}^\beta}{2 ds/dt})
$$

$$
= \frac{1}{2 ds/dt} (g_{\alpha i} \ddot{x}^\alpha + g_{i \beta} \ddot{x}^\beta + \frac{\partial g_{\alpha i}}{\partial x^\beta} \dot{x}^\alpha \dot{x}^\beta + \frac{\partial g_{i \beta}}{\partial x^\alpha} \dot{x}^\beta \dot{x}^\alpha) -\frac{1}{2(ds/dt)^2} \frac{d^2s}{dt^2} (g_{\alpha i} \dot{x}^\alpha + g_{i \beta} \dot{x}^\beta)
$$

If we choose $s$ for the parameter $t$, $s=t, \space ds/dt = 1, \space d^2s/dt^2=0$, and use the fact that $g_{ij} = g_{ji}$, the Euler-Lagrange equation above reduces to 

$$
g_{i \alpha} \ddot{x}^\alpha + \frac{1}{2}(\frac{\partial g_{\alpha i}}{\partial x^\beta} + \frac{\partial g_{i \beta}}{\partial x^\alpha} - \frac{\partial g_{\alpha \beta}}{\partial x^i}) \dot{x}^\alpha \dot{x}^\beta = 0
$$

Multiplying by $g^{ri}$ and summing on i,

$$
\ddot{x}^\alpha + \frac{g^{ri}}{2}(\frac{\partial g_{\alpha i}}{\partial x^\beta} + \frac{\partial g_{i \beta}}{\partial x^\alpha} - \frac{\partial g_{\alpha \beta}}{\partial x^i}) \dot{x}^\alpha \dot{x}^\beta = 0
$$

or,

$$
\frac{d^2x^r}{ds^2} + \Gamma^r_{\alpha \beta} \frac{dx^\alpha}{ds} \frac{dx^\beta}{ds} = 0
$$

where

$$
\Gamma^r_{\alpha \beta} = \frac{g^{r \sigma}}{2} (\frac{\partial g_{\alpha \sigma}}{\partial x^\beta} + \frac{\partial g_{\sigma \beta}}{\partial x^\alpha} - \frac{\partial g_{\alpha \beta}}{\partial x^\sigma})
$$

The functions $\Gamma^r_{\alpha \beta}$ are called the Christoffel symbols of the second kind. These are the equations of the geodesics or paths.


Quotient rule:

$$
\frac{d}{dt} (\frac{A}{f}) = \frac{\dot{A}}{f} - \frac{A \dot{f}}{f^2}
$$


### Law of Transformation for the Christoffel Symbols

Let the equation of geodesics be given by 

$$
\frac{d^2x^i}{ds^2} + \Gamma^i_{j k} \frac{dx^j}{ds} \frac{dx^k}{ds} = 0
$$

and 

$$
\frac{d^2\bar{x}^i}{ds^2} + \bar{\Gamma}^i_{j k} \frac{d\bar{x}^j}{ds} \frac{d\bar{x}^k}{ds} = 0
$$

for two coordinate systems $x^i, \bar{x}^i$ in a Riemannian space. We now find the relationship between $\Gamma^i_{jk}$ and $\bar{\Gamma}^i_{jk}$. Now,

$$
\frac{d\bar{x}^i}{ds} = \frac{\partial \bar{x}^i}{\partial x^\alpha} \frac{d x^\alpha}{d s}
$$

and

$$
\frac{d^2 \bar{x}^i}{ds^2} = \frac{\partial^2 \bar{x}^i}{\partial x^\beta \partial x^\alpha} \frac{dx^\alpha}{ds} \frac{dx^\beta}{ds} + \frac{\partial \bar{x}^i}{\partial x^\alpha} \frac{d^2x^\alpha}{ds^2}
$$

Substituting this into geodesic equation of $\bar{S}$ frame,

$$
\frac{\partial \bar{x}^i}{\partial x^\alpha} \frac{d^2 x^\alpha}{d s^2} + \frac{\partial^2 \bar{x}^i}{\partial x^\beta \partial x^\alpha} \frac{dx^\alpha}{ds} \frac{dx^\beta}{ds} + \bar{\Gamma}^i_{jk} \frac{\partial \bar{x}^j}{\partial x^\alpha} \frac{\partial \bar{x}^k}{\partial x^\beta}  \frac{dx^\alpha}{d s} \frac{dx^\beta}{d s} = 0
$$


Now multiply by $\frac{\partial x^\sigma}{\partial \bar{x}^i}$ and sum on $i$ to obtain

$$
\frac{d^2 x^\sigma}{ds^2} + (\bar{\Gamma}^i_{jk} \frac{\partial \bar{x}^j}{\partial x^\alpha} \frac{\partial \bar{x}^k}{\partial x^\beta} \frac{\partial x^\sigma}{\partial \bar{x}^i} + \frac{\partial^2 \bar{x}^i}{\partial x^\beta \partial x^\alpha} \frac{\partial x^\sigma}{\partial \bar{x}^i}) \frac{dx^\alpha}{d s} \frac{dx^\beta}{d s} = 0
$$

Comaparing, we see that,

$$
\Gamma^i_{jk} = \bar{\Gamma}^\alpha_{\beta \gamma} \frac{\partial \bar{x}^\beta}{\partial x^j} \frac{\partial \bar{x}^\gamma}{\partial x^k} \frac{\partial x^i}{\partial \bar{x}^\alpha} + \frac{\partial^2 \bar{x}^\sigma}{\partial x^j \partial x^k} \frac{\partial x^i}{\partial \bar{x}^\sigma}
$$

This is the law of transformation fo $\Gamma^i_{jk}$. We note that $\Gamma^i_{jk}$ are not components of a tensor, so that $\Gamma^i_{jk}$ may be zero in one coordinate system but on in all coordinate systems. 

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

Any coordinate system for which $(\Gamma^i_{jk})_P = 0$ at a point P is called a geodesic coordinate system. In such as system, the covariant derivative, when evaluated at the origin, becomes the ordinary derivative evaluated at the origin. For example,

$$
(A^i_{,j})_0 = (\frac{\partial A^i}{\partial x^j})_0 + (\Gamma^i_{\alpha j})_0 (A^\alpha)_0 = (\frac{\partial A^i}{\partial x^j})_0
$$

since $\Gamma^i_{\alpha j} = 0$ at the origin.

The covariant derivative of a sum or product of tensors must obey the same rules that hold for ordinary derivatives of calculus, for at any point we can choose geodesic coordinates so that 

$$
A^i_{,j} + B^i_{,j} = \frac{\partial A^i}{\partial x^j} + \frac{\partial B^i}{\partial x^j} = \frac{\partial (A^i+B^i)}{\partial x^j} = (A^i + B^i)_{,j}
$$

and $A^i_{,j} + B^i_{,j} - (A^i + B^i)_{,j}$ is a zero tensor for geodesic coordinates. Hence, $A^i_{,j} + B^i_{,j} - (A^i + B^i)_{,j}$ is zero in all coordinate systems, so that

$$
A^i_{,j} + B^i_{,j} \equiv  (A^i + B^i)_{,j}
$$

