import Vehicle from "../Vehicle/Vehicle";

class Car extends Vehicle {
  constructor(
    model,
    body,
    isStillProduced,
    id,
    brand,
    yearOfProduction,
    enginePower,
    engineCapacity,
    color
  ) {
    super(id, brand, yearOfProduction, enginePower, engineCapacity, color);
    this.model = model;
    this.body = body;
    this.isStillProduced = isStillProduced;
  }

  static signal(direction) {
    return direction === "left"
      ? console.log("tik in left site")
      : console.log("tik in right site");
  }
}

export default Car;
