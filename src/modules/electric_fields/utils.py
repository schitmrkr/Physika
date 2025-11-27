import numpy as np

# Coulomb's constant
# Approximately 8.9875517873681764e9 N⋅m^2⋅C^−2
k: float = 9e9


def coulomb_force(q1: float, q2: float, r: float) -> float:
    return k * q1 * q2 / r**2


def electric_field(Q: float, r_vector: np.ndarray) -> np.ndarray:
    r_mag: float = np.linalg.norm(r_vector)
    # Avoid division by zero
    if r_mag == 0:
        return np.array([0.0, 0.0])
    return (k * Q / r_mag**3) * r_vector


def electric_potential(Q: float, r: float) -> float:
    if r == 0:
        raise ValueError("r cannot be zero.")
    return k * Q / r


def potential_energy(q: float, Q: float, r: float) -> float:
    V: float = electric_potential(Q, r)
    return q * V
