import numpy as np
from typing import Tuple
from numpy.typing import NDArray
from common.constants import mu0


def magnetic_field_around_a_straight_wire(
    r: NDArray[np.float64],
    x: NDArray[np.float64],
    y: NDArray[np.float64],
    I: float = 1.0,
) -> Tuple[NDArray[np.float64], NDArray[np.float64]]:
    B0 = mu0 * I / (2 * np.pi * r)
    Bx = B0 * (-y / r)
    By = B0 * (x / r)
    return Bx, By
