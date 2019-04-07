"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showResults = exports.addCarsToDb = void 0;

var isPlural = function isPlural(array) {
  return array.length > 1 && true;
};

var addCarsToDb = function addCarsToDb(db, carsData) {
  carsData.forEach(function (car) {
    db.addCar(car);
  });
};

exports.addCarsToDb = addCarsToDb;

var showResults = function showResults(allCars, stillProducedCars, findedSuperCar) {
  console.log("All Cars: \n", allCars);
  console.log("Only super ".concat(isPlural(findedSuperCar) ? 'Cars' : 'Car', " filtered: \n"), findedSuperCar);
  console.log("Only still produced  ".concat(isPlural(stillProducedCars) ? 'Cars' : 'Car', ": \n"), stillProducedCars);
};

exports.showResults = showResults;