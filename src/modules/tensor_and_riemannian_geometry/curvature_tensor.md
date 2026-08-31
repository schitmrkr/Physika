### Curvature Tensor

Let us consider the absolute contravariant vector $V^i$. Its covariant derivate yeilds the mixed tensor

$$
V^i_{,j} = \frac{\partial V^i}{\partial x_j} + V^\alpha \Gamma^i_{\alpha j}
$$

Our again differentiating covariantly, we obtain

$$
V^i_{,jk} = \frac{\partial V^i_{,j}}{\partial x^k} + V^\alpha_{,j} \Gamma^{i}_{\alpha k} - V^i_{, \alpha} \Gamma^\alpha_{jk}
$$

$$
V^i_{,jk} = \frac{\partial^2 V^i}{\partial x^k \partial x^j} + \frac{\partial V^\alpha}{\partial x^k} \Gamma^i_{\alpha j} + V^\alpha \frac{\partial \Gamma^i_{\alpha j}}{\partial x^k} + (\frac{\partial V^\alpha}{\partial x^i} + V^\beta \Gamma^\alpha_{\beta j}) \Gamma^i_{\alpha k} - (\frac{\partial V^i}{\partial x^\alpha} + V^\beta \Gamma^i_{\beta \alpha}) \Gamma^\alpha_{jk}
$$

Interchanging $k$ and $j$ and subtracting, we have

$$
V^i_{,jk} - V^i_{,kj} = V^\alpha B^i_{\alpha jk}
$$

where,

$$
B^i_{\alpha jk} = \frac{\partial \Gamma^i_{\alpha j}}{\partial x^k} - \frac{\partial \Gamma^i_{\alpha k}}{\partial x^j} + \Gamma^\beta_{\alpha j} \Gamma^i_{\beta k} - \Gamma^\beta_{\alpha k} \Gamma^i_{\beta j} 
$$

Since $V^i_{,jk}-V^i_{,kj}$ and $V^i$ are tensors, $V^i_{\alpha jk}$ must be a components of a tensor, from quotient law. It is called curvature tensor. We can obtain new tensor of the second order by contraction. Let,

$$
R_{ij} = B^\alpha_{i \alpha j} = \frac{\partial \Gamma^\alpha_{i \alpha}}{\partial x^j} - \frac{\partial \Gamma^\alpha_{ij}}{\partial x^\alpha} + \Gamma^\beta_{i \alpha} \Gamma^\alpha_{\beta j} - \Gamma^\beta_{i k} \Gamma^\alpha_{\beta \alpha} 
$$

This tensor is called the Ricci tensor and plays an important role in the theory of relativity.

We obtain another tensor by defining,

$$
S_{ij} = B^\alpha_{\alpha ij} = \frac{\partial \Gamma^\alpha_{\alpha i}}{\partial x^j} - \frac{\partial \Gamma^\alpha_{\alpha j}}{\partial x^i}
$$

#### Notes

**Understanding covariant derivative for upper index vector $V^i$ (contravariant vector),**

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


**Now, understanding covariant derivative for lower index $A_i$ covector (covariant vector),**

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

**The general rule for tensor**

Suppose you have $T^{i_1 i_2 .. i_p}_{j_1 j_2 .. j_q}$, its covariant derivative is 

$$
T^{i_1 i_2 .. i_p}_{j_1 j_2 .. j_q ;k} = \frac{\partial T^{i_1 i_2 .. i_p}_{j_1 j_2 .. j_q}}{\partial x^k} + \Gamma^{i_1}_{\alpha k} T^{\alpha i_2 .. i_p}_{j_1 j_2 .. j_q} + .. + \Gamma^{i_q}_{\alpha k} T^{i_1 i_2 .. \alpha}_{j_1 j_2 .. j_q} \\
- \Gamma^{\alpha}_{j_1 k} T^{i_1 .. i_p}_{\alpha .. j_q} - \Gamma^{\alpha}_{j_q k} T^{i_1 .. i_p}_{j_1 .. \alpha}
$$

***

**General intuition for cuvature tensor**

Cuvature measures weather two succesive covariant derivative depends on the order on which you perform them

$\nabla_k \nabla_j V^i$ vs. $\nabla_j \nabla_k V^i$

if they are different, the difference is the curvature.

Curvature tensor can be thought of as giving you detailed map of curvature. The Ricci tensor compresses this information. It is more like overall curvature experienced in this direction.



