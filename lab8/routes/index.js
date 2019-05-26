import express from "express";
import CarController from "../controllers/cars/cars";

const router = express.Router();

router.get("/api/v1/cars", CarController.getAllCars);
router.get("/api/v1/car/:id", CarController.getCar);
router.post("/api/v1/car", CarController.createCar);
router.put("/api/v1/car/:id", CarController.updateCar);
router.delete("/api/v1/car/:id", CarController.deleteCar);
router.get("/api/v1/cars/filter", CarController.filterCar);

export default router;
