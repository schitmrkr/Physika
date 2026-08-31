### Riemann-Christoffel Tensor

The tensor

$$
R_{hijk} = g_{h \alpha} B^\alpha_{ijk}
$$

is called the Riemann Christoffel, or covariant curvature, tensor. 

Assume that the Reimannian space is Euclidean and that we are dealing with a cartesian coordinate system. Since $\Gamma^i_{jk}(x) = 0$, we have

$$
B^i_{jkl} = 0
$$

in this coordinate system. But if $B^i_{jkl} = 0$ in one coordinate system, the components are zero in all coordinate systems. Hence if a space is Euclidean, the curvature tensor must vanish. 

If we differentiate and evaluate at the origin of a geodesic coordinate system, we obtain

$$
B^i_{\alpha j k, \sigma} = \frac{\partial^2 \Gamma^i_{\alpha j}}{\partial x^\sigma \partial x^k} - \frac{\partial^2 \Gamma^i_{\alpha k}}{\partial x^\sigma \partial x^j}
$$

Permuting $j$, $k$, $\sigma$ and adding, we have Bianchi identity

$$
B^i_{\alpha k j , \sigma} + B^i_{\alpha \sigma j , k} + B^i_{\alpha k \sigma , j} = 0
$$
