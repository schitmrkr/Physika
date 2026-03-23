### Higher Order Derivatives

Higher order derivatives is just the derivative of the derivative.

- 1st derivative: $f'(x)$ - rate of change of $f(x)$
- 2nd derivative: $f''(x)$ - rate of change of $f'(x)$
- 3rd derivative: $f'''(x)$ - rate of change of $f''(x)$
- nth derivative: $f^{(n)}(x)$ - rate of change of $f^{(n-1)}(x)$

Example:

$$
f(x) = x^4 + 3x^3 + 2x
$$

- First derivative:

$$
f'(x) = 4x^3 + 9x^2 + 2
$$

- Second derivative:

$$
f''(x) = 12x^2 + 18x
$$

- Third derivative:

$$
f'''(x) = 24x + 18
$$

- Fourth derivative:

$$
f^{(4)}(x) = 24
$$

- Fifth derivative:

$$
f^{(5)}(x) = 0
$$

### Leibniz Theorem

Leibniz theorem is used to find the nth derivative of a product of two functions.

If $y = u(x) \cdot v(x)$, then the nth derivative is given by:

$$
y^{(n)} = \sum_{k=0}^{n} \binom{n}{k} u^{(n-k)}v^{(k)}
$$

where,

$u^{(m)}$ is the mth derivative of $u(x)$

$v^{(m)}$ is the mth derivative of $v(x)$

$\binom{n}{k}$ is the binomial coefficient/combination

$$
\binom{n}{k} = \frac{n!}{k!(n-k)!}
$$

Example:

$$
y = x^2 \cdot e^x
$$

Find the 3rd derivative of $y$.

- n = 3
- u = x^2
- v = e^x

Derivatives of u:

- u' = 2x
- u'' = 2
- u''' = 0

Derivatives of v:

- v' = e^x
- v'' = e^x
- v''' = e^x

Now apply the formula:

$$
y^{(3)} = \binom{3}{0}u^{(3)}v^{(0)} + \binom{3}{1}u^{(2)}v^{(1)} + \binom{3}{2}u^{(1)}v^{(2)} + \binom{3}{3}u^{(0)}v^{(3)}
$$

Plug in:

$$
y^{(3)} = (1)(0)(e^x) + (3)(2x)(e^x) + (3)(2)(e^x) + (1)(x^2)(e^x)
$$

$$
y^{(3)} = 6xe^x + 6e^x + x^2e^x
$$

$$
y^{(3)} = e^x(x^2 + 6x + 6)
$$

This is a simple application of Leibniz theorem.

### Practice Problems
