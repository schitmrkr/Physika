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

Proof:

$$
P(\vec{r}) = \frac{electric \space dipole \space moment}{unit \space volume}
$$

At a microscopic level, matter is made up of bound charges, positive and negative charges are slighly displaced and each tiny region behaves like a dipole.

Take a small volume $dV$ inside the dielectric. If the polarization varies with the position, the dipoles inside the volume will not cancel completely, leaving a net _bound charge_ $\rho_b$. If it is uniform then the dipoles cancel each other out and the net bound charge is zero.

Consider all dipoles inside $dV$. Each dipole contributes charge at its ends. What matters is how many dipole moments flow out of the volume. This is exactly the divergence of $\mathbf{P}$.

Mathematically, the net bound charge inside $dV$ is given by:

$$
Q_b = - \oint_{dV} \mathbf{P} \cdot da
$$

Minus sign indicates that if dipoles point outwards, negative bound charge is left inside.

Use Gauss's divergence theorem:

$$
Q_b = - \oint_{dV} \mathbf{P} \cdot da = - \int_{dV} \nabla \cdot \mathbf{P} \space dV
$$

But by definition:

$$
Q_b = \int_{dV} \rho_b \space dV
$$

So,

$$
\rho_b = -\nabla \cdot \mathbf{P}
$$

**Electric Displacement Field**

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

Circuit law: $V = IR$ or $\mathbf{J} = \sigma \mathbf{E}$ in differnetial form.

Start with current density:

$$
\mathbf{J} = \sigma \mathbf{E}
$$

where, $\sigma$ is the conductivity of the material, $\mathbf{E}$ is the electric field and $\mathbf{J}$ is the current density (current per unit area).

Now integrate over conductor's cross-sectional area $A$ to obtain the total current $I$:

$$
I = \int \mathbf{J} \cdot d\mathbf{A} = \sigma \int \mathbf{E} \cdot d\mathbf{A} = \frac{\sigma \mathbf{A}}{l} V
$$

Here the key assumption is of a uniform straight conductor with length $l$ and cross-sectional area $A$. Electric field $\mathbf{E}$ is uniform and parallel to the conductor. Area vector $d\mathbf{A}$ is aligned with $\mathbf{E}$. Thus,

$$
 \mathbf{E} \cdot d\mathbf{A} = E \space dA
$$

so,

$$
\int \mathbf{E} \cdot d\mathbf{A} = \int E \space dA = EA
$$

Relate electric field to voltage:

$$
V = \int \mathbf{E} \cdot d\mathbf{l}
$$

For a uniform field along length $\mathbf{l}$,

$$
V = El
$$

$$
E = \frac{V}{l}
$$

Therefore, resistance is given by:

$$
R = \frac{l}{\sigma A}
$$

**Capacitor's from Gauss's law**

Circuit law: $Q = CV$.

Consider a parallel plate capacitor:

$$
Electric \space field \space between \space plates: E = \frac{V}{d}
$$

where, $V$ is the potential difference between the plates and $d$ is the distance between the plates.

Here the key assumption is of a uniform electric field $\mathbf{E}$ between the plates. The plate area is $A$, plate seperation $d$, filled with dielectric permittivity $\varepsilon$.

For parallel-plate capacitor, the electric field between the plates is uniform and perpendicular to the plates.

Using Gauss's law in matter:

$$
\oint \mathbf{D} \cdot d\mathbf{A} = Q_{free}
$$

where,

$$
\mathbf{D} = \varepsilon \mathbf{E}
$$

For one plate,

$$
D A = Q_{free}
$$

So, the free surface charge density on the plate is:

$$
\sigma_{free} = \frac{Q_{free}}{A} = \varepsilon E
$$

Total charge:

$$
Q = \sigma A = \varepsilon E A = \varepsilon \frac{V}{d} A
$$

Therefore, capacitance is given by:

$$
C = \frac{Q}{V} = \frac{\varepsilon A}{d}
$$

**Inductors from Ampere's law**

Circuit law: $V = L \frac{dI}{dt}$ or $LI = \Phi_B$

When current $I$ flows in a coil, it produces a magnetic field $\mathbf{B}$.

For a simple solenoid,

$$
B = \mu \frac{NI}{l}
$$

where, $\mu$ is the permeability of the material, $N$ is the number of turns, $I$ is the current and $l$ is the length of the coil. The key idea:

$$
B \propto I
$$

Magnetic field creates magnetic flux (Flux is a measure of how much of something passes through a surface). Magnetic flux through one turn:

$$
\Phi_B = \int \mathbf{B} \cdot d\mathbf{A} = BA
$$

For N turns,

$$
\Phi_B = NBA
$$

Substitute B:

$$
\Phi_B = N (\mu \frac{NI}{l}) A  = \mu \frac{N^2A}{l} I
$$

Since, flux is directly proportional to current, we define inductance $L$ as:

$$
L = \frac{\Phi_B}{I}
$$

So,

$$
\Phi_B = LI
$$

This is not a law yet, it is a definition.

Change in current creates change in flux. If current varies with time:

$$
\Phi_B(t) = LI(t)
$$

Take time derivate:

$$
\frac{d\Phi_B(t)}{dt} = L\frac{dI(t)}{dt}
$$

Change in flux produces voltage (Faraday's law):

$$
V = -\frac{d\Phi_B(t)}{dt}
$$

Ignoring sign (depends on chosen polarity):

$$
V = L \frac{dI(t)}{dt}
$$

### RLC Circuits & Resonance

A circuit with resistor, capacitor and inductor is called an RLC circuit and has a natural oscillation:

$$
\omega_0 = \frac{1}{\sqrt{LC}}
$$

A circuit has natural oscillation if you distrub it once, it keeps exchanging energy on its own. No external power is needed (ideal case).

Resistors only remove energy, they do not contribute to oscillation. Capacitors and Inductors keeps energy moving back and forth.

Capacitors store energy in electric field. Inductors store energy in magnetic field.

$$
U_C = \frac{1}{2}CV^2
$$

$$
U_L = \frac{1}{2}LI^2
$$

For an ideal LC circuits (no resistors), using Kirchoff's voltage law, we get:

$$
V_L + V_C = 0
$$

Substitute $V_L$ and $V_C$:

$$
L \frac{dI(t)}{dt} + \frac{Q}{C}  = 0
$$

$$
\frac{d^2Q(t)}{dt^2} + \frac{Q(t)}{LC} = 0
$$

This is exactly the same equation as mass-spring system, pendulum or any harmonic oscillator. The natural frequency is given by:

$$
\omega_0 = \frac{1}{\sqrt{LC}}
$$

Add resistance and you get damping factor.

### Transmission Lines

Impedance matching is a key concept in transmission lines. It is the process of matching the impedance of a source to the impedance of a load to minimize reflection and maximize power transfer.

Project: Build a CMOS inverter and fully analyze its delay, capacitance, and power.
