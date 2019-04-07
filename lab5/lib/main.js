"use strict";

var _DB = _interopRequireDefault(require("./DB"));

var _Car = _interopRequireDefault(require("./Car"));

var _filterType = _interopRequireDefault(require("./constants/filterType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var bmwm3 = new _Car["default"]('m3', 'coupe', true, 1, 'bmw', 2011, 420, 3999, 'czerwony');
var nissanz3 = new _Car["default"]('z3', 'coupe', false, 2, 'nissan', 2011, 270, 3999, 'niebieski');
var maluch = new _Car["default"]('126p', 'hatchback', false, 2, 'fiat', 1972, 23, 594, 'bialy');
var db = new _DB["default"]();
db.addCar(bmwm3);
db.addCar(maluch);
db.addCar(nissanz3);

var isPlural = function isPlural(array) {
  return array.length > 1 && true;
};

var findedSuperCar = db.filterByKM(_filterType["default"].over, 300);
var allCars = db.allCars;
var stillProducedCars = db.filterByIsProduction();
console.log("All Cars:\n".concat(allCars, "\n"));
console.log("Only super ".concat(isPlural(findedSuperCar) ? 'Cars' : 'Car', " filtered:\n").concat(findedSuperCar, "\n"));
console.log("Only still produced  ".concat(isPlural(stillProducedCars) ? 'Cars' : 'Car', ":\n").concat(stillProducedCars));