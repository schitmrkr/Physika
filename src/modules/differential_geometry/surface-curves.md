### Curvilinear Coordinates

$$
x = x(u,v)   \\
y = y(u,v)   \\
z = z(u,v)
$$

### Length of arc on a surface

If we move from the point $\mathbf{r}$ to the point $\mathbf{r} + d\mathbf{r}$ on a surface, the length of the arc is given by:

$$
ds^2 = d\mathbf{r} \cdot d\mathbf{r} = (\frac{\partial \mathbf{r}}{\partial u} du+ \frac{\partial \mathbf{r}}{\partial v} dv)^2
$$

$$
=(\frac{\partial \mathbf{r}}{\partial u})^2 du^2 + (\frac{\partial \mathbf{r}}{\partial v})^2 dv^2 + 2\frac{\partial \mathbf{r}}{\partial u}\frac{\partial \mathbf{r}}{\partial v} du dv
$$

or

$$
ds^2 = E du^2 + 2Fdudv + Gdv^2
$$

where,

$$
E = (\frac{\partial \mathbf{r}}{\partial u})^2
$$

$$
F = \frac{\partial \mathbf{r}}{\partial u}\frac{\partial \mathbf{r}}{\partial v}
$$

$$
G = (\frac{\partial \mathbf{r}}{\partial v})^2
$$

This is the first fundamental form for the sureface $\mathbf{r}(u,v)$.

### Surface Curves

By letting $u, v$ be functions of a single variable $t$, we obtain:

$$
\mathbf{r}(t) = \mathbf{r}(u(t), v(t))
$$

Along this curve,

$$
d\mathbf{r} = (\frac{\partial \mathbf{r}}{\partial u}\frac{du}{dt} + \frac{\partial \mathbf{r}}{\partial v}\frac{dv}{dt})dt
$$

Now consider another curve such that:

$$
\delta\mathbf{r} = \frac{\partial \mathbf{r}}{\partial u}\delta u + \frac{\partial \mathbf{r}}{\partial v}\delta v
$$

where, $\delta u$ and $\delta v$ are the differential cahnges of $u(t)$ and $v(t)$ for this new curve.

so that the two curves are orthogonal if and only if

$$
E du \delta u + G dv \delta v + F(du \delta v + dv \delta u) = 0
$$

or,

$$
E + F(\frac{\delta v}{\delta u} + \frac{dv}{du}) + G \frac{dv}{du} \frac{\delta v}{\delta u} = 0
$$

If we have a system of curves on the surface given by the differential equation $P(u,v)\delta u + Q(u,v)\delta v = 0$, the differential equation for the orthogonal trajectories is given by

$$
E + F(-\frac{P}{Q} + \frac{dv}{du} - \frac{GP}{Q} \frac{dv}{du}) = 0
$$

since,

$$
\frac{\delta v}{\delta u} = - \frac{P}{Q}
$$

### Normal to a Surface

The vectors $\frac{\partial \mathbf{r}}{\partial u}$ and $\frac{\partial \mathbf{r}}{\partial v}$ are tangent to the surface. The normal vector to the surface is given by the cross product of these two vectors.

Note that $\frac{\partial \mathbf{r}}{\partial u} \times \frac{\partial \mathbf{r}}{\partial v}$ is a vector normal to the surface and need not be a unit vector since $u$ and $v$ are not arc length parameters.

Hence, the unit normal vector is given by:

$$
\mathbf{n} = \frac{(\frac{\partial \mathbf{r}}{\partial u}) \times (\frac{\partial \mathbf{r}}{\partial v})}{\left| (\frac{\partial \mathbf{r}}{\partial u}) \times (\frac{\partial \mathbf{r}}{\partial v}) \right|}
$$

### The second fundamental form
