"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _filterType = _interopRequireDefault(require("./constants/filterType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DB =
/*#__PURE__*/
function () {
  function DB() {
    var cars = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, DB);

    this.cars = cars;
  }

  _createClass(DB, [{
    key: "findCarBy",
    value: function findCarBy(type, value) {
      return this.cars.map(function (car) {
        return car[type];
      }).indexOf(value);
    }
  }, {
    key: "addCar",
    value: function addCar(car) {
      if (this.findCarBy('model', car.model) === -1) {
        this.cars.push(car);
        return console.log("added: ".concat(car.model));
      }

      return console.log('this model already exist in db');
    }
  }, {
    key: "deleteCar",
    value: function deleteCar(carModel) {
      var carIndex = this.findCarBy('model', carModel);
      this.cars.splice(carIndex, 1);
      return console.log("removed: ".concat(carModel));
    }
  }, {
    key: "updateCar",
    value: function updateCar(carModel, value, key) {
      var carIndex = this.findCarBy('model', carModel);
      this.cars[carIndex][key] = value;
      return console.log("updated: ".concat(carModel));
    }
  }, {
    key: "filterByKM",
    value: function filterByKM(type, value) {
      var filtered;

      if (type === _filterType["default"].over) {
        filtered = DB.overFilter(this.cars, value);
      } else if (type === _filterType["default"].below) {
        filtered = DB.belowFilter(this.cars, value);
      } else {
        console.log("Choose type ".concat(_filterType["default"].over, " or ").concat(_filterType["default"].below));
        filtered = null;
      }

      return filtered;
    }
  }, {
    key: "filterByIsProduction",
    value: function filterByIsProduction() {
      var filtered = this.cars.filter(function (car) {
        return car.wPrdukcji;
      });
      return filtered;
    }
  }, {
    key: "allCars",
    get: function get() {
      return this.cars;
    }
  }], [{
    key: "overFilter",
    value: function overFilter(array, value) {
      return array.filter(function (car) {
        return car.mocSilnika > value;
      });
    }
  }, {
    key: "belowFilter",
    value: function belowFilter(array, value) {
      return array.filter(function (car) {
        return car.mocSilnika < value;
      });
    }
  }]);

  return DB;
}();

var _default = DB;
exports["default"] = _default;