### Covariant Diferentiation

Covariant vector tranforms as 

$$
\bar{A}_i = A_\alpha \frac{\partial x^\alpha}{\partial \bar{x}^i}
$$

We obtain,

$$
\frac{\partial \bar{A}_i}{\partial \bar{x}^j} = \frac{\partial A_\alpha}{\partial x^\beta} \frac{\partial x^\alpha}{\partial \bar{x}^i} \frac{\partial x^\beta}{\partial \bar{x}^j} + A_\alpha \frac{\partial^2 x^\alpha}{\partial \bar{x}^j \partial \bar{x}^i}
$$

It is apparent that $\partial A_i / \partial x^j$ are not the components of a tensor. However, we can construct a tensor by following way using Christoffel symbol,

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

and $A_{i,j}$ is a covariant tensor of rank 2. The tensor is called covariant derivative of  $A_i$ with respect to $x^j$. 

### Covariant derivative for upper index vector $V^i$ (contravariant vector)

$$
V^i_{,j} = \frac{\partial V^i}{\partial x^j} + \Gamma^i_{\alpha j} V^\alpha
$$

The christoffel term is positive. Why?

The connection tells us how basis vectors change:

$$
\frac{\partial \mathbf{e}_\alpha}{\partial x^j} = \Gamma^i_{\alpha j} \mathbf{e}_i
$$

Since,

$$
\mathbf{V} = V^\alpha \mathbf{e}_\alpha
$$

differentiate:

$$
\frac{\partial \mathbf{V}}{\partial x^j} = \frac{\partial V^\alpha}{\partial x^j} \mathbf{e}_\alpha + V^\alpha \frac{\partial \mathbf{e}_\alpha}{\partial x^j}
$$

Using christoffel relation,

$$
\frac{\partial \mathbf{V}}{\partial x^j} = \frac{\partial V^i}{\partial x^j} \mathbf{e}_i + V^\alpha \Gamma^i_{\alpha j} \mathbf{e}_i
$$

Therefore, 

$$
V^i_{,j} = \frac{\partial V^i}{\partial x^j} + \Gamma^i_{\alpha j} V^\alpha
$$


### Covariant derivative for lower index $A_i$ covector (covariant vector)

$$
A_{i;j} = \frac{\partial A_i}{\partial x^j} - \Gamma^\alpha_{ij} A_\alpha
$$

The christoffel term is negative. Why?

The reason becomes clear if we require a the scalar

$$
A_i V^i
$$

to have the ordinary derivative rule. 

$$
(A_i V^i)_{;j} = \partial_j (A_i V^i)
$$

Using the product rule,

$$
(A_i V^i)_{;j} = A_{i;j} V^i + A_i V^i_{;j}
$$

Insert the vector derivative,

$$
(A_i V^i)_{;j} = A_{i;j} V^i + A_i (\frac{\partial V^i}{\partial x^j} + \Gamma^i_{\alpha j} V^\alpha)
$$

We want this to equal

$$
\frac{\partial A_i}{\partial x^j} V^i + A_i \frac{\partial V^i}{\partial x^j}
$$

Therefore the extra Christoffel symbol must cancel:

$$
A_{i;j} V^i + A_i \Gamma^i_{\alpha j} V^\alpha = \frac{\partial A_i}{\partial x^j} V^i
$$

Replace the dummy indices:

$$
A_{i;j} = \frac{\partial A_i}{\partial x^j} - \Gamma^\alpha_{i j} A_\alpha 
$$

### The general rule for tensor

Suppose you have $T^{i_1 i_2 .. i_p}_{j_1 j_2 .. j_q}$, its covariant derivative is 

$$
\begin{aligned}
T^{i_1 i_2 \cdots i_p}_{j_1 j_2 \cdots j_q;k}
&=
\frac{\partial T^{i_1 i_2 \cdots i_p}_{j_1 j_2 \cdots j_q}}
{\partial x^k}
+ \Gamma^{i_1}_{\alpha k}
T^{\alpha i_2 \cdots i_p}_{j_1 j_2 \cdots j_q}
+ \cdots
+ \Gamma^{i_p}_{\alpha k}
T^{i_1 i_2 \cdots \alpha}_{j_1 j_2 \cdots j_q} \\
&\quad
- \Gamma^\alpha_{j_1 k}
T^{i_1 i_2 \cdots i_p}_{\alpha j_2 \cdots j_q}
- \cdots
- \Gamma^\alpha_{j_q k}
T^{i_1 i_2 \cdots i_p}_{j_1 j_2 \cdots \alpha}.
\end{aligned}
$$
