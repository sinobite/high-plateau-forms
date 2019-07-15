"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _TestInput = _interopRequireDefault(require("./TestInput"));

var _TestSubmit = _interopRequireDefault(require("./TestSubmit"));

var _Form = _interopRequireDefault(require("../components/Form"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_reactDom["default"].render(_react["default"].createElement("div", null, "its alive", _react["default"].createElement(_Form["default"], null, _react["default"].createElement(_TestInput["default"], {
  name: "testInput",
  value: "testvalue"
}), _react["default"].createElement(_TestInput["default"], {
  name: "testInput2",
  value: "testvalue2"
}), _react["default"].createElement(_TestSubmit["default"], null))), document.getElementById('app'));

module.hot.accept();