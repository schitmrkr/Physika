## Differential Geometry

Tensors are objects whose meaning survives coordinate changes. Vectors are not "an arrow" but: an object that transforms in a certain way under coordinate changes. Tensor is an object that transforms correctly under coordinate changes, with any number of indices.

Rank = number of indices  
Rank 0 = Scalar  
Rank 1 = Vector  
Rank 2 = Matrix Like (Stress, Metric)

### The first mental upgrade

You'll see two types of indices:

- Upper indices -> contravariant $(^v)$
- Lower indices -> covariant $(_l)$

Example: $v^\mu$ is a vector with upper index and $v_\mu$ is a dual vector with lower index.

Why these two types exists? Coordinates stretches and squeezes. Contravariant components scale oppositely to coordinate stretching. Covariant components scale with coordinate stretching.

They cancel each other when contracted:

$$
v^\mu w_\mu = scalar \space (invariant)
$$

### The metric tensor(first real tensor)

The metric tensor $g_{\mu\nu}$ measures distances, converts vectors to dual vectors, and defines angles and time intervals.

In flat 2D Cartesian space:

$$
g = \begin{pmatrix}
1 & 0 \\
0 & 1
\end{pmatrix}
$$

In curved or non-Cartesian coordinates, it is not so simple. Gravity is this non simplicity.

### Frenet-Serret Formulas

A three dimensional curve in a Euclidean space can be represented by the locus of the end point of the position vector given by:

$$
\mathbf{r}(t) = x(t) \mathbf{i} + y(t) \mathbf{j} + z(t) \mathbf{k}
$$

where $t$ is the parameter.

We know that, $\mathbf{t} = \frac{d\mathbf{r}}{ds}$ is a unit tangent vector to the curve. Now since $\mathbf{t}$ is a unit vector, its derivative is perpendicular to $\mathbf{t}$. The principle normal to the curve is consequently defined by the equation.

$$
\frac{d\mathbf{t}}{ds} = \kappa \mathbf{n}
$$

where $\kappa$ is the curvature of the curve and $\mathbf{n}$ is the unit normal vector to the curve. The reciprocal of the curvature, $\rho = \frac{1}{\kappa}$ is called the radius of curvature.

At any point in P of our curve, we now have two vectors $\mathbf{t}$ and $\mathbf{n}$ which are perpendicular to each other. This enables us to set up a third vector at right angle to both $\mathbf{t}$ and $\mathbf{n}$. We define as the binormal vector $\mathbf{b}$.

$$
\mathbf{b} = \mathbf{t} \times \mathbf{n}
$$

Let us now evaluate $\frac{d\mathbf{b}}{ds}$ and $\frac{d\mathbf{n}}{ds}$. Since $\mathbf{b} \cdot \mathbf{t} = 0$, we obtain

$$
\frac{d\mathbf{b}}{ds} \cdot \mathbf{t} + \kappa \mathbf{b} \cdot \mathbf{n} = 0
$$

Therefore,

$$
\frac{d\mathbf{b}}{ds} \cdot \mathbf{t} = 0
$$

Hence, $\frac{d\mathbf{b}}{ds}$ is perpendicular to $\mathbf{t}$ and $\mathbf{b}$, so that $\frac{d\mathbf{b}}{ds}$ must be parallel to $\mathbf{n}$.

Consequently,

$$

\frac{d\mathbf{b}}{ds} = \tau \mathbf{n}


$$

where $\tau$ is the torsion of the curve.

Finally, to obtain $\frac{d\mathbf{n}}{ds}$, we use the fact that $\mathbf{n} = \mathbf{b} \times \mathbf{t}$, so:

$$

\frac{d\mathbf{n}}{ds} = \frac{d}{ds}(\mathbf{b} \times \mathbf{t}) = \frac{d\mathbf{b}}{ds} \times \mathbf{t} + \mathbf{b} \times \frac{d\mathbf{t}}{ds}


$$

$$

\frac{d\mathbf{n}}{ds} = \mathbf{b} \times \kappa \mathbf{n} + \tau \mathbf{n} \times \mathbf{t}


$$

$$

\frac{d\mathbf{n}}{ds} = -\kappa \mathbf{t} - \tau \mathbf{b}


$$

The famouse Frenet-Serret Formulas are:

$$

\frac{d\mathbf{t}}{ds} = \kappa \mathbf{n}


$$

$$

\frac{d\mathbf{n}}{ds} = -\kappa \mathbf{t} - \tau \mathbf{b}


$$

$$

\frac{d\mathbf{b}}{ds} = \tau \mathbf{n}


$$

### Fundamental Planes

The plane containing then tangent and the principle normal is called the osculating plane. The equation of the osculating plane is:

$$

(\mathbf{s}-\mathbf{r}) \cdot \mathbf{b} = 0


$$

where, $\mathbf{s}$ is the variable vector to any point in the plane and $\mathbf{r}$ is the vector to the point P on the curve.

Similarly,

$$

(\mathbf{s}-\mathbf{r}) \cdot \mathbf{t} = 0


$$

$$

(\mathbf{s}-\mathbf{r}) \cdot \mathbf{n} = 0


$$
