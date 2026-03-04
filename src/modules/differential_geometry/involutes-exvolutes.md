### Involutes

Let us consider a space curve $\Gamma$. We construct a tangent to every point of $\Gamma$ and define an involute as any curve which is normal to every tangent of $\Gamma$. So,

$$
\mathbf{r_i} = \mathbf{r} + u\mathbf{t}
$$

This is the equation of the involute with $u$ unknown. Differentiating the equation with respect to $s_i$, we get,

$$
\frac{d\mathbf{r_i}}{ds_i} = (\frac{d\mathbf{r}}{ds} + \frac{du}{ds}\mathbf{t} + u\frac{d\mathbf{t}}{ds}) \frac{ds}{ds_i}
$$

$$
\mathbf{t_i} = (\mathbf{t} + \frac{du}{ds}\mathbf{t} + u\kappa\mathbf{n}) \frac{ds}{ds_i}
$$

Now, since $\mathbf{t_i} \cdot \mathbf{t} = 0$, we have:

$$
\frac{du}{ds} + 1 = 0
$$

and,

$$
u = c-s
$$

Therefore,

$$
\mathbf{r_i} = \mathbf{r} + (c-s)\mathbf{t}
$$

Differentiating with respect to $s_i$ again:

$$
\mathbf{t_i} = \frac{d\mathbf{r_i}}{ds_i} = (\frac{d\mathbf{r}}{ds} + (c-s)\frac{d\mathbf{t}}{ds} - \mathbf{t}) \frac{ds}{ds_i}
$$

$$
\mathbf{t_i} = (c-s)\kappa \frac{ds}{ds_i} \mathbf{n}
$$

Hence, tangent to the involute is parallel to the principal normal of the original curve. Since $\mathbf{t_i}$ and $\mathbf{n}$ are unit vectors, we must have:

$$
(c-s)\kappa \frac{ds}{ds_i} = 1
$$

Therefore, the curvature of the involute is obtained from:

$$
\frac{d\mathbf{t_i}}{ds_i} = \kappa_i \mathbf{n_i} = \frac{d\mathbf{n}}{ds} \frac{ds}{ds_i} = \frac{-\kappa \mathbf{t} - \tau \mathbf{b}}{(c-s)\kappa}
$$

Hence,

$$
\kappa_i = \frac{\kappa^2 + \tau^2}{\kappa^2(c-s)^2}
$$

### Evolutes

Evolutes are inverse concept of involutes. It is a curve $\Tau'$ whose tangents are perpendicular to a given curve. The tangent to $\Tau'$ must lie in the plane of $\mathbf{b}$ and $\mathbf{n}$ of $\Tau$, since it is perpendicular to $\mathbf{t}$.

$$
\mathbf{r_e} = \mathbf{r} + u\mathbf{n} + v\mathbf{b}
$$

is the equation of the evolute. The solution to this equation is as follows:

$$
\mathbf{r_e} = \mathbf{r} + \rho\mathbf{n} + \rho \tan(\phi-c) \mathbf{b}
$$

where,

$$
\phi = \int_0^s \tau ds = \tan^{-1}(\frac{v}{u}) + c
$$
