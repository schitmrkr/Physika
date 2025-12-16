## Circuits, Fields in Materials & Signal Theory

### Fields In Matter

In vaccum, Maxwell's equation results in an electromagnetic wave. Now we consider them in materials.

**Polarization**

Polarization is the seperation of electric charges in a material, creating tiny _dipoles_ that align with an applied electric field. _Dipoles_ are pairs of opposite charges separated by a small distance that partially oppose the applied field inside the material.

Dipole moment $\mathbf{p}$ is the product of the charge and the distance between the charges. It is a vector quantity that points from the negative charge to the positive charge.

The polarization vector $\mathbf{P}$ tells us how strogly the material is polarized and in which direction. If a small cube of the material has a net dipole moment $\mathbf{p}$ and volume $\Delta V$, then:

$$
\mathbf{P} = \frac{\mathbf{p}}{\Delta V}
$$

Polarization explains why dielectrics partially cancel the external electric field inside them.

**Bound Charge Density**

A dielectric material, when placed in an external electric field $\mathbf{E}$, becomes polarized. This means that the microscopic dipoles within the material align slightly with the field. The polarization vector $\mathbf{P}$ is defined:

$$
\mathbf{P} = dipole \space moment \space per \space unit \space volume
$$

Units: Coulombs per cubic meter ($C/m^3$)

Polarization causes bound charges, which are not free to move like conduction electrons. There are two types of bound charges: Volume bound charge density $\rho_b$ and Surface bound charge density $\sigma_b$

Consider a small volume element $dV$ inside the dielectric. If the polarization varies with the position, the dipoles inside the volume will not cancel completely, leaving a net _bound charge_ $\rho_b$.

The bound charge in the volume is related to the divergence of the polarization vector:

$$
\rho_b = -\nabla \cdot \mathbf{P}
$$

**Electric Displacement Field**

$$
\mathbf{D} = \varepsilon \mathbf{E}
$$

In matter, the electric field responds to all charges (free + bound):

$$
\nabla \cdot \mathbf{E} = \frac{\rho_{tot}}{\varepsilon_0}
$$

where, $\rho_{tot} = \rho_f + \rho_b$, i.e. the sum of free and bound charge densities.

From polarization theory,

$$
\rho_b = -\nabla \cdot \mathbf{P}
$$

Substitute into Gauss's law,

$$
\nabla \cdot \mathbf{E} = \frac{1}{\varepsilon_0} (\rho_f - \nabla \cdot \mathbf{P})
$$

$$
\nabla \cdot (\varepsilon_0 \mathbf{E} + \mathbf{P}) = \rho_f
$$

This motivates the definition electric displacement field $\mathbf{D}$:

$$
\mathbf{D} = \varepsilon_0 \mathbf{E} - \mathbf{P}
$$

Thus, Gauss's law in matter becomes:

$$
\nabla \cdot \mathbf{D} = \rho_f
$$

**Linear Dielectric Assumption**

For most ordinary dielectrics,

$$
\mathbf{P} = \chi_e \varepsilon_0 \mathbf{E}
$$

where, $\chi_e$ is the electric susceptibility.

Substitute into the definition of electric displacement field,

$$
\mathbf{D} = \varepsilon_0 \mathbf{E} - \chi_e \varepsilon_0 \mathbf{E}
$$

$$
\mathbf{D} = \varepsilon_0 (1 + \chi_e) \mathbf{E}
$$

where, $\varepsilon = \varepsilon_0 (1 + \chi_e)$ is the relative permittivity of the dielectric.

So, permitivity of the dielectric can be defined as:

$$
\varepsilon = \varepsilon_0 (1 + \chi_e)
$$

Thus,

$$
\mathbf{D} = \varepsilon \mathbf{E}
$$

A one line summary for different kinds of material.

- Conductors: charges move freely
- Insulators: charges shift slightly
- Semiconductors: charge flow is tunable
- Superconductors: charge flow with zero resistance

**Magnetization**

$$
\mathbf{B} = \mu (\mathbf{H} + \mathbf{M})
$$

In matter, magnetic fields are produced by all currents.

$$
\nabla \times \mathbf{B} = \mu_0 J_{tot}
$$

where, $J_{tot} = J_f + J_b$, i.e. the sum of free and bound current densities.

In magnetic materials, atoms behave like tiny current loop (due to electron motion and spin). The magnetization vector $\mathbf{M}$ is defined as:

$$
\mathbf{M} = magnetic \space dipole \space moment \space per \space unit \space volume
$$

This produces two types of bound currents: volume bound current density $\mathbf{J}_b$ and surface bound current density $\mathbf{K}_b$.

$$
\mathbf{J}_b = \nabla \times \mathbf{M}
$$

Substitute bound current into Ampere's law,

$$
\nabla \times \mathbf{B} = \mu_0 (\mathbf{J}_f + \nabla \times \mathbf{M})
$$

$$
\nabla \times (\frac{\mathbf{B}}{\mu_0} - \mathbf{M}) = \mathbf{J}_f
$$

This motivates the definition of magnetic field $\mathbf{H}$,

$$
\mathbf{H} = \frac{\mathbf{B}}{\mu_0} - \mathbf{M}
$$

With this definition ampere's law becomes:

$$
\nabla \times \mathbf{H} = \mathbf{J}_f
$$

From the definition of $\mathbf{H}$, we can write,

$$
\mathbf{B} = \mu_0 (\mathbf{H} + \mathbf{M})
$$

For linear isotropic materials,

$$
\mathbf{M} = \chi_m \mathbf{H}
$$

where, $\chi_m$ is the magnetic susceptibility. Thus, we can also write:

$$
\mathbf{B} = \mu_0 (1 + \chi_m) \mathbf{H}
$$

Defining permeability,

$$
\mu = \mu_0 (1 + \chi_m)
$$

So we obtain,

$$
\mathbf{B} = \mu \mathbf{H}
$$

**Material properties to understand**

1. Permittivity ($\varepsilon$) measures how easily a material polarizes in an electric field. Determines how much electric field is reduced inside the material. Appears in: $\mathbf{D} = \varepsilon \mathbf{E}$. Higher permittivity means more polarization and less electric field inside the material.

2. Permeability ($\mu$) measures how a material responds to magnetic fields. Determines how easily magnetic flux forms inside the material. Appears in: $\mathbf{B} = \mu \mathbf{H}$. Higher permeability means more magnetic flux and stronger magnetic field inside the material.

3. Conductivity ($\sigma$) measures how easily electric current flows through a material. Determines current density: $\mathbf{J} = \sigma \mathbf{E}$. Higher conductivity implies a conductor and lower conductivity implies an insulator.

4. Dielectric Constant ($\varepsilon_r$) is a dimensionless number comparing a material to vacuum. Tells how much the electric field is reduced inside the material.
   $$\varepsilon_r = \frac{\varepsilon}{\varepsilon_0}$$

5. Loss Tangent ($\tan \delta$) measures how much electromagnetic energy is lost as heat in a dielectric. Small values of $\tan \delta$ indicate low loss and high quality of the dielectric. Large values of $\tan \delta$ indicate high loss and low quality of the dielectric. It is defined as:

$$\tan \delta = \frac{\varepsilon''}{\varepsilon'}$$

### Circuit Theory - Field Level

**Ohm's law from EM fields**
