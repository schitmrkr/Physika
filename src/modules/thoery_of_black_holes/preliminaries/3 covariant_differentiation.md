### Covariant Differentiation

Unlike exterior differentiation and lie differentiation, we have covariant differentiation which endows the manifold with additional structure. This additional structure is affine connection, $\nabla$, which assigns to each vector field $X$ on manifold $M$, a differential operator $\nabla_X$, which maps an arbitrary vector field $Y$ into a vector field $\nabla_X Y$. Following is the imposed conditions.

**a**. $\nabla_X Y$ is linear in the argument $X$

$$
\nabla_{fX+gY} Z = f\nabla_X Z + g \nabla_Y Z, \space (X, Y, Z \in T^1_0)
$$

where $f$ and $g$ are any two arbitrary functions defined on $M$.

**b**. $\nabla_X Y$ is linear in argument $Y$

$$
\nabla_X(Y + Z) = \nabla_X Y + \nabla_X Z, \space (X, Y, Z \in T^1_0)
$$

**c**. $\nabla_X f = Xf$

**d**. $\nabla_X(fY) = (\nabla_X f)Y + f \nabla_X Y$


***

**Notes**

We want a notion of derivative that tells us how a vector field changes from point to point on a curved manifold.

For an ordinary function $f(x)$, differentiation is easy.

$$
\frac{df}{dx}
$$

You compare $f(x + \Delta x)$ with $f(x)$.

For a vector field,

$$
Y = Y^i \frac{\partial}{\partial x^i}
$$

you might think 

$$
\frac{\partial Y^i}{\partial x^j}
$$

tell us how $Y$ changes. But on curved manifold there is a problem. Suppose.

$$
Y(p) \in T_p M, \space Y(q) \in T_q M
$$

These vector live in different tangent space:

$$
T_p M \ne T_q M
$$

So, $Y(p)-Y(q)$ is not well defined geometrically. This is the motivation behind affine connection $\nabla$.

$\nabla_X Y$ is telling you how vector field $Y$ is changing as I move in the direction of $X$.

***

With the action of $\nabla_X$ on vector fields $Y \in T^1_0$ specified by the rules a-d, we now define covariant derivative, $\nabla Y$. of $Y$ as a tensor field of type (1,1) which maps the contravariant vector field $X$ to $\nabla_X Y$

$$
\nabla Y(X) = \langle \nabla Y, X \rangle = \nabla_X Y
$$

for every $X \in T^1_0$. In this notation condition **d** can be rewritten as

$$
\nabla(fY) = df \otimes Y + f \nabla Y
$$

Rewrite in some chosen dual bases $(e_i)$ and $(e^j)$

$$
\nabla_X Y = \nabla_X(Y^j e_j) = (XY^j) e_j + Y^j \nabla_X e_j
$$

Now,

$$
\nabla_X e_j = \omega^l_j (X) e_l
$$

where $\omega^l_j$ are one forms. Thus,

$$
\nabla_X Y = (XY^j) e_j + Y^j \omega^l_j (X) e_l
$$

We can also write it as 

$$
\nabla_X Y = (XY^j) e_j + Y^j \nabla_{X^k e_k} e_l
$$

$$
= (XY^j) e_j + Y^j X^k \nabla_{e_k} e_l
$$

Using the dual form definition

$$
\nabla_X Y = (XY^j) e_j + Y^j X^k \omega^l_j(e_k) e_l
$$

Letting 

$$
\omega^l_j(e_k) = \omega^l_{jk}
$$

Thus,

$$
\nabla_X Y = [(XY^j)  +  \omega^j_l(X) Y^l] e_j
$$


$$
(\nabla_X Y)^j = (XY^j) +  \omega^j_l(X) Y^l
$$

In local coordinate basis $(\partial_k, dx^l)$, gives

$$
(\nabla_{\partial_k} Y)^j = \partial_k Y^j + Y^l \omega^j_{lk} = Y^j_{,k} + Y^l \omega^j_{lk}
$$

In local coordinate basis, it is customary to write $\Gamma^j_{lk}$ instead of $\omega^j_{lk}$.

$$
Y^j_{;k} =  Y^j_{,k} + Y^l \Gamma^j_{lk}
$$

The $\Gamma$ is the contribution due to curvature.

covariant derivative = component change + basis change (curvature)

***

The definition of covariant derivative can be extended to tensor fields, in general, by requiring that the operation of $\nabla$ satisfies the Leibnitz rule when acting on tensor products. Thus we require that

$$
\nabla (S \otimes T) = \nabla S \otimes T + S \otimes \nabla T
$$

An immediate consequence of this requirement is 

$$
\nabla_X [T(\omega^1, ...., \omega^r, Y_1, ....,Y_s)]
$$

$$
= (\nabla_X T)(\omega^1, ...., \omega^r, Y_1, ....,Y_s) + \\
T(\nabla_X \omega^1, ...., \omega^r, Y_1, ....,Y_s) + ... \\
+ T(\omega^1, ...., \omega^r, Y_1, ....,\nabla_X Y_s)
$$

Thus, if $\Omega$ is a one-form, then, for every vector field $Y$, the foregoing equation gives

$$
\nabla_X(\Omega(Y)) = (\nabla_X \Omega)(Y) + \Omega (\nabla_X Y)
$$

or in terms of local basis $(e_i), (e^j)$, we have

$$
\nabla_X (\Omega_j Y^j) = (\nabla_X \mathbf{\Omega})_j Y^j + \Omega_j (\nabla_X Y)Y^j
$$

Now, we find

$$
(\nabla_X \mathbf{\Omega})_j Y^j = (X \Omega_j) Y^j + \Omega_j (XY^j) - \Omega_j[XY^j + Y^i \omega^j_l(X)] \\
= (X \Omega_j) Y^j - \Omega_l \omega^l_j (X) Y^j
$$

We conclude that

$$
(\nabla_X \mathbf{\Omega})_j = X \Omega_j - \Omega_l \omega^l_j (X)
$$

or alternatively,

$$
\nabla_X \mathbf{\Omega} = [X \Omega_j - \Omega_l \omega^l_j (X)] e^j
$$

Specializing this last euqtion to the case when $\Omega = e^j$, we obtain the formula

$$
\nabla_X e^j = - \omega^j_l(X) e^l
$$

We may also note that in a lcoal coordinate basis, 

$$
\Omega_{j;k} = \Omega_{j,k} - \Omega_l \Gamma^l_{jk}
$$

Now we can write  down the covariant derivative of an arbitrary tensor field.

$$
S^{ij}_{k;l} = S^{ij}_{k,l} + S^{mj}_k \Gamma^i_{ml} + S^{im}_k \Gamma^j_{ml} -  S^{ij}_m \Gamma^m_{kl}
$$

***

**Notes**

$\nabla_X Y$ tells us change of Y in X direction with the geometry of the manifold taken into account.

Now we define the covariant derivative of entire vector field $Y$,

$$
\nabla Y (X) = \nabla_X Y
$$

This means that $\nabla Y$ takes vector $X$ as input and gives another vector as output. Thus $\nabla Y$ is a tensor of type $(1,1)$.

$$
\nabla Y: TM \to TM
$$

Now lets consider this

$$
\nabla (fY)
$$

$$
\nabla(fY)(X) = \nabla_X (fY)
$$

$$
\nabla_X (fY) = (Xf) Y + f \nabla_X Y
$$

But, $Xf = df(X)$

$$
\nabla (fY) = df \otimes Y + f \nabla Y
$$

***