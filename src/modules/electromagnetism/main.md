### Electromagnetism

#### Maxwell's Equations

**Gauss's Law (Electric Fields)**

$$
\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_0}
$$

Here, $\rho$ is the charge density and $\epsilon_0$ is the permittivity of free space.

The physical interpretation of this equation is that the divergence of the electric field is proportional to the charge density. This means that regions with a high charge density will have a strong electric field, while regions with a low charge density will have a weak electric field.

**Gauss's Law (Magnetic Fields)**

$$
\nabla \cdot \vec{B} = 0
$$

The physical interpretation of this equation is that the divergence of the magnetic field is zero. This means that magnetic fields cannot have sources or sinks, and they must be continuous throughout space.

Magnetic field lines always form a closed loops. This is because magnetic fields are always conservative.

**Faraday's Law of Electromagnetic Induction**

$$
\nabla \times \vec{E} = - \frac{\partial \vec{B}}{dt}
$$

A changing magnetic field induces an electric field. This is the basis for electromagnetic induction.

The physical interpretation of this equation is that the curl of the electric field is proportional to the rate of change of the magnetic field. This means that regions with a rapidly changing magnetic field will have a strong electric field, and vice versa.

**Ampere-Maxwell Law**

$$
\nabla \times \vec{B} = \mu_0 \vec{J} + \mu_0 \epsilon_0 \frac{\partial \vec{E}}{dt}
$$

A current or changing electric field creates a magnetic field. This is the basis for electromagnetic radiation.

The physical interpretation of this equation is that the curl of the magnetic field is proportional to the current and the rate of change of the electric field.

The asymmetry between the electric and magnetic fields is a fundamental aspect of electromagnetism.

The first term $\mu_0 \vec{J}$ represents the contribution of electric current to the magnetic field. This term is the original contribution of Ampere's law.

The second term $\mu_0 \epsilon_0 \frac{\partial \vec{E}}{dt}$ is called Displacement Current Density ($\mathbf{J}_D$). This implies that changing electric fields can also create magnetic fields. The relavance of second term can be proven as follows:

Start with Ampere's law:

$$
\nabla \times \vec{B} = \mu_0 \vec{J}
$$

Take divergence of both sides:

$$
\nabla \cdot (\nabla \times \vec{B}) = 0 = \mu_0 \nabla \cdot \vec{J}
$$

Now, the charge conservation states that:

$$
\nabla \cdot \vec{J} = - \frac{\partial \rho}{\partial t}
$$

Now using time derivative of Gauss's Law:

$$
\frac{\partial \rho}{\partial t} = \epsilon_0 \frac{\partial}{\partial t} (\nabla \cdot \vec{E}) = \epsilon_0 \nabla \cdot (\frac{\partial \vec{E}}{\partial t})
$$

Compare time derivative of Gauss's Law with charge conservation:

$$
\nabla \cdot \vec{J} = - \epsilon_0 \nabla \cdot (\frac{\partial \vec{E}}{\partial t})
$$

$$
\nabla \cdot \vec{J} + \epsilon_0 \nabla \cdot (\frac{\partial \vec{E}}{\partial t}) = 0
$$

$$
\nabla \cdot (\vec{J} + \epsilon_0 \frac{\partial \vec{E}}{\partial t}) = 0
$$

Now, to satisfy the second step where divergence of right hand side must be zero, but the divergence of the right hand side is not zero. Thus, we need corrected Ampere Maxwell law:

$$
\nabla \times \vec{B} = \mu_0 \vec{J} + \mu_0 \epsilon_0 \frac{\partial \vec{E}}{\partial t}
$$

#### Deriving Wave Equation for Light

Maxwell's equations in free space(no charge):

$$
\nabla \times \vec{E} = - \frac{\partial \vec{B}}{\partial t}
$$

$$
\nabla \times \vec{B} = \mu_0 \epsilon_0 \frac{\partial \vec{E}}{\partial t}
$$

Now the wave equation for $\vec{E}$ can be derived as follows:

Take the curl of Faraday's law:

$$
\nabla \times (\nabla \times \vec{E}) = - \frac{\partial}{\partial t} (\nabla \times \vec{B})
$$

Substituting Ampere-Maxwell law:

$$
\nabla \times (\nabla \times \vec{E}) = - \frac{\partial}{\partial t} (\mu_0 \epsilon_0 \frac{\partial \vec{E}}{\partial t}) = - \mu_0 \epsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2}
$$

Apply vector identity $\nabla \times (\nabla \times \vec{E}) = \nabla^2 \vec{E} - \nabla (\nabla \cdot \vec{E})$ and since in free space divergence of electric field is 0 we get:

$$
\nabla^2 \vec{E} = \mu_0 \epsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2}
$$

Similarly wave equation of $\vec{B}$ is as follows:

$$
\nabla^2 \vec{B} = \mu_0 \epsilon_0 \frac{\partial^2 \vec{B}}{\partial t^2}
$$

Both fields propagate as waves at light speed.
