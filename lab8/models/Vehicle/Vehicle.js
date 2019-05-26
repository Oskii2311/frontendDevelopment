class Vehicle {
  constructor(id, brand, isStillProduced, enginePower, engineCapacity, color) {
    this.id = id;
    this.brand = brand;
    this.isStillProduced = isStillProduced;
    this.enginePower = enginePower;
    this.engineCapacity = engineCapacity;
    this.color = color;
  }

  static start() {
    console.log("wrrrr");
  }
}
export default Vehicle;
