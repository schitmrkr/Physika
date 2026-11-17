### Two particles system

$$
\Psi(\mathbf{r}_1, \mathbf{r}_2, t)
$$

It's time evolution is determined by 

$$
i \hbar \frac{d \Psi}{dt} = \hat{H} \Psi
$$

where,

$$
\hat{H} = - \frac{\hbar^2}{2 m_1} \nabla_1 - \frac{\hbar^2}{2 m_2} \nabla_2 + V(\mathbf{r}_1, \mathbf{r}_2, t)
$$

The statistical interpretation carries over in the obvious way

$$
\int | \Psi(\mathbf{r}_1, \mathbf{r}_2, t) |^2 d^3\mathbf{r}_1 d^3\mathbf{r}_2 = 1
$$

For time independent potentials, we obtain a complete set of solutions by seperation of variables:

$$
\Psi(\mathbf{r}_1, \mathbf{r}_2, t) = \psi(\mathbf{r}_1, \mathbf{r}_2) e^{-iEt/\hbar}
$$

where the spatial wave function $\psi$ satisfies time independent SE

$$
- \frac{\hbar^2}{2m_1} \nabla_1 \psi - \frac{\hbar^2}{2m_2} \nabla_2 \psi + V \psi = E \psi
$$

$E$ is the total energy of the system.


### Appendix

Expression for kinetic energy of a system,

$$
K = \frac{p^2}{2m}
$$

Now given that matter has wave nature,

$$
\psi(x, t) = A e^{i(kx - \omega t)}
$$

$$
\frac{\partial \psi}{\partial x} = ik \psi
$$

$$
-i\hbar \frac{\partial \psi}{\partial x} = \hbar k \psi
$$

Using de Broglie's relation

$$
p = \hbar k
$$

So, 

$$
-i\hbar \frac{\partial \psi}{\partial x} = p \psi
$$

Therefore,

$$
\hat{p} = -i\hbar \frac{\partial}{\partial x} 
$$

Similarly, using planck relation $E = \hbar \omega$,

we get,

$$
i\hbar \frac{\partial \psi}{\partial t} = \hbar \omega \psi
$$

$$
\hat{E} = i\hbar \frac{\partial }{\partial t} 
$$


### Bosons and Fermions

Suppose we have two non interacting particles, number 1 in the state $\psi_a(\mathbf{r})$ and number 2 in the state $\psi_b(\mathbf{r})$. In that case $\psi(\mathbf{r_1}, \mathbf{r_2})$ is the product

$$
\psi(\mathbf{r_1}, \mathbf{r_2}) = \psi_a(\mathbf{r_1}) \psi_b(\mathbf{r_2})
$$

This, however, assumes that we can tell the particles apart - otherwise it wouldn't make any sense to claim that number 1 is in state $\psi_a$ and number 2 is in state $\psi_b$; all we could say is that one of them is in the state $\psi_a$ and the other is in state $\psi_b$, but we wouldn’t know which is which.

Quantum mechanics neatly accommodates the existence of particles that are indistinguishable in principle: 

We simply construct a wave function that is noncommittal as to which particle is in which state. There are two ways to do it

$$
\psi_\pm(\mathbf{r_1}, \mathbf{r_2}) = A[\psi_a(\mathbf{r_1}) \psi_b(\mathbf{r_2}) \pm \psi_b(\mathbf{r_1}) \psi_a(\mathbf{r_2})] 
$$

The theory admits two kinds of identical particles: 

1. **Bosons** ($\psi_+$) Boson state are symmetric under interchange $\psi_+ (\mathbf{r_1}, \mathbf{r_2}) = \psi_+ (\mathbf{r_2}, \mathbf{r_1})$ 
2. **Fermions** ($\psi_-$): Fermion state are anti-symmetric under interchange $\psi_- (\mathbf{r_1}, \mathbf{r_2}) = - \psi_- (\mathbf{r_2}, \mathbf{r_1})$.

It follows that two identical fermions cannot occupy same state. If $\psi_a = \psi_b$, then

$$
\psi_-(\mathbf{r_1}, \mathbf{r_2}) = A[\psi_a(\mathbf{r_1}) \psi_b(\mathbf{r_2}) - \psi_b(\mathbf{r_1}) \psi_a(\mathbf{r_2})] = 0
$$

This is the famous Pauli's exclusion principle.

**Note:**

All particles with integer spin are bosons and all particles with half integer spin are fermions. This is taken as an axiom in non relativistic theory but can be proved in relativistic theory.

### Exchange Forces

Suppose one particle is in state $\psi_a(x)$ and the other state is in state $\psi_b(x)$, and these two states are orthogonal and normalized. If two particles are indistinguishable, and number 1 is in $\psi_a$, then the combined wave function is,

$$
\psi(x_1, x_2) = \psi_a(x_1) \psi_b(x_2)
$$

if they are identical bosons, the composite wave function is

$$
\psi_+(x_1, x_2) = \frac{1}{\sqrt{2}} (\psi_a(x_1) \psi_b(x_2) + \psi_a(x_2) \psi_b(x_1))
$$

and if they are identical fermions

$$
\psi_-(x_1, x_2) = \frac{1}{\sqrt{2}} (\psi_a(x_1) \psi_b(x_2) - \psi_a(x_2) \psi_b(x_1))
$$

The expectation value of the square of seperation between the two particles,

$$
\langle (x_1 - x_2)^2 \rangle = \langle x_1^2 \rangle + \langle x_2^2 \rangle - 2 \langle x_1 x_2 \rangle
$$

**Case 1: Distinguishable particles**

$$
\langle x_1^2 \rangle = \langle x^2 \rangle _a
$$

$$
\langle x_2^2 \rangle = \langle x^2 \rangle _b
$$

$$
\langle x_1 x_2 \rangle = \langle x \rangle _a \langle x \rangle _b
$$

Therefore,

$$
\langle (x_1 - x_2)^2 \rangle = \langle x^2 \rangle _a + \langle x^2 \rangle _b - \langle x \rangle _a \langle x \rangle _b
$$

**Case 2: Identical particles**

$$
\langle x_1^2 \rangle = \frac{1}{2} (\langle x^2 \rangle _a + \langle x^2 \rangle _b)
$$

$$
\langle x_2^2 \rangle = \frac{1}{2} (\langle x^2 \rangle _b + \langle x^2 \rangle _a)
$$

$$
\langle x_1 x_2 \rangle = \langle x \rangle _a \langle x \rangle _b \pm |\langle x \rangle _{ab}|^2
$$

Therefore,

$$
\langle (x_1 - x_2)^2 \rangle _\pm = \langle x^2 \rangle _a + \langle x^2 \rangle _b + \langle x \rangle _a \langle x \rangle _b \mp |\langle x \rangle _{ab}|^2
$$

### Spin

The complete state of an electron includes not only its position wave function, but also a spinor, describing the orientation of its spin

$$
\psi(\mathbf{r}) \chi
$$

When we put together two particle state, we get

$$
\psi(\mathbf{r_1}, \mathbf{r_2}) \chi(1, 2)
$$

Therefore,

$$
\psi(\mathbf{r_1}, \mathbf{r_2}) \chi(1, 2) = - \psi(\mathbf{r_2}, \mathbf{r_1}) \chi(2, 1)
$$

### Atoms

A neutral atom, of atomic number $Z$, consists of a heavy nucleus, with electric charge $Ze$, surrounded by $Z$ electrons. The hamiltonian for this system is 

$$
\hat{H} = \sum_{j=1}^Z \{ -\frac{\hbar^2}{2m} \nabla_j^2 - (\frac{1}{4 \pi \epsilon_0}) \frac{Z e^2}{r_j}  \} + \frac{1}{2} (\frac{1}{4 \pi \epsilon_0}) \sum_{j \ne k}^Z \frac{e^2}{|\mathbf{r_j} - \mathbf{r_k}|}
$$






