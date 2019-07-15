"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function consumerDecorator(ChildComponent) {
  return function (props) {
    return _react["default"].createElement(_.FormContext.Consumer, null, function (context) {
      return _react["default"].createElement(ChildComponent, _extends({}, props, {
        context: context
      }));
    });
  };
}

var _default = consumerDecorator;
exports["default"] = _default;