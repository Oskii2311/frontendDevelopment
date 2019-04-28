class Vehicle {
  constructor(id, marka, rokProdukcji, mocSilnika, pojemnoscSilnika, kolor) {
    this.id = id;
    this.marka = marka;
    this.rokProdukcji = rokProdukcji;
    this.mocSilnika = mocSilnika;
    this.pojemnoscSilnika = pojemnoscSilnika;
    this.kolor = kolor;
  }

  static start() {
    console.log("wrrrr");
  }
}
export default Vehicle;
