### Gravitational Wave

In Newtonian gravity, we describe gravity using gravitational potential:

$$
\Phi(\mathbf{x}, t)
$$

A test particle experiences acceleration:

$$
\mathbf{a} = - \nabla \Phi
$$

But Newtonian gravity has a problem: its gravitational influence is instantaneous.

Special relativity tells us that physical influences cannot propagate faster than light.

Einstein's general relativity resolves this by replacing the Newtonian gravitational potential with the space time metric

$$
ds^2 = g_{\mu \nu}(x) dx^\mu dx^\nu
$$

The metric tells us how to measure spacetime intervals.

A gravitational wave is a propagating disturbance in this metric.

We can write

$$
g_{\mu \nu} = \eta_{\mu \nu} + h_{\mu \nu}
$$

where:
- $\eta_{\mu\nu}$ is the flat Minkowski metric.
- $h_{\mu\nu}$ is a small perturbation of spacetime.

The key assumption is:

$$
| h_{\mu \nu}| \ll 1
$$

This is called the linearized approximation.

Our task is to derive an equation governing $h_{\mu\nu}$.

### Einstein's field equations
We start with Einstein's field equations,

$$
G_{\mu \nu} = \frac{8 \pi G}{c^4} T_{\mu \nu}
$$

where,

$$
G_{\mu \nu} = R_{\mu \nu} - \frac{1}{2} g_{\mu \nu} R
$$

For now, we use natural units $c=1$:

$$
G_{\mu \nu} = 8 \pi G T_{\mu \nu}
$$

We will first derive gravitational waves in vacuum, where:

$$
T_{\mu \nu} = 0
$$

Therefore,

$$
R_{\mu \nu} = 0
$$

### Linearize the Einstein field equations

We begin with

$$
g_{\mu \nu} = \eta_{\mu \nu} + h_{\mu \nu}
$$

The Minkowski metric with signature $(-, +, +, +)$:

$$
\eta_{\mu \nu} = \begin{pmatrix}
-1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1 \\
\end{pmatrix}
$$

Since $h_{\mu\nu}$ is small, we retain only terms linear in $h_{\mu\nu}$ and discard terms of order $h^2$ and higher.

#### Inverse metric

Recall the defining property of the inverse metric:

$$
g^{\mu \alpha} g_{\alpha \nu} = \delta^\mu_\nu
$$

We assume:

$$
g^{\mu \nu} = \eta^{\mu \nu} + k^{\mu \nu}
$$

Substituting:

$$
(\eta^{\mu \alpha} + k^{\mu \alpha})(\eta_{\alpha \nu} + h_{\alpha \nu}) = \delta^\mu_\nu
$$

Expanding and ignoring second-order terms:

$$
\delta^\mu_\nu + k^\mu_\nu + h^\mu_\nu = \delta^\mu_\nu
$$

Therefore,

$$
k^\mu_\nu = - h^\mu_\nu
$$

Consequently:

$$
g^{\mu \nu} = \eta^{\mu \nu} - h^{\mu \nu}
$$


#### Christoffel symbols

The Christoffel symbols describe how the coordinate basis changes across spacetime.

Their definition is:

$$
\Gamma^\rho_{\mu \nu} = \frac{1}{2} g^{\rho \sigma} (\partial_\mu g_{\sigma \nu} + \partial_\nu g_{\sigma \mu} - \partial_\sigma g_{\mu \nu})
$$

Substitute:

$$
g_{\mu \nu} = \eta_{\mu \nu} + h_{\mu \nu}
$$

Since the Minkowski metric is constant:

$$
\partial_\alpha \eta_{\mu \nu} = 0
$$

And since we are working to first order, we can replace $g^{\rho\sigma}$ with $\eta^{\rho\sigma}$ in the Christoffel expression.

$$
\Gamma^\rho_{\mu \nu} = \frac{1}{2} \eta^{\rho \sigma} (\partial_\mu h_{\sigma \nu} + \partial_\nu h_{\sigma \mu} - \partial_\sigma h_{\mu \nu})
$$

Raising the index:

$$
\Gamma^\rho_{\mu \nu} = \frac{1}{2} (\partial_\mu h^\rho_\nu + \partial_\nu h^\rho_\mu - \partial^\rho h_{\mu \nu})
$$

The Christoffel symbols are proportional to derivatives of the metric perturbation.

#### Ricci curvature tensor

The Ricci tensor is:

$$
R_{\mu \nu} = \partial_\rho \Gamma^\rho_{\mu \nu} - \partial_\nu \Gamma^\rho_{\mu \rho} + \Gamma^\rho_{\rho \lambda} \Gamma^\lambda_{\mu \nu} - \Gamma^\rho_{\nu \lambda} \Gamma^\lambda_{\mu \rho}
$$

The last two terms are quadratic in Christoffel symbols.

Since each Christoffel symbol is already first order in $h$, those terms are second order and can be neglected.

Therefore,

$$
R^{(1)}_{\mu \nu} = \partial_\rho \Gamma^\rho_{\mu \nu} - \partial_\nu \Gamma^\rho_{\mu \rho}
$$

$$
R^{(1)}_{\mu \nu} = \frac{1}{2} (\partial_\rho \partial_\mu h^\rho_\nu + \partial_\rho \partial_\nu h^\rho_\mu - \partial_\rho \partial^\rho h_{\mu \nu}) \\
- \frac{1}{2} (\partial_\nu \partial_\mu h^\rho_\rho + \partial_\nu  \partial_\rho h^\rho_\mu - \partial_\nu \partial^\rho h_{\mu \rho})
$$

$$
R^{(1)}_{\mu \nu} = \frac{1}{2} (\partial_\rho \partial_\mu h^\rho_\nu + \partial_\rho \partial_\nu h^\rho_\mu - \partial_\rho \partial^\rho h_{\mu \nu}) - \frac{1}{2} (\partial_\nu \partial_\mu h^\rho_\rho)
$$

$$
R^{(1)}_{\mu \nu} = \frac{1}{2} (\partial_\rho \partial_\mu h^\rho_\nu + \partial_\rho \partial_\nu h^\rho_\mu - \Box h_{\mu \nu} - \partial_\nu \partial_\mu h)
$$

where, 

$$
\Box = \partial_\rho \partial^\rho = - \frac{\partial^2}{\partial t^2} + \nabla^2, \qquad h = h^\rho_\rho
$$

We have now expressed spacetime curvature directly in terms of the metric perturbation.


