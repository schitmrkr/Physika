## Differential Vector Calculus

### Differentiation of vectors

Let us consider the vector field

$$
\mathbf{u} = \alpha(x, y, z, t) \mathbf{i} + \beta(x, y, z, t) \mathbf{j} + \gamma(x, y, z, t) \mathbf{k}
$$

We have following definition for it's differential:

$$
d\mathbf{u} = d\alpha \space \mathbf{i} + d\beta \space \mathbf{j} + d\gamma \space \mathbf{k}
$$

$$
d\mathbf{u} = (\frac{\partial \alpha}{\partial x} \space dx + \frac{\partial \alpha}{\partial y} \space dy + \frac{\partial \alpha}{\partial z} \space dz + \frac{\partial \alpha}{\partial t} \space dt) \mathbf{i} \\ + (\frac{\partial \beta}{\partial x} \space dx + \frac{\partial \beta}{\partial y} \space dy + \frac{\partial \beta}{\partial z} \space dz + \frac{\partial \beta}{\partial t} \space dt) \mathbf{j} \\ + (\frac{\partial \gamma}{\partial x} \space dx + \frac{\partial \gamma}{\partial y} \space dy + \frac{\partial \gamma}{\partial z} \space dz + \frac{\partial \gamma}{\partial t} \space dt) \mathbf{k}
$$

For example, let $\mathbf{r} = x \mathbf{i} + y \mathbf{j} + z \mathbf{k}$ be the position vector of a moving particle in $P(x,y,z)$ in three space. Then,

$$
d\mathbf{r} = dx \mathbf{i} + dy \mathbf{j} + dz \mathbf{k} \\
$$

$$
\mathbf{v} = \frac{d\mathbf{r}}{dt} = \frac{dx}{dt} \mathbf{i} + \frac{dy}{dt} \mathbf{j} + \frac{dz}{dt} \mathbf{k} \\
$$

$$
\mathbf{a} = \frac{d\mathbf{v}}{dt} = \frac{d^2x}{dt^2} \mathbf{i} + \frac{d^2y}{dt^2} \mathbf{j} + \frac{d^2z}{dt^2} \mathbf{k}
$$

If the vector $\mathbf{u}$ depends on a single variable t, we can define

$$
\frac{d\mathbf{u}}{dt} = limit_{\Delta t \to 0} \frac{\mathbf{u}(t + \Delta t) - \mathbf{u}(t)}{\Delta t}
$$

Consider a particle moving on a circle of radius $r$ with constant angular speed $\omega = \frac{d\theta}{dt}$. We note that,

$$
\mathbf{r} = r \cos(\theta) \mathbf{i} + r \sin(\theta) \mathbf{j}
$$

$$
\mathbf{v} = \frac{d\mathbf{r}}{dt} = (-r\sin \theta \mathbf{i} + r\cos \theta \mathbf{j}) \frac{d\theta}{dt}
$$

$$
\mathbf{a} = \frac{d\mathbf{v}}{dt} = (-r\cos \theta \mathbf{i} - r\sin \theta \mathbf{j}) \left(\frac{d\theta}{dt}\right)^2
$$

Therefore, the acceleration is:

$$
\mathbf{a} = - \omega^2 \mathbf{r}
$$

Example 15. Let $P$ be any point on the space curve:

$$
x = x(s) \\
y = y(s) \\
z = z(s)
$$

where $s$ is the arc length parameter from some fixed point $Q$. Now,

$$
\mathbf{r} = x(s) \mathbf{i} + y(s) \mathbf{j} + z(s) \mathbf{k}
$$

so that,

$$
\frac{d\mathbf{r}}{ds} = \frac{dx}{ds} \mathbf{i} + \frac{dy}{ds} \mathbf{j} + \frac{dz}{ds} \mathbf{k}
$$

and

$$
\frac{d\mathbf{r}}{ds} \cdot \frac{d\mathbf{r}}{ds} = \left(\frac{dx}{ds}\right)^2 + \left(\frac{dy}{ds}\right)^2 + \left(\frac{dz}{ds}\right)^2 \\
=\frac{dx^2+dy^2+dz^2}{ds^2} = 1
$$

Hence, $\frac{d\mathbf{r}}{ds}$ is a unit vector. As $\Delta s \to 0$, $\frac{d\mathbf{r}}{ds}$ is the direction of the tangent to the curve at $P$.

#### Differentiation Rules

$$
\phi (t) = \mathbf{u}(t) \cdot \mathbf{v}(t) \\
\phi(t + \Delta t) - \phi(t) = \mathbf{u}(t + \Delta t) \cdot \mathbf{v}(t + \Delta t) - \mathbf{u}(t) \cdot \mathbf{v}(t)
$$

Now,

$$
\mathbf{u}(t + \Delta t) = \mathbf{u}(t) + \Delta \mathbf{u} \\
\mathbf{v}(t + \Delta t) = \mathbf{v}(t) + \Delta \mathbf{v}
$$

so that,

$$
\frac{\phi(t+\Delta t) - \phi(t)}{\Delta t} = \mathbf{u} \cdot \frac{\Delta \mathbf{v}}{\Delta t} + \mathbf{v} \cdot \frac{\Delta \mathbf{u}}{\Delta t} + \frac{\Delta \mathbf{u}}{\Delta t} \cdot \Delta \mathbf{v}
$$

and passing to the limit, we obtain,

$$
\frac{d(\mathbf{u} \cdot \mathbf{v})}{dt} = \mathbf{u} \cdot \frac{d\mathbf{v}}{dt} + \mathbf{v} \cdot \frac{d\mathbf{u}}{dt}
$$

Similarly,

$$
\frac{d(u \times v)}{dt} = \frac{d(u)}{dt} \times v + u \times \frac{d(v)}{dt}
$$

$$
\frac{d(f\mathbf{u})}{dt} = \frac{df}{dt}\mathbf{u} + f\frac{d\mathbf{u}}{dt}
$$

Let $\mathbf{u}(t)$ be a vector of constant magnitude $u$. Then,

$$
\mathbf{u} \cdot \mathbf{u} = u^2
$$

Since, $\mathbf{u} \cdot \mathbf{u} = u^2$, we have,

$$
\frac{d(u^2)}{dt} = \frac{d(u \cdot u)}{dt} = \frac{du}{dt} \cdot u + u \cdot \frac{du}{dt} = 2u \cdot \frac{du}{dt}
$$

So, we obtain,

$$
\mathbf{u} \cdot \frac{d\mathbf{u}}{dt} = 0
$$

Hence, $\mathbf{u}$ is perpendicular to $\frac{d\mathbf{u}}{dt}$.

### The Gradient

Let $\phi(x, y, z)$ be any continuous differentiable space function. From the calculus

$$
d\phi = \frac{\partial \phi}{\partial x} dx + \frac{\partial \phi}{\partial y} dy + \frac{\partial \phi}{\partial z} dz
$$

Now, let $\mathbf{r}$ be the position vector to the point $P(x,y,z)$.

$$
\mathbf{r} = x \mathbf{i} + y \mathbf{j} + z \mathbf{k}
$$

If we move to the point $Q(x + \Delta x, y + \Delta y, z + \Delta z)$, then,

$$
d\mathbf{r} = dx \mathbf{i} + dy \mathbf{j} + dz \mathbf{k}
$$

Now notice that contains the terms $dx, dy, dz$ and the terms $\frac{\partial \phi}{\partial x}, \frac{\partial \phi}{\partial y}, \frac{\partial \phi}{\partial z}$. We define a new vector formed from $\phi$ by taking its three partial derivatives.

$$
\nabla \phi = \frac{\partial \phi}{\partial x} \mathbf{i} + \frac{\partial \phi}{\partial y} \mathbf{j} + \frac{\partial \phi}{\partial z} \mathbf{k}
$$

We can immediately see that,

$$
d\phi = \nabla \phi \cdot d\mathbf{r}
$$

Now we give a geometric interpretation of $\nabla \phi$. At the point $P(x_0,y_0,z_0)$, $\phi$ has the value $\phi(x_0,y_0,z_0)$ so that

$$
\phi(x,y,z) = \phi(x_0,y_0,z_0)
$$

represents a surface which obviously contains the point $P(x_0,y_0,z_0)$. As long as we move along this surface, $\phi$ has the constant value $\phi(x_0,y_0,z_0)$ and $d\phi = 0$. Consequently,

$$
dr \cdot \nabla \phi = 0
$$

This equation states that $\nabla \phi$ is perpendicular to the surface $\phi(x,y,z) = \phi(x_0,y_0,z_0)$ at the point $P(x_0,y_0,z_0)$.

Now, let us return to $d\phi = d\mathbf{r} \cdot \nabla \phi$. The vector $\nabla \phi$ is fixed at any point $P(x,y,z)$, so that $d\phi$ will depend to a great extent on $d\mathbf{r}$.

Hence, $\nabla \phi$ is the direction of maximum increase of $\phi$ at $P(x,y,z)$.

### The Vector Operator

The vector operator $\nabla$ (del) is defined as,

$$
\nabla = \frac{\partial}{\partial x} \mathbf{i} + \frac{\partial}{\partial y} \mathbf{j} + \frac{\partial}{\partial z} \mathbf{k}
$$

Thus,

$$
\nabla \phi = (\frac{\partial }{\partial x} \mathbf{i} + \frac{\partial}{\partial y} \mathbf{j} + \frac{\partial }{\partial z} \mathbf{k}) \phi \\
= \frac{\partial \phi}{\partial x} \mathbf{i} + \frac{\partial \phi}{\partial y} \mathbf{j} + \frac{\partial \phi}{\partial z} \mathbf{k}
$$

### Divergence of a vector

The divergence of a vector field $\mathbf{f}$ is defined as $\nabla \cdot \mathbf{f}$,

$$
\nabla \cdot \mathbf{f} = \frac{\partial f_x}{\partial x} + \frac{\partial f_y}{\partial y} + \frac{\partial f_z}{\partial z}
$$

Now we calculate divergence of $\phi(x,y,z)\mathbf{f}$,

$$
\nabla \cdot (\phi\mathbf{f}) = \frac{\partial}{\partial x}(\phi f_x) + \frac{\partial}{\partial y}(\phi f_y) + \frac{\partial}{\partial z}(\phi f_z) \\
= \phi (\frac{\partial f_x}{\partial x} + \frac{\partial f_y}{\partial y} + \frac{\partial f_z}{\partial z}) + (\frac{\partial \phi}{\partial x} f_x + \frac{\partial \phi}{\partial y} f_y + \frac{\partial \phi}{\partial z} f_z) \\
$$

$$
\nabla \cdot (\phi\mathbf{f}) = \phi \nabla \cdot \mathbf{f} + \mathbf{f} \cdot \nabla \phi
$$

### Curl of a Vector

Curl of a vector field $\mathbf{f}$ is defined as $\nabla \times \mathbf{f}$,

$$
\nabla \times \mathbf{f} = \left( \frac{\partial f_z}{\partial y} - \frac{\partial f_y}{\partial z} \right) \mathbf{i} + \left( \frac{\partial f_x}{\partial z} - \frac{\partial f_z}{\partial x} \right) \mathbf{j} + \left( \frac{\partial f_y}{\partial x} - \frac{\partial f_x}{\partial y} \right) \mathbf{k}
$$

$$
\nabla \times \mathbf{f} = \det \begin{pmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
f_x & f_y & f_z
\end{pmatrix}
$$
