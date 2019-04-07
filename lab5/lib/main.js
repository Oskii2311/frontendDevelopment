"use strict";

var _DB = _interopRequireDefault(require("./DB"));

var _filterType = _interopRequireDefault(require("./constants/filterType"));

var _data = _interopRequireDefault(require("./constants/data"));

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(function init() {
  var db = new _DB["default"]();
  (0, _helpers.addCarsToDb)(db, _data["default"]);
  var findedSuperCar = db.filterByKM(_filterType["default"].over, 300);
  var allCars = db.allCars;
  var stillProducedCars = db.filterByIsProduction();
  (0, _helpers.showResults)(findedSuperCar, allCars, stillProducedCars);
})();