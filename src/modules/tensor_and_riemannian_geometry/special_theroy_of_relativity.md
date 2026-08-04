### The special theory of relativity

Let us consider the one-parameter group of transformations.

$$
x = \beta (\bar{x}-V\bar{t}) \\
y = \bar{y} \\
z = \bar{z} \\
t = \beta(\bar{t} - \frac{V}{c^2}\bar{x})
$$

where, 

$$
\beta = [1-(\frac{V^2}{c^2})]^{-1/2}
$$

and $V$ is the parameter. $c$ is the speed of light. These are the Einstein-Lorentz transformation. If we set $V=0$, we obtain the identity transformations. The inverse transformation exists:

$$
\bar{x} = \beta (x+Vt) \\
\bar{y} = y \\
\bar{z} = z \\
\bar{t} = \beta(t + \frac{V}{c^2}x)
$$

The result of applying two such transformations yeilds a new Lorentz transformation, 

$$
\bar{x} = \bar{\bar{\beta}}(\bar{\bar{x}}-W\bar{\bar{t}}) \\ 
\bar{y} = \bar{\bar{y}} \\
\bar{z} = \bar{\bar{z}} \\ 
\bar{t} = \bar{\bar{\beta}} (\bar{\bar{t}}-\frac{W}{c^2} \bar{\bar{x}})
$$

where, 

$$
\bar{\bar{\beta}} = [1- (\frac{W}{c^2})]^{-1/2}
$$

then,

$$
x = \bar{\bar{\beta}}(\bar{\bar{x}}-U\bar{\bar{t}}) \\ 
y = \bar{\bar{y}} \\
z = \bar{\bar{z}} \\ 
t = \bar{\bar{\beta}} (\bar{\bar{t}}-\frac{U}{c^2} \bar{\bar{x}})
$$

where,

$$
U = \frac{V+W}{1+(VW/c^2)}, \space \space \space 
\bar{\bar{\beta}} = (1-\frac{U^2}{c^2})^{-1/2}
$$

We now assume that $(x, y, z, t)$ represents an event is space and time as observed by $S$ and that $(\bar{x}, \bar{y}, \bar{z}, \bar{t})$ represents the same event observed by $\bar{S}$.

Now the result shows that the speed of light stays the same for all observers. Thus,

$$
\frac{x^2+y^2+z^2}{t^2} = \frac{\bar{x}^2+\bar{y}^2+\bar{z}^2}{\bar{t}^2} = c^2
$$

So, 

$$
dx^2+dy^2+dz^2-c^2dt^2=0
$$

Let us now consider a clock fixed in $S$ frame. We have $x=constant$, so that $dx = 0$ and $dt=\beta d\bar{t}$. Hence, a unit of time as observed by $\bar{S}$ is not a unit of time as observed by $S$ because of the factor $\beta \ne 1$. $S$ remarks that $\bar{S}$'s clock is running slowly. The same is true for clocks fixed in the S frame.

In the context of the Lorentz transformation, we have an invariant in our four dimensional space for all intertial frame, which we choose as our interval.

$$
ds^2 = c^2 dt^2 - dx^2 - dy^2 - dz^2 = (dx^4)^2 - (dx^1)^2 -(dx^2)^2 - (dx^3)^2
$$

Now if we keep $t$ fixed, $dt = 0$, and 

$$
ds^2 = - (dx^2 + dy^2 + dz^2)
$$

so that ds is pure imaginary, its absolute value denoting length as mesured by meter sticks in a Euclidean space. 

Now, we shall describe laws of physics in tensor terms. 

The momentum of a particle of mass $m_0$ will be defined by 

$$
p^\alpha = m_0 \frac{dx^\alpha}{ds}
$$

If the speed of the particle is $u$,

$$
u^2 = (\frac{dx}{dt})^2 + (\frac{dy}{dt})^2 + (\frac{dz}{dt})^2
$$

as measured by $S$, then

$$
ds^2 = c^2 dt^2 - (dx^2 + dy^2 + dz^2) = (c^2 - u^2) dt^2
$$

so that, 

$$
p^\alpha = \frac{m_0}{(c^2-u^2)^{1/2}} \frac{dx^\alpha}{dt} = \frac{1}{c} \frac{m_0}{[1-(u^2/c^2)]^{1/2}} \frac{dx^\alpha}{dt}
$$

and,

$$
p^4 = \frac{m_0}{[1-(u^2/c^2)]^{1/2}} = m
$$

Notes:

In Newtonian mechanics, the position of a particle is $x(t)$, velocity is $v = dx/dt$, and momentum is simply $p = mv$. Notice that the derivative is taken with respect to time, since Newtonian time is absolute and agrees on the same time $t$.

But in relativity, time is not absolute $dt \ne d\bar{t}$. Therefore, $dx^\alpha/dt$ does not transform as a four vector. So defining momentum as $p^\alpha = m_0 (dx^\alpha/dt)$ does not obey invariance under Lorentz transformation, as different observers would not agree that it is a single geometric object.

So, we use the parameter that every observer agrees upon. That is,

$$
ds^2 = c^2 dt^2 - dx^2 - dy^2 - dz^2 
$$

For a massive particles,

$$
ds = c d\tau
$$

where $d\tau$ is the proper time measured by a clock moving with the particle. Every observer agrees on $d\tau$.

Therefore, $dx^\alpha/ds$ is a genuine four vector. It is called four velocity. So naturally the four momentum is

$$
p^\alpha = m_0 \frac{dx^\alpha}{ds}
$$
or,

$$
p^\alpha = m_0 \frac{dx^\alpha}{cd\tau}
$$

#### Minkowski force

We define Minkowski force by 

$$
f^\alpha = c^2 \frac{d}{ds} (m_0 \frac{dx^\alpha}{ds})
$$

$$
=\frac{1}{[1-(u^2/c^2)]^{1/2}} \frac{d}{dt} (m \frac{dx^\alpha}{dt})
$$

where $\alpha = 1,2,3,4$.

Note:

Since,

$$
\frac{d}{ds} = \frac{dt}{ds} \frac{d}{dt}
$$
 
and,

$$
\frac{dt}{ds} = \frac{1}{c \sqrt{1-(u^2/c^2)}}
$$

we obtain,

$$
f^\alpha = c^2 \frac{dt}{ds} \frac{dp^\alpha}{dt} = \frac{c}{\sqrt{1-(u^2/c^2)}} \frac{dp^\alpha}{dt}
$$

The Minkowski force differs from the Newtonian force by the factor $[1-(u^2/c^2)]^{-1/2}$. The work done by the Newtonian force 

$$
F^\alpha=\frac{d}{dt}(m \frac{dx^\alpha}{dt})
$$

for a displacement $dx^\alpha$ is

$$
dE = \sum_{\alpha = 1}^3 \frac{d}{dt}(m\dot{x}^\alpha)dx^\alpha 
$$

$$
= \sum_{\alpha = 1}^3 (m\ddot{x}^\alpha dx^\alpha + \frac{dm}{dt} \dot{x}^\alpha dx^\alpha)
$$

$$
= \frac{m_0 u du}{[1-(u^2/c^2)]^{3/2}}
$$

Integrating it we get,

$$
E = [1-(u^2/c^2)]^{-1/2}m_0 c^2 - m_0c^2 = (m-m_0)c^2
$$

Notes:

$$

$$