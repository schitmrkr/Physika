### Curvature Forms 

For a manifold endowed with a connection, we define the two mappings

$$
T(X,Y) = \nabla_X Y - \nabla_Y X - [X, Y]
$$

and,

$$
R(X,Y) = \nabla_X \nabla_Y - \nabla_Y \nabla_X - \nabla_{[X,Y]}
$$

where $X$ and $Y$ are two contravariant vector fields. These mappings are called torsion and curvature, respectively. Both are antisymmetric in their arguments.

### Cartan's First Form 

Torsion means does the connection behave symmetrically when we interchange $X$ and $Y$.

<div align="center">
  <img src="torsion-lie-bracket.png" width="50%" class="image--themed">
</div>
 
We have two vectors $X, Y$. The first term $\nabla_X Y$ means how does $Y$ change when we move in $X$ direction.  The second term $\nabla_Y X$ means how does $X$ change when we move in $Y$ direction. The third term $[X,Y]$ is the Lie bracket. 

Suppose that the connection were such that

$$
 \nabla_X Y - \nabla_Y X = [X, Y]
$$

Then,

$$
T(X, Y) = 0
$$

This is what happens for Levi-Civita connection. 

Now lets take the whole equation again,

$$
T(X,Y) = \nabla_X Y - \nabla_Y X - [X, Y]
$$

$X$ and $Y$ are vector fields on a manifold $M$.

$$
X = X^i \partial_i, \space Y = Y^j \partial_j
$$

For example in 2 dimensional space:

$$
X = X^x \frac{\partial}{\partial x} + X^y \frac{\partial}{\partial y}
$$

The covariant derivative of $Y$ in $X$ direction is $\nabla_X Y$. 

Why not just use $XY$? Because $Y$ is a vector not a scalar. For a scalar function $f$,

$$
Xf
$$

is easy to define. But for a vector field $Y$, vectors at different points belong to different tangent spaces:

$$
Y(p) \in T_pM, \space Y(q) \in T_qM
$$

So you cannot simply substract them $Y(p)-Y(q)$ without some rule for comparing them. The rule is the connection $\nabla$.

What does $\nabla_X Y$ look like in coordinates?

$$
X = X^k \partial_k, \space Y= Y^j \partial_j
$$

Then,

$$
\nabla_X Y = X^k (\partial_k Y^j + \Gamma^j_{lk} Y^l) \partial_j
$$

So the difference $\nabla_X Y - \nabla_Y X$ measures the antisymmetric part of the covariant derivative.

**Third Term: [X, Y]**

$$
[X, Y]f = X(Yf) - Y(Xf)
$$

for any scalar funtion $f$. It measures the failure of the flows of $X$ and $Y$ to commute. 

Therefore, 

$$
T(X,Y) = \text{asymmetric connection change - intrinsic non commutativity}
$$

The exterior derivative is an operator that takes a differential $k$-form and produces a differential $(k+1)$-form:

$$
d: \Omega^k(M) \to \Omega^{k+1}(M)
$$

For an arbitrary $1$-form $\alpha$, its exterior derivative $d\alpha$  is a $2$-form.

We want to determine its action on two vector fields $X$ and $Y$.

A $k$-form in general maps $k$ vector fields to a scalar.  A differential $k$-form is defined as an alternating covariant tensor field of rank $k$. Alternating means that exchanging any two arguments changes the sign.

For a $2$-form:

$$
d\alpha(X, Y) = -d\alpha(Y, X)
$$

This implies that 

$$
d\alpha(X, X) = 0
$$

A 1-form $\alpha$ maps a vector field into a smooth function:

$$
\alpha: \chi(M) \to C^\infin(M)
$$

For example, if 

$$
X = X^\mu \partial_\mu
$$

and 

$$
\alpha = \alpha_\nu dx^\nu
$$

then,

$$
\alpha(X) = \alpha_\nu X^\nu
$$

This is a scalar function on the manifold. We can differentiate this scalar function along another vector field.

For instance:

$$
X[\alpha(Y)]
$$

means that we evaluate the $1$-form on $Y$, obtaining a scalar function, and then differentiate it along $X$.

Since $d\alpha$ must be antisymmetric in $X$ and $Y$, consider:

$$
X[\alpha(Y)] - Y[\alpha(X)]
$$

This expression is antisymmetric because exchanging $X$ and $Y$ changes its sign.

The exterior derivative must be a tensor, meaning its value at a point should depend only on the values of $X$ and $Y$ at that point.

Suppose we replace $X$ with $fX$, where $f$ is a smooth scalar function.

$$
fX[\alpha(Y)] - Y[\alpha(fX)] = fX[\alpha(Y)] - Y[f \alpha(X)] 
$$

$$
= fX[\alpha(Y)] - Y(f) \alpha(X) - fY[\alpha(X)]
$$

$$
= f (X[\alpha(Y)] - Y[\alpha(X)]) - Y(f) \alpha(X) 
$$

We have an unwanted extra term:

$$
-Y(f)\alpha(X)
$$

This means our expression is not tensorial in $X$.

Introduce the Lie bracket to cancel the extra term

$$
[fX, Y] = f[X, Y] - Y(f) X
$$

Applying the $1$-form $\alpha$:

$$
\alpha([fX, Y]) = f \alpha([X, Y]) - Y(f) \alpha(X)
$$

Now consider the modified expression:

$$
d\alpha(X, Y) = X[\alpha(Y)] - Y[\alpha(X)] - \alpha([X, Y])
$$

Replace $X$ with $fX$:

$$
d\alpha(fX, Y) = fX[\alpha(Y)] - Y[f \alpha(X)] - \alpha([fX, Y])
$$

$$
= fX[\alpha(Y)] - Y(f) \alpha(X) -fY[\alpha(X)] - f \alpha([X, Y]) + Y(f) \alpha(X)
$$

$$
= fX[\alpha(Y)] - fY[\alpha(X)] - f \alpha([X, Y])
$$

$$
= f(X[\alpha(Y)] - Y[\alpha(X)] - \alpha([X, Y]))
$$
Therefore,

$$
d\alpha(fX, Y) = f \space d\alpha(X, Y)
$$

Thus, the expression is linear over smooth functions in both vector-field arguments. It is therefore tensorial.

General formula for the exterior derivative of a 1-form $\alpha$. 

$$
d\alpha(X, Y) = X[\alpha Y] - Y[\alpha X] - \alpha[X, Y]
$$

Suppose we have a manifold with a local basis of vector fields:

$$
\{ E_1, E_2, ..., E_n \}
$$

The corresponding dual basis of 1-forms is:

$$
\{ e^1, e^2, ..., e^n \}
$$

They satisfy:

$$
e^j (E_k) = \delta^j_k
$$

More generally, any vector field $Y$ can be written as:

$$
Y = e^l(Y) E_l
$$

The connection $1$-forms $\omega^j_l$ tells us how the basis vector fields change when we move along the manifold.

$$
\nabla_X E_l = \omega^j_l(X) E_j
$$

If we evaluate torsion using the dual basis 1-form $e^j$, we obtain its components:

$$
T^j(X, Y) = e^j(T(X, Y))
$$

$$
= e^j(\nabla_X Y - \nabla_Y X - [X, Y])
$$

$$
= e^j \nabla_X Y - e^j \nabla_Y X - e^j ([X, Y])
$$

We know that

$$
Y = e^l(Y) E_l
$$

So,

$$
\nabla_X Y = \nabla_X (e^l(Y) E_l)
$$

$$
= X[e^l(Y)] E_l + e^l(Y) \nabla_X E_l
$$

$$
= X[e^l(Y)] E_l + e^l(Y) \omega^j_l(X) E_j
$$

$$
= (X[e^j(Y)] + e^l(Y) \omega^j_l(X)) E_j
$$

Therefore,

$$
e^j(\nabla_X Y) = X[e^j(Y)] + e^l(Y) \omega^j_l(X)
$$

and

$$
e^j(\nabla_Y X) = Y[e^j(X)] + e^l(X) \omega^j_l(Y)
$$

Now consider torsion equation again,

$$
T^j(X, Y) = X[e^j(Y)] - Y[e^j(X)] - e^j ([X, Y]) \\
+ e^l(Y) \omega^j_l(X) - e^l(X) \omega^j_l(Y)
$$

Recall that:

$$
de^j(X, Y) = X[e^j(Y)] - Y[e^j(X)] - e^j ([X, Y])
$$

$$
(\omega^j_l \wedge e^l)(X, Y) = e^l(Y) \omega^j_l(X) - e^l(X) \omega^j_l(Y)
$$

So, the tensor equation  becomes:

$$
T^j(X, Y) = de^j(X, Y) + (\omega^j_l \wedge e^l)(X, Y)
$$

Cartan's first equation of structure is compact way of saying torsion comes from two things: how basis itself changes, $de^j$ and how the connection changes the basis, $\omega^j_l \wedge e^l$.


### Cartan's Second Form 

The **curvature** by definition, we have

$$
R(X,Y)Z = \nabla_X \nabla_Y Z - \nabla_Y \nabla_X Z - \nabla_{[X,Y]} Z
$$

The expression on right hand side is linear in $X, Y, Z$.

$$
R(fX, Y)Z = R(X, fY)Z = fR(X, Y)Z
$$

and

$$
R(X, Y)fZ = fR(X, Y)Z
$$

where $f$ is an arbitrary function. Hence the mapping,

$$
R: T^1_0 \times T^1_0 \times T^1_0 \to T^1_0
$$

is a multilinear function of the arguments. Consequently, $R$ is a tensor field of type $(1,2)$: it is called the Riemann tensor.

Now, making use of known relations,

$$
\nabla_X \nabla_Y Z = \nabla_X \{ Ye^j(Z) + \omega^j_k(Y) e^k(Z) \} e_j
$$

$$
= [ Ye^l(Z) + \omega^l_k(Y) e^k(Z)] \nabla_X e_l + [XYe^j(Z) + X\{ \omega^j_k(Y) e^k(Z) \}]e_j
$$

$$
= [ Ye^l(Z) + \omega^l_k(Y) e^k(Z)] \omega^j_l (X) e_j + [XYe^j(Z) + e^l(Z)X\omega^j_l(Y) + \omega^j_l(Y) X e^l(Z)] e_j
$$


Consequently,

$$
\nabla_X \nabla_Y Z - \nabla_Y \nabla_X Z = \{ [X\omega^j_l(Y) - Y\omega^j_l(X) +\omega^j_k(X)\omega^k_l(Y) - \omega^j_k(Y) \omega^j_l(X)]e^l(Z) + [X,Y]e^j(Z)\}e_j
$$

We also have,

$$
\nabla_{[X, Y]} Z = \{ [X, Y]e^j(Z) + \omega^j_l([X,Y])e^l(Z) \} e_j
$$

Now, finally we get,

$$
R(X,Y)Z = \{
[X\omega^j_l(Y) - Y\omega^j_l(X)  - \omega^j_l([X,Y]) \\
+ \omega^j_k(X)\omega^k_l(Y) - \omega^j_k(Y) \omega^j_l(X)] 
\} e^l(Z) e_j
$$

Therefore,

$$
R(X,Y)Z = (d\omega^j_l + \omega^j_k \wedge \omega^k_l) e^l(Z) e_j
$$

We can now define $2$-form:

$$
\Omega^j_l = d\omega^j_l + \omega^j_k \wedge \omega^k_l
$$

This is called the curvature $2$-form.

$$
R(X,Y)Z = \Omega^j_l e^l(Z) e_j
$$

Accordingly, Cartan's second equation of structure is equivalent to the definition

$$
R^j_{lmn} = \Gamma^j_{lm,n} - \Gamma^j_{ln,m} + \Gamma^j_{kn} \Gamma^k_{lm} - \Gamma^j_{km} \Gamma^k_{ln}
$$

This is the Rienmann tensor as conventionally defined. 
