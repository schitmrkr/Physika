### Elements of differential geometry

Manifolds are essentially spaces that are locally Euclidean in a sense.

Euclidean space of $n$-dimensions, $\mathcal{R}_n$ is a set of all n-tuples, $(x^1, x^2,..,x^n)(- \infin <  x^i < + \infin)$, with open and closed sets. A manifold $M$, is locally identican to Euclidean space in the sense that $M$ is covered (i.e., a union of) neighbourhoods, $\mathcal{U}_\alpha$, and that associated with each $\mathcal{U}_\alpha$ there is a one-one map, $\phi_\alpha$, which images each point $p \in \mathcal{U}_\alpha$ to a point in an open neighbourhood of $\mathcal{R}_n$. 

Further, if two neighbourhoods, $\mathcal{U}_\alpha$ and $\mathcal{V}_\alpha$ of $M$, intersect and have points in common and if $\phi_\alpha$ and $\psi_\alpha$ are the associated maps onto neighbourhoods in $\mathcal{R}_n$, then the map $\phi_\alpha \bullet \psi_\alpha^{-1}$ images a point $\psi_\alpha(p)(p \in \mathcal{U}_\alpha \cap \mathcal{V}_\alpha)$.

An important distinction between: manifolds and coordinates. Coordinates are simply descriptions of points in $M$. For example, $p \in M$ does not intrisically equal $(x^1, x^2,.., x^n)$. Rather, $\phi_\alpha(p) = (x^1, x^2, ..,x^n)$. Another observer using another chart could have $\phi_\beta(p) = (\bar{x}^1, \bar{x}^2, ..., \bar{x}^n)$. The point $p$ is the same. This is the foundation behind coordinate transformation,

$$
x^i \rightarrow \bar{x}^i
$$

is associated with Christoffel symbols.

The Cartesian product $M \times N$ is the ordered pair of points, $(p,q)$, where $p \in M$ and $q \in N$. And if $\mathcal{U}_\alpha$ and $\mathcal{V}_\beta$ are neighbourhoods in $M$ and $N$, $\phi_\alpha$ and $\psi_\beta$ are the associated maps, and $\phi_\alpha(p) = (x^1,..,x^n)$ and $\psi_\beta(p) = (y^1,..,y^m)$, then the map,


$$
(\phi_\alpha \times \psi_\beta)(p,q) = (x^1, .., x^n, y^1, .., y^m)
$$

suffices to complete the definition of $M \times N$ as a manifold of $(m+n)$-dimensions.

We now consider a function $f$ on $M$ defined by a map $f: M \rightarrow \mathcal{R}^1$. Suppose, a map $f \sdot \phi_\alpha^{-1}$ images a point $(x^1, .., x^n)$ in $\mathcal{R}^n$ on to the reals, $\mathcal{R}^1$, is a smooth function. We define a smooth curve $\lambda$ on $M$ by the map

$$
\lambda: I(a \lt t \lt b) \space in \space \mathcal{R}^1 \rightarrow \lambda(t) = p \in M
$$

such that

$$
(\phi_\alpha \sdot \lambda)(t) = [x^1(t), .., x^n(t)] 
$$