### Differentiation

#### Tangents and derivative at a point

Tangents are lines that touch a curve at a single point. It is a line that is perpendicular to the normal at that point. The tangent has the same direction as the slope of the curve.

Derivative at a point $x = a$ is the slope of the tangent at that point.

The tangent line represents the instantaneous rate of change of a function at a point.

$$
\text{slope of tangent} = \frac{dy}{dx}
$$

#### Derivatives from first priciples (Definition)

$$
f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
$$

Example:

$$
f(x) = x^2
$$

$$
f'(x) = \lim_{h \to 0} \frac{(x+h)^2 - x^2}{h}
$$

$$
f'(x) = \lim_{h \to 0} \frac{x^2 + 2xh + h^2 - x^2}{h}
$$

$$
f'(x) = \lim_{h \to 0} \frac{2xh + h^2}{h}
$$

$$
f'(x) = \lim_{h \to 0} \frac{h(2x + h)}{h}
$$

$$
f'(x) = \lim_{h \to 0} (2x + h)
$$

$$
f'(x) = 2x
$$

#### Differentiation rules

Some fundamental rules (without derivation):

Notation:

$$
\frac{d}{dx} f = f'
$$

**Power Rule**

$$
\frac{d}{dx}x^n = nx^{n-1}
$$

**Constant Rule**

$$
\frac{d}{dx}c = 0
$$

**Sum Rule**

$$
(f+g)' = f' + g'
$$

**Product Rule**

$$
(fg)' = f'g + fg'
$$

**Quotient Rule**

$$
(\frac{f}{g})' = \frac{f'g - fg'}{g^2}
$$

Example:

$$
f(x) = x^2 + 3x
$$

$$
f'(x) = 2x + 3
$$

#### Derivative as a rate of change

The meaning of derivative is the rate of change of a function at a point. It tells how fast something is changing.

- If $s(t)$ = position
- Then $s'(t)$ = velocity
- And $s''(t)$ = acceleration

Example:

$$
s(t) = t^2
$$

$$
s'(t) = 2t
$$

which means that at $t=3$, the velocity is $s'(3) = 2(3) = 6$.

#### Chain Rule

$$
\frac{d}{dx} f(g(x)) = f'(g(x)) \cdot g'(x)
$$

Example:

$$
f(x) = sin(x^2)
$$

$$f'(x) = cos(x^2) \cdot 2x$$

#### Implicit Differentiation

Implicit differentiation is used when y is not isolated.

Example 1:

$$
x^2 + y^2 = 25
$$

$$
2x + 2y \frac{dy}{dx} = 0
$$

$$
\frac{dy}{dx} = -\frac{x}{y}
$$

Example 2:

$$
xy = 1
$$

Use product rule:

$$
x\frac{dy}{dx} + y = 0
$$

$$
\frac{dy}{dx} = -\frac{y}{x}
$$

#### Linearization

Linearization is the process of approximating a function near a point with a linear function.

Geometrically, it is the tangent line to the function at the point.

**Formula:**

$$
L(x) = f(a) + f'(a)(x-a)
$$

This is basically the equation of the tangent line to the function at the point $x = a$.

Example:

$$
f(x) = \sqrt{x}
$$

at $a = 4$:

$$f(4) = \sqrt{4} = 2$$

$$f'(x) = \frac{1}{2\sqrt{x}}$$

$$f'(4) = \frac{1}{2\sqrt{4}} = \frac{1}{4}$$

$$L(x) = 2 + \frac{1}{4}(x-4)$$

$$L(x) = 2 + \frac{1}{4}x - 1$$

$$L(x) = \frac{1}{4}x + 1$$

#### Differentials

Differentials are used to approximate the small change in a function.

**Formula:**

$$
dy = f'(x)dx
$$

where $dy$ is the approximate change in $y$ and $dx$ is the approximate change in $x$.

Example:

$$
y = x^2
$$

$$
dy = 2x dx
$$

At x = 3, dx = 0.1,

$$
dy = 2(3)(0.1) = 0.6
$$

### General derivative formulas
