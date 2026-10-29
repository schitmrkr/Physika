### The tetrad representation

Set up at each point of spacetime a basis of four contravariant vectors

$$
e_{(a)}^{i}, \qquad a = 1,2,3,4.
$$

The parentheses distinguish tetrad indices from tensor indices. The associated covariant vectors are

$$
e_{(a)i} = g_{ik} e_{(a)}^{k}.
$$

The inverse is defined so that

$$
e_{(a)}^{i} e^{(b)}_{i} = \delta^{(b)}_{(a)},
\qquad
e_{(a)}^{i} e^{(a)}_{j} = \delta^{i}_{j}.
$$

We further assume

$$
e^{i}_{(a)} e_{(b)i} = \eta_{(a)(b)},
$$

where $\eta_{(a)(b)}$ is the constant Minkowski matrix with diagonal entries $+1,-1,-1,-1$.

### Why a moving frame helps

The tetrad formalism lets us carry a local Lorentz frame through a curved manifold. Tensor components are chart-dependent; tetrad components are frame-dependent. Keeping the two kinds of index separate makes it possible to rotate the local frame without disturbing the coordinate chart.

The payoff appears in the connection. The spin connection is not an extra object imposed by hand: it is the agent that compares neighbouring local frames. Curvature is the obstruction to closing a loop of such comparisons.

$$
[\nabla_a, \nabla_b] V_c = R_{abc}{}^{d} V_d
$$

> Open question: keep track of which index belongs to the manifold and which belongs to the frame when translating a Newman–Penrose expression back into tensor form.
