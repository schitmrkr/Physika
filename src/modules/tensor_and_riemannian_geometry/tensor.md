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

