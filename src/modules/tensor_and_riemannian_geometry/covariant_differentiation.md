### Covariant Diferentiation

Covariant vector tranforms as 

$$
\bar{A}_i = A_\alpha \frac{\partial x^\alpha}{\partial \bar{x}^i}
$$

We obtain,

$$
\frac{\partial \bar{A}_i}{\partial \bar{x}^j} = \frac{\partial A_\alpha}{\partial x^\beta} \frac{\partial x^\alpha}{\partial \bar{x}^i} \frac{\partial x^\beta}{\partial \bar{x}^i} + A_\alpha \frac{\partial^2 x^\alpha}{\partial \bar{x}^j \partial \bar{x}^i}
$$

It is apparent that $\partial A_i / \partial x^j$ are not the components fo a tensor. However, we can construct a tensor by following way using Christoffel symbol,

$$
\bar{\Gamma}^\alpha_{ij} = \Gamma^\rho_{\sigma \tau} \frac{\partial x^\sigma}{\partial \bar{x}^i} \frac{\partial x^\tau}{\partial \bar{x}^j} \frac{\partial \bar{x}^\alpha}{\partial x^\rho} + \frac{\partial^2 x^\sigma}{\partial \bar{x}^i \bar{x}^j} \frac{\partial \bar{x}^\alpha}{\partial x^\sigma}
$$

Multiplying the above by $\bar{A}_\alpha$ and substracting the first equation, we get

$$
\frac{\partial \bar{A}_i}{\partial \bar{x}^j} - \bar{A}_\alpha \bar{\Gamma}^\alpha_{ij} = (\frac{\partial A_\alpha}{\partial x^\beta} - A_\rho \Gamma^\rho_{\alpha \beta}) \frac{\partial x^\alpha}{\partial \bar{x}^i} \frac{\partial x^\beta}{\partial \bar{x}^j}
$$

So that if we define,

$$
\bar{A}_{i,j} \equiv (\frac{\partial A_\alpha}{\partial x^\beta} - A_\rho \Gamma^\rho_{\alpha \beta}) 
$$

we have that

$$
\bar{A}_{i,j} = A_{\alpha,\beta} \frac{\partial x^\alpha}{\partial \bar{x}^i} \frac{\partial x^\beta}{\partial \bar{x}^j}
$$

and $A_{i,j}$ is a covariant tensor of rank 2. The tensor is called covariant derivative of  $A_i$ with respect to $x^j$. The comma will denote covariant differentiation. 


For a scalar of weight $N$ we have

$$
\bar{A} = {\left| \frac{\partial x}{\partial \bar{x}} \right|}^N A
$$

so that,

$$
\frac{\partial \bar{A}}{\partial \bar{x}^j} = \left| \frac{\partial x}{\partial \bar{x}} \right|^N \frac{\partial A}{\partial x^\alpha} \frac{\partial x^\alpha}{\partial \bar{x}^j} + N \left| \frac{\partial x}{\partial \bar{x}} \right|^{N-1} \frac{\frac{\partial x}{\partial \bar{x}}}{\partial \bar{x}^j} A
$$
