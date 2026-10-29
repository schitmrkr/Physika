### The Schrödinger equation

For a non-relativistic particle,

$$
E = \frac{p^2}{2m} + V.
$$

Use the de Broglie relations

$$
E = \hbar\omega, \qquad p = \hbar k.
$$

Consider a plane wave

$$
\Psi(x,t) = A e^{i(kx-\omega t)}.
$$

Differentiating with respect to time pulls down a factor of $-i\omega$:

$$
\frac{\partial\Psi}{\partial t} = -i\omega\Psi.
$$

Differentiating twice with respect to position pulls down $-k^2$:

$$
\frac{\partial^2\Psi}{\partial x^2} = -k^2\Psi.
$$

Now combine the dispersion relation with these derivatives:

$$
i\hbar\frac{\partial\Psi}{\partial t}
= \hbar\omega\Psi
= \left(\frac{\hbar^2k^2}{2m} + V\right)\Psi.
$$

Since $\hbar^2k^2\Psi = -\hbar^2\partial_x^2\Psi$,

$$
i\hbar\frac{\partial\Psi}{\partial t}
= -\frac{\hbar^2}{2m}\frac{\partial^2\Psi}{\partial x^2} + V\Psi.
$$

### What the derivation does and does not prove

This is a consistency argument for a free plane wave, not a derivation of quantum mechanics from classical mechanics. The equation earns its status because its spectrum, interference behaviour, and symmetry properties match experiment.

> The wave function is not a classical vibration. It is an amplitude whose modulus squared supplies a probability density.
