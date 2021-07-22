var _excluded = ["align", "breakpoint", "legendText", "inline", "invalid", "children", "className", "inputSpacing", "message", "messageText"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;
/** A FormGroup element is used to group several controls as well as labels  within a web form. It uses  `<fieldset>` */

var FormGroup = function FormGroup(_ref) {
  var _classnames;

  var align = _ref.align,
      breakpoint = _ref.breakpoint,
      legendText = _ref.legendText,
      inline = _ref.inline,
      invalid = _ref.invalid,
      children = _ref.children,
      className = _ref.className,
      inputSpacing = _ref.inputSpacing,
      message = _ref.message,
      messageText = _ref.messageText,
      other = _objectWithoutProperties(_ref, _excluded);

  var classNamesLegend = classnames("".concat(prefix, "--form-group__title"), className);
  var classNamesFieldset = classnames("".concat(prefix, "--fieldset"), (_classnames = {}, _defineProperty(_classnames, "".concat(prefix, "--fieldset__inline"), inline), _defineProperty(_classnames, "".concat(prefix, "--fieldset__align-").concat(align), align), _defineProperty(_classnames, "".concat(prefix, "--fieldset__breakpoint-").concat(breakpoint), breakpoint), _defineProperty(_classnames, "".concat(prefix, "--fieldset__input-spacing-").concat(inputSpacing), inputSpacing), _classnames), className);
  return /*#__PURE__*/React.createElement("div", _extends({}, invalid && {
    'data-invalid': ''
  }, {
    className: classNamesFieldset
  }, other), /*#__PURE__*/React.createElement("legend", {
    className: classNamesLegend
  }, legendText), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--fieldset__content")
  }, children), message ? /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--form__requirements")
  }, messageText) : null);
};

FormGroup.propTypes = {
  /**
   * Specify the contained form elements
   */
  children: PropTypes.node,

  /**
   * Specify a breakpoint to show containing inputs vertically on mobile devices
   */
  breakpoint: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),

  /**
   * Specify a title for the `FormGroup`
   */
  legendText: PropTypes.string,

  /**
   * Specify an optional className to be applied to the wrapper node
   */
  className: PropTypes.string,

  /**
   * Specify whether the control is currently invalid.
   * Either a boolean in combination with `invalidText` or an `object`( eg. { message: "Message", …otherErrorProperties }) can be passed.
   */
  invalid: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),

  /**
   * Specify if a message is shown for the `fieldset`
   */
  message: PropTypes.bool,

  /**
   * Specify a message for the `fieldset`
   */
  messageText: PropTypes.string,

  /**
   * Specify a message for the `fieldset`
   */
  align: PropTypes.oneOf(['vertical', 'horizontal']),

  /**
   * Specify the spacing between horizontaly aligned inputs
   */
  inputSpacing: PropTypes.oneOf(['none', 'md', 'lg'])
};
FormGroup.defaultProps = {
  align: 'vertical',
  invalid: false,
  inputSpacing: 'lg',
  breakpoint: 'md',
  message: false,
  messageText: ''
};
export default FormGroup;