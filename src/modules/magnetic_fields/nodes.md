### Magnetic Fields

Produced by moving charges or current. Uses right hand rule. It's unit is Tesla(**_T_**).

#### Lorent's Force

A charge $q$ moving with velocity $v$ in a magnetic field $B$ experiences a force $F$ given by:

$$
F = q(v \times B)
$$

Force is perpendicular to both velocity and magnetic field. This is why charges spiral in magnetic fields.

#### Magnetic Force On Currents

Current $I$ in a magnetic field $B$ in a wire of length $L$ experiences a force $F$ given by:

$$
F = I(L \times B)
$$

### Magnetic Fields From Current

#### Biot-Savart Law

Magnetic field due to small current element $Idl$ at a distance $r$ is given by:

$$
\mathbf{B} = \frac{\mu_0}{4\pi} \frac{I \mathbf{dl} \times \mathbf{r}}{r^3}
$$

The intuitive understanding of this formula is that the magnetic field at a point due to a current element is proportional to the current, the length of the element, and the angle between the current and the position vector. The direction of the magnetic field is given by the right hand rule or perpendicular to the plane of the current element.

#### Ampere's Law (Integral Form)

Relates to current through a loop to the magnetic field around it.

$$
\oint_{C} \mathbf{B} \cdot d\mathbf{l} = \mu_0 I_{enc}
$$

Loop could be a circle, square or any shape. Left side is the line integral of magnetic field around the loop. Right side is the current through the loop.

#### Simple cases:

Straight wire:

$$
\mathbf{B} = \frac{\mu_0 I}{2\pi r} \hat{\phi}
$$

Circular loop (magnetic field at the center):

$$
\mathbf{B} = \frac{\mu_0 I}{2R} \hat{z}
$$

### Electromagnetic Induction

#### Faraday's Law

Changing magnetic flux through a loop creates an electromotive force (EMF) according to Faraday's law:

$$
\varepsilon = -\frac{d\Phi_{B}}{dt},\quad \Phi_{B} = \int \mathbf{B}\cdot d\mathbf{A}
$$

where:

- $\varepsilon$ is the induced EMF (voltage) around the loop (in volts).
- $\Phi_{B}$ is the magnetic flux through the surface bounded by the loop (in weber, Wb).
- $\mathbf{B}$ is the magnetic field vector (in tesla, T).
- $d\mathbf{A}$ is an infinitesimal area vector element pointing normal to the surface (its magnitude is the area element, direction given by the right‑hand rule).
- $t$ is time (in seconds); the derivative $d\Phi_{B}/dt$ represents the rate of change of magnetic flux.

#### Lenz's Law

The induced current always opposes the change in magnetic flux that caused it. Mathematically, this is expressed by the negative sign in the Faraday's law equation.  
Just as mass resists the change in velocity, magnetic flux resists the change in magnetic flux.
