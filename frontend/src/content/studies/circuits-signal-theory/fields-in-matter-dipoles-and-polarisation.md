### Fields in matter

In vacuum, Maxwell's equations produce an electromagnetic wave. Inside a material, the story changes because charges are no longer free to be ignored.

### Polarisation

Polarisation is the separation of electric charge in a material, creating tiny dipoles that align with an applied field. A dipole is a pair of opposite charges separated by a small distance; the induced dipoles partially oppose the applied field inside the material.

The dipole moment $\mathbf{p}$ is the product of charge and separation. It is a vector pointing from the negative charge toward the positive charge.

For a collection of dipoles, the polarisation density is the dipole moment per unit volume:

$$
\mathbf{P} = \frac{1}{\Delta V}\sum_i \mathbf{p}_i.
$$

The bound charge density is then

$$
\rho_b = -\nabla\cdot\mathbf{P}.
$$

### Displacement field

It is convenient to separate free charge from bound charge. Define

$$
\mathbf{D} = \varepsilon_0\mathbf{E} + \mathbf{P}.
$$

In a linear, isotropic material, $\mathbf{P} = \varepsilon_0\chi_e\mathbf{E}$, so

$$
\mathbf{D} = \varepsilon_0(1+\chi_e)\mathbf{E} = \varepsilon\mathbf{E}.
$$

Then Gauss's law for free charge takes the compact form

$$
\nabla\cdot\mathbf{D} = \rho_f.
$$

> Next thread: connect the macroscopic constitutive relation back to the microscopic response of a lattice.
