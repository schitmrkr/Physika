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

### General method for asymptotes

For any general curve:

$$
F(x,y) = 0
$$

We can find the asymptotes by setting the highest total degree term to 0. Call this:

$$
F_n(x,y) = 0
$$

Then we can find the asymptotes by sustitituting $y = mx$,

Divide the entire equation by highest power of x, then take the limit $x \to \infty$

#### Example 2

$$
x^3 + 2x^2y + xy^2 + x^2 - xy + 2 = 0
$$

Here,

$$
F(x,y) = x^3 + 2x^2y + xy^2 + x^2 - xy + 2 = 0
$$

Now only taking the highest total degree term to 0:

$$
F_3(x,y) = x^3 + 2x^2y + xy^2 = 0
$$

Now, substitute $y = mx$ with limit $x \to \infty$

$$
\lim_{x \to \infty} x^3 + 2x^2(mx) + x(mx)^2 = 0
$$

$$
\lim_{x \to \infty} x^3(1 + 2m + m^2) = 0
$$

$$
\lim_{x \to \infty} x^3(1 + m)^2 = 0
$$

$$
(1 + m)^2 = 0
$$

$$
m = -1
$$

Repeated roots means there are more than one asymptote with the same slope.

Therefore, the slant asymptote has the form

$$
y = -x + c
$$

We can determine, $c$ by substituting to full equation:

$$F(x,y) = 0$$

$$
x^3+2x^2(−x+c)+x(−x+c)^2+x^2−x(−x+c)+2=0
$$

$$
x^3-2x^3+2cx^2+x^3-2cx^2+c^2x+x^2+x^2-xc=0
$$

$$
2cx^2-2cx^2+c^2x-xc+2x^2+2=0
$$

$$
(c^2-c)x+2x^2+2=0
$$

$$
2x^2+(c^2-c)x+2=0
$$

For asymptotes, the coefficient of highest power of x must be 0. Since,

$$
2 \neq 0
$$

Since this is not possible, and we have repeated roots, we need to set the next highest power of x to 0.

$$
(c^2-c) = 0
$$

$$
c(c-1) = 0
$$

Therefore, c = 0 or c = 1.

Hence, we have our asymptotes as

$$
y = mx + c
$$

So,

$$
y = -x
$$

and,

$$
y = -x + 1
$$

#### Example 3

$$
x^3 у^2 -x^3 у -x у^2 +x+y+1 = 0
$$

Please practice this yourself. Ask if you need explanation.
