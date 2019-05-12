import db from "../../db/db";
import checkData from "../../services/checkData";
import baseFilter from "../../services/filters";

class CarsController {
  getAllCars(req, res) {
    return res.status(200).send({
      cars: db
    });
  }

  createCar(req, res) {
    const error = checkData(req);
    const { body } = req;

    if (!!error) {
      return res.status(404).send(error);
    }
    const car = new Car(
      body.model,
      body.nadwozie,
      body.wProdukcji,
      db.length + 1,
      body.marka,
      body.rokProdukcji,
      body.mocSilnika,
      body.pojemnoscSilnika,
      body.kolor
    );
    db.push(car);
    return res.status(201).send({
      success: "true",
      message: "car added successfully",
      car
    });
  }

  getCar(req, res) {
    const id = parseInt(req.params.id, 10);
    db.map(car => {
      if (car.id === id) {
        return res.status(200).send({
          success: "true",
          message: "car retrieved successfully",
          car
        });
      }
    });
    return res.status(404).send({
      success: "false",
      message: "car does not exist"
    });
  }

  filterCar(req, res) {
    let filteredCar;

    filteredCar = db.filter(baseFilter(req.query));
    return res.status(201).send({
      filteredCar
    });
  }

  deleteCar(req, res) {
    const id = parseInt(req.params.id, 10);

    db.map((car, index) => {
      if (car.id === id) {
        db.splice(index, 1);
        return res.status(200).send({
          success: "true",
          message: "Car deleted successfuly"
        });
      }
    });

    return res.status(404).send({
      success: "false",
      message: "car not found"
    });
  }

  updateCar(req, res) {
    const id = parseInt(req.params.id, 10);
    let carFound;
    let itemIndex;
    db.map((car, index) => {
      if (car.id === id) {
        carFound = car;
        itemIndex = index;
      }
    });

    if (!carFound) {
      return res.status(404).send({
        success: "false",
        message: "car not found"
      });
    }
    const error = checkData(req);
    if (!!error) {
      return res.status(404).send(error);
    }

    const updatedCar = new Car(
      req.body.model || carFound.model,
      req.body.nadwozie || carFound.nadwozie,
      req.body.wProdukcji || carFound.wProdukcji,
      carFound.id,
      req.body.marka || carFound.marka,
      req.body.rokProdukcji || carFound.rokProdukcji,
      req.body.mocSilnika || carFound.mocSilnika,
      req.body.pojemnoscSilnika || carFound.pojemnoscSilnika,
      req.body.kolor || carFound.kolor
    );

    db.splice(itemIndex, 1, updatedCar);

    return res.status(201).send({
      success: "true",
      message: "car added successfully",
      updatedCar
    });
  }
}

const carsController = new CarsController();

export default carsController;
