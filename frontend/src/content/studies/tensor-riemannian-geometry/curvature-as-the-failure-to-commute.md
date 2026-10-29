### Curvature as the failure of covariant derivatives to commute

Start with a contravariant vector $V^i$. Its covariant derivative is

$$
V^i_{,j} = \frac{\partial V^i}{\partial x^j} + V^\alpha \Gamma^i_{\alpha j}.
$$

Differentiating again,

$$
V^i_{,jk} = \frac{\partial V^i_{,j}}{\partial x^k}
+ V^\alpha_{,j}\Gamma^i_{\alpha k}
- V^i_{,\alpha}\Gamma^\alpha_{jk}.
$$

Interchanging $j$ and $k$ and subtracting removes the ordinary second derivative:

$$
V^i_{,jk} - V^i_{,kj} = V^\alpha B^i_{\alpha jk},
$$

where

$$
B^i_{\alpha jk} = \partial_k\Gamma^i_{\alpha j}
- \partial_j\Gamma^i_{\alpha k}
+ \Gamma^\beta_{\alpha j}\Gamma^i_{\beta k}
- \Gamma^\beta_{\alpha k}\Gamma^i_{\beta j}.
$$

Because the left-hand side is a difference of tensors, the quotient law tells us that $B^i_{\alpha jk}$ is a tensor: the curvature tensor.

### Contractions

Contracting one index gives the Ricci tensor,

$$
R_{ij} = B^\alpha_{i\alpha j}.
$$

A further contraction gives the Ricci scalar. The Riemann tensor therefore stores the local obstruction to commuting derivatives; Einstein's equation is the statement that this obstruction responds to energy and momentum.

> Sanity check: flat space in Cartesian coordinates has $\Gamma = 0$, so the commutator must vanish.
