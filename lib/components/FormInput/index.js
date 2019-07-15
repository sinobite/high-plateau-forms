"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _autobindDecorator = require("autobind-decorator");

var _consumerDecorator = _interopRequireDefault(require("../Form/consumerDecorator"));

var _types = require("../Form/types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

var formInput = function formInput(Input) {
  return function (inputProps) {
    var _class, _class2;

    var FormInput = (0, _consumerDecorator["default"])(_class = (_class2 =
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(FormInput, _React$Component);

      function FormInput(props) {
        var _this;

        _classCallCheck(this, FormInput);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(FormInput).call(this, props));
        var verification = FormInput.getVerification();
        props.context.registerInput(_objectSpread({
          verification: verification
        }, inputProps), Input);
        return _this;
      }

      _createClass(FormInput, [{
        key: "onChange",
        value: function onChange(inputValues) {
          var name = inputProps.name;
          this.props.context.updateValues(name, inputValues);
        }
      }, {
        key: "getProps",
        value: function getProps() {
          var values = this.props.context.values;
          var name = inputProps.name;
          return _objectSpread({}, values[name], {
            onChange: this.onChange
          });
        }
      }, {
        key: "render",
        value: function render() {
          var props = this.getProps();
          return React.createElement(Input, props);
        }
      }], [{
        key: "getVerification",
        value: function getVerification() {
          if (inputProps.verification) return inputProps.verification;
          if (Input.defaultProps && Input.defaultProps.verification) return Input.defaultProps.verification;
          return null;
        }
      }]);

      return FormInput;
    }(React.Component), (_applyDecoratedDescriptor(_class2.prototype, "onChange", [_autobindDecorator.boundMethod], Object.getOwnPropertyDescriptor(_class2.prototype, "onChange"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "getProps", [_autobindDecorator.boundMethod], Object.getOwnPropertyDescriptor(_class2.prototype, "getProps"), _class2.prototype)), _class2)) || _class;

    return React.createElement(FormInput, null);
  };
};

var _default = formInput;
exports["default"] = _default;