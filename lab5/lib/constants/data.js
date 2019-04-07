"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Car = _interopRequireDefault(require("../Car"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var bmwm3 = new _Car["default"]('m3', 'coupe', true, 1, 'bmw', 2011, 420, 3999, 'czerwony');
var nissanz3 = new _Car["default"]('z3', 'coupe', false, 2, 'nissan', 2011, 270, 3999, 'niebieski');
var maluch = new _Car["default"]('126p', 'hatchback', false, 2, 'fiat', 1972, 23, 594, 'bialy');
var Cars = [bmwm3, nissanz3, maluch];
var _default = Cars;
exports["default"] = _default;