"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FormContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _bemReactClassname = require("bem-react-classname");

var _autobindDecorator = require("autobind-decorator");

var _types = require("./types");

var _class, _temp;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

var cn = (0, _bemReactClassname.createCn)('form');

var FormContext = _react["default"].createContext({});

exports.FormContext = FormContext;
var Form = (_class = (_temp =
/*#__PURE__*/
function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Form)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      values: {},
      hasError: false
    });

    return _this;
  }

  _createClass(Form, [{
    key: "registerInput",
    value: function registerInput(inputProps) {
      var name = inputProps.name,
          value = inputProps.value,
          error = inputProps.error,
          verification = inputProps.verification;
      var values = this.state.values;
      values[name] = {
        name: name,
        value: value,
        error: error,
        verification: verification
      };
      this.setState({
        values: _objectSpread({}, values)
      });
    }
  }, {
    key: "updateValues",
    value: function updateValues(name, inputValues) {
      var value = inputValues.value;
      var values = this.state.values;
      values[name] = _objectSpread({}, values[name], {
        value: value
      });
      this.setState({
        values: _objectSpread({}, values)
      });
    }
  }, {
    key: "setInputError",
    value: function setInputError(name, error) {
      var values = this.state.values;
      values[name] = _objectSpread({}, values[name], {
        error: error
      });
      this.setState({
        values: _objectSpread({}, values)
      });
    }
  }, {
    key: "verifyInput",
    value: function verifyInput(fieldName) {
      var values = this.state.values;
      var _values$fieldName = values[fieldName],
          value = _values$fieldName.value,
          verification = _values$fieldName.verification;

      if (!verification) {
        this.setInputError(fieldName, '');
        return false;
      }

      var verifyError = verification(value);

      if (verifyError) {
        this.setInputError(fieldName, verifyError.error);
        return true;
      } else {
        this.setInputError(fieldName, '');
        return false;
      }
    }
  }, {
    key: "validateForm",
    value: function validateForm() {
      var _this2 = this;

      var values = this.state.values;
      var errors = Object.keys(values).reduce(function (acc, fieldName) {
        var hasError = _this2.verifyInput(fieldName);

        if (hasError) acc.push(fieldName);
        return acc;
      }, []);
      this.setState({
        hasError: !!errors.length
      });
      return errors;
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("form", {
        className: cn()
      }, _react["default"].createElement(FormContext.Provider, {
        value: _objectSpread({}, this.state, {
          registerInput: this.registerInput,
          updateValues: this.updateValues,
          refreshInputValues: this.refreshInputValues,
          validateForm: this.validateForm
        })
      }, this.props.children));
    }
  }]);

  return Form;
}(_react.Component), _temp), (_applyDecoratedDescriptor(_class.prototype, "registerInput", [_autobindDecorator.boundMethod], Object.getOwnPropertyDescriptor(_class.prototype, "registerInput"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateValues", [_autobindDecorator.boundMethod], Object.getOwnPropertyDescriptor(_class.prototype, "updateValues"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setInputError", [_autobindDecorator.boundMethod], Object.getOwnPropertyDescriptor(_class.prototype, "setInputError"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "verifyInput", [_autobindDecorator.boundMethod], Object.getOwnPropertyDescriptor(_class.prototype, "verifyInput"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "validateForm", [_autobindDecorator.boundMethod], Object.getOwnPropertyDescriptor(_class.prototype, "validateForm"), _class.prototype)), _class);
var _default = Form;
exports["default"] = _default;