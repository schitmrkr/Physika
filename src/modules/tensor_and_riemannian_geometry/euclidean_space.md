### Euclidean space

We have seen that if a space is Euclidean, of necessity $B^i_{jkl} = 0$. We shall now prove that if $B^i_{jkl} = 0$, then the space is Euclidean. 

$$
\bar{\Gamma}^i_{jk}(y) = \Gamma^\alpha_{\beta \gamma}(x) \frac{\partial x^\beta}{\partial y^j} \frac{\partial x^\gamma}{\partial y^k} \frac{\partial y^i}{\partial y^\alpha} + \frac{\partial^2 x^\alpha}{\partial y^j \partial y^k} \frac{\partial y^i}{\partial x^\alpha}
$$

If there is a coordinate system $(x^1, x^2, .., x^n)$ for which $\Gamma^\alpha_{\beta \gamma}(x)=0$, then 

$$
\bar{\Gamma}^i_{jk}(y) = \frac{\partial^2 x^\alpha}{\partial y^j \partial y^k} \frac{\partial y^i}{\partial x^\alpha}
$$

Let us define 

$$
u^\sigma_i = \frac{\partial x^\sigma}{\partial y^i}
$$

we get,

$$
\frac{\partial u^\sigma_k}{\partial y^i} = u^\sigma_i \bar{\Gamma^i_{jk}}(y)
$$

Later to be shown:

$$
\bar{\Gamma}^\alpha_{jk} u^\sigma_\alpha = \bar{\Gamma}^\alpha_{k j} u^\sigma_\alpha
$$

$$
\bar{B}^\alpha_{jkl} u^\sigma_\alpha = 0
$$