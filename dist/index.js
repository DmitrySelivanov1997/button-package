"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("styles.css");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const packageJson = require("../package.json");

const Button = props => {
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "button",
    onClick: () => console.log("Button of version: ".concat(packageJson.version, " clicked"))
  }, "I'm blue button of version: ", packageJson.version, ". ", props);
};

var _default = Button;
exports.default = _default;