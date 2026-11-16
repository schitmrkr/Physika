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

Since $V^i_{,jk}-V^i_{,kj}$ and $V^i$ are tensors, $B^i_{\alpha jk}$ must be a components of a tensor, from quotient law. It is called curvature tensor. We can obtain new tensor of the second order by contraction. Let,

$$
R_{ij} = B^\alpha_{i \alpha j} = \frac{\partial \Gamma^\alpha_{i \alpha}}{\partial x^j} - \frac{\partial \Gamma^\alpha_{ij}}{\partial x^\alpha} + \Gamma^\beta_{i \alpha} \Gamma^\alpha_{\beta j} - \Gamma^\beta_{i k} \Gamma^\alpha_{\beta \alpha} 
$$

This tensor is called the Ricci tensor and plays an important role in the theory of relativity.

We obtain another tensor by defining,

$$
S_{ij} = B^\alpha_{\alpha ij} = \frac{\partial \Gamma^\alpha_{\alpha i}}{\partial x^j} - \frac{\partial \Gamma^\alpha_{\alpha j}}{\partial x^i}
$$


### General intuition for cuvature tensor

Cuvature measures weather two succesive covariant derivative depends on the order on which you perform them

$\nabla_k \nabla_j V^i$ vs. $\nabla_j \nabla_k V^i$

if they are different, the difference is the curvature.

Curvature tensor can be thought of as giving you detailed map of curvature. The Ricci tensor compresses this information. It is more like overall curvature experienced in this direction.

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

