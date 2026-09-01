### The Schrodinger Equation

$$
i \hbar \frac{\partial \Psi}{\partial t} = -\frac{\hbar^2}{2m} \frac{\partial^2 \Psi}{\partial x^2} + V \Psi
$$

where, 

$$
\hbar = \frac{h}{2 \pi} = 1.054573 \times 10^{-34} Js
$$

Proof:

For a non relativisitic particle,

$$
E = \frac{p^2}{2m} + V
$$

$$
E - V = \frac{p^2}{2m}
$$

Use de Broglie relations

$$
E = hf = \hbar \omega
$$

$$
p = \hbar k
$$

Therefore,

$$
\omega = \frac{E}{\hbar}, \space \space k = \frac{p}{\hbar}
$$

Consider a plane wave,

$$
\Psi(x, t) = A e^{i(kx-\omega t)}
$$

Differentiate with respect to time

$$
\frac{\partial \Psi}{\partial t} = -i \omega \Psi
$$

Multiply by $i \hbar$,

$$
i \hbar \frac{\partial \Psi}{\partial t} = \hbar \omega \Psi
$$

Since $E = \hbar \omega$,

$$
i \hbar \frac{\partial \Psi}{\partial t} = E \Psi
$$

This tells us that the operator,

$$
\hat{E} = i \hbar \frac{\partial}{\partial t}
$$

represents energy.

Now, differentiate twice with respect to $x$,

$$
\Psi(x, t) = A e^{i(kx-\omega t)}
$$

$$
\frac{\partial \Psi}{\partial x} = ik\Psi
$$

$$
\frac{\partial^2 \Psi}{\partial x^2} = - k^2 \Psi
$$

$$
\hbar^2 \frac{\partial^2 \Psi}{\partial x^2} = - \hbar^2 k^2 \Psi
$$

$$
\hbar^2 \frac{\partial^2 \Psi}{\partial x^2} = - p^2 \Psi
$$

So the momentum-squared operator is:

$$
\hat{p}^2 = - \hbar^2 \frac{\partial^2}{\partial x^2}
$$

Now subsititute into classical energy equation,

$$
E = \frac{p^2}{2m} + V
$$

Replate $E$ and $p^2$ by their quantum mechanical operator,

$$
i \hbar \frac{\partial }{\partial t} = - \frac{\hbar^2}{2m} \frac{\partial^2}{\partial x^2} + V
$$

Let these operator act on wave function,

$$
i \hbar \frac{\partial \Psi}{\partial t} = - \frac{\hbar^2}{2m} \frac{\partial^2 \Psi}{\partial x^2} + V \Psi
$$


#### Normalization

$$
\int_{- \infin}^{+ \infin} |\Psi(x,t)|^2 dx = 1
$$

Using schrodinger equation we can prove that

$$
\frac{d}{dt} \int_{- \infin}^{+ \infin} |\Psi(x,t)|^2 dx = 0
$$

#### Momentum

For particle in state $\Psi$, the expectation value of $x$ is

$$
\langle x \rangle = \int_{- \infin}^{+ \infin} x |\Psi(x,t)|^2 dx
$$

$$
\frac{d \langle x \rangle}{dt} = \int x \frac{\partial}{\partial t} (\Psi^* \Psi) dx
$$

$$
\frac{d \langle x \rangle}{dt} = \int x (\frac{\partial \Psi^*}{\partial t} \Psi + \Psi^* \frac{\partial \Psi}{\partial t}) dx
$$

Use the schrodinger equation,

$$
\frac{\partial \Psi}{\partial t} = \frac{i \hbar}{2m} \frac{\partial^2 \Psi}{\partial x^2} - \frac{i}{\hbar} V \Psi
$$

The complex conjugate would yeild,

$$
\frac{\partial \Psi^*}{\partial t} = - \frac{i \hbar}{2m} \frac{\partial^2 \Psi^*}{\partial x^2} + \frac{i}{\hbar} V \Psi^*
$$

So,

$$
\frac{\partial}{\partial t} (\Psi^* \Psi) = [- \frac{i \hbar}{2m} \frac{\partial^2 \Psi^*}{\partial x^2} + \frac{i}{\hbar} V \Psi^*] \Psi + \Psi^* [\frac{i \hbar}{2m} \frac{\partial^2 \Psi}{\partial x^2} - \frac{i}{\hbar} V \Psi]
$$

$$
\frac{\partial}{\partial t} (\Psi^* \Psi) = \frac{i \hbar}{2m}(\Psi^* \frac{\partial^2 \Psi}{\partial x^2} - \frac{\partial^2 \Psi^*}{\partial x^2} \Psi)
$$


Thus,

$$
\frac{d \langle x \rangle}{dt} = \frac{i \hbar}{2m} \int x \frac{\partial}{\partial x} (\Psi^* \frac{\partial \Psi}{\partial x} - \frac{\partial \Psi^*}{\partial x} \Psi) dx
$$

Here we use intgration by parts. We need to evaluate

$$
\int x \frac{\partial F}{\partial x} dx
$$

$$
\int u dv = uv - \int v du
$$

We choose,

$$
u = x
$$

$$
dv = \frac{\partial F}{\partial x} dx
$$

$$
du = dx
$$

$$
v = F
$$

Therefore,

$$
\int^{+ \infin}_{- \infin} x \frac{\partial F}{\partial x}dx = [xF]^{+ \infin}_{- \infin} - \int^{+ \infin}_{- \infin} F dx
$$

For a physically acceptable wave function

$\Psi \rightarrow 0$ as $x \rightarrow \pm \infin$

so,

$$
[xF]^{+ \infin}_{- \infin} \rightarrow 0
$$

Therefore,

$$
\int x \frac{\partial F}{\partial x} dx = - \int F dx
$$

Thus,

$$
\frac{d \langle x \rangle}{dt} = \frac{i \hbar}{2m} \int  (\Psi^* \frac{\partial \Psi}{\partial x} - \frac{\partial \Psi^*}{\partial x} \Psi) dx
$$

$$
\frac{d \langle x \rangle}{dt} = \frac{i \hbar}{m} \int  \Psi^* \frac{\partial \Psi}{\partial x}  dx
$$


This is the quantum mechanical idea of velocity. 

$$
\langle v \rangle = \frac{d \langle x \rangle}{dt}
$$

Thus, momentum  is

$$
\langle p \rangle = m \frac{d \langle x \rangle}{dt} = - i \hbar \int \Psi^* \frac{\partial \Psi}{\partial x} dx
$$

In a more suggestive way,

$$
\langle x \rangle = \int \Psi^* [x] \Psi dx
$$

$$
\langle p \rangle = \int \Psi^* [-i \hbar \frac{\partial}{\partial x}] \Psi dx
$$

We say that $x$ represents position and operator $-i\hbar (\partial/\partial x)$ represents momentum.

All classical dynamical variables can be expressed in terms of position and momentum. Kinetic energy 

$$
T = \frac{1}{2} mv^2 = \frac{p^2}{2m}
$$

and angular momentum

$$
\mathbf{L} = \mathbf{r} \times m \mathbf{v} = \mathbf{r} \times \mathbf{p}
$$

For any quantity, $Q(x,p)$, we simply replace every $p$ by $-i\hbar (\partial/\partial x)$, insert the resulting operator between $\Psi^*$ and $\Psi$.

$$
\langle Q(x,p) \rangle = \int \Psi^* [Q(x, -i\hbar (\partial/\partial x))] \Psi dx 
$$

So for kinetic energy 

$$
\langle T \rangle = - \frac{\hbar^2}{2m} \int \Psi^* \frac{\partial^2 \Psi}{\partial x^2}  dx
$$

#### Uncertainty principle

$$
\sigma_x \sigma_p \ge \frac{\hbar}{2}
$$

