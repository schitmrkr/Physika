import numpy as np
import matplotlib.pyplot as plt
from utils import magnetic_field_around_a_straight_wire
from numpy.typing import NDArray
from typing import Tuple


def visualize_magnetic_field(
    I: int = 1.0,
    grid_size: int = 40,
    field_range: float = 1.0,
) -> None:
    x: NDArray[np.float64] = np.linspace(-field_range, field_range, grid_size)
    y: NDArray[np.float64] = np.linspace(-field_range, field_range, grid_size)
    X, Y = np.meshgrid(x, y)

    r: NDArray[np.float64] = np.sqrt(X**2 + Y**2)
    r[r == 0] = np.inf

    Bx, By = magnetic_field_around_a_straight_wire(r, X, Y, I)

    plt.figure(figsize=(6, 6))
    plt.quiver(x, y, Bx, By, color="r")
    plt.title("Magnetic field around a current-carrying wire")
    plt.xlabel("X")
    plt.ylabel("Y")
    plt.axis("equal")
    plt.show()


if __name__ == "__main__":
    visualize_magnetic_field()
