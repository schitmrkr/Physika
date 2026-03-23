### Asymptotes

Asymptotes are lines that a curve approaches as it heads towards infinity. There are three different kinds of asymptotes:

1. Vertical asymptotes
2. Horizontal asymptotes
3. Slant asymptotes

#### Vertical asymptotes

Vertical asymptotes occur when the denominator of a rational function is zero. It is a vertical line of the form $x = a$. Example:

$$
y = \frac{1}{x-1}
$$

$$
x - 1 = 0
$$

$$
x = 1
$$

Vertical asymptote is at $x = 1$.

**Solution:**

As $x$ approaches $1$ from the right, $x-1$ approaches $0$ from the right, so $\frac{1}{x-1}$ approaches infinity.

As $x$ approaches $1$ from the left, $x-1$ approaches $0$ from the left, so $\frac{1}{x-1}$ approaches negative infinity.

#### Horizontal asymptotes

Horizontal asymptotes occur when the limit of a function as $x$ approaches infinity is a constant. It is a horizontal line of the form $y = a$. Example:

$$
y = \frac{2x+1}{x-1}
$$

$$
y = \lim_{x \to \infty} \frac{2x+1}{x-1}
$$

$$
y = \lim_{x \to \infty} \frac{2x}{x-1} + \frac{1}{x-1}
$$

$$
y = \lim_{x \to \infty} \frac{2x}{x-1}
$$

$$
y = \lim_{x \to \infty} \frac{2}{(1-\frac{1}{x})}
$$

$$
y = 2
$$

Horizontal asymptote is at $y = 2$.

**Solution:**

As $x$ approaches infinity, $\frac{2x+1}{x-1}$ approaches $\frac{2x}{x} = 2$.

As $x$ approaches negative infinity, $\frac{2x+1}{x-1}$ approaches $\frac{2x}{x} = 2$.

#### Slant asymptotes

Slant asymptotes occur when the degree of the numerator is one greater than the degree of the denominator. It is a line of the form $y = mx + b$.
Example:

$$
y = \frac{x^2}{x-1}
$$

Slant asymptote is at $y = x+1$.

**Solution:**

$$
y = \frac{x^2}{x-1}
$$

$$
y = \frac{x^2-x+x-1+1}{x-1}
$$

$$
y = x + 1 + \frac{1}{x-1}
$$

$$
y \approx x + 1
$$

when x is very large.

### Examples

#### Example 1

$$
y = \frac{x+3}{x+2}
$$

Vertical asymptote:

$$
x=a
$$

$$
x+2 = 0
$$

$$
x = -2
$$

Vertical asymptote is at $x = -2$.

Horizontal asymptote:

$$
y = b
$$

$$
y = \lim_{x \to \infty} \frac{x+3}{x+2}
$$

$$
y = \lim_{x \to \infty} \frac{(1+\frac{3}{x})}{(1+\frac{2}{x})}
$$

$$
y = 1
$$

Horizontal asymptote is at $y = 1$.
