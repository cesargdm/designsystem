/**
 * Copyright IBM Corp. 2016, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Code generated by @carbon/icon-build-helpers. DO NOT EDIT.
 */
'use strict';

var iconPropTypes = require('./iconPropTypes-ca0c5320.js');
var React = require('react');
require('@carbon/icon-helpers');
require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _path;

var _excluded = ["children", "size"];
var WfpHumSecurityPos = /*#__PURE__*/React__default['default'].forwardRef(function WfpHumSecurityPos(_ref, ref) {
  var children = _ref.children,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 16 : _ref$size,
      rest = iconPropTypes._objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React__default['default'].createElement(iconPropTypes.Icon, iconPropTypes._objectSpread2({
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 27 34",
    fill: "currentColor"
  }, rest), _path || (_path = /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M25.4,2.6 L13.4,0.2 C13.3,0.2 13.2,0.2 13.1,0.2 L1.1,2.6 C0.7,2.7 0.5,3 0.5,3.4 L0.5,19.6 C0.5,27.5 6.3,33.9 13.3,33.9 C20.3,33.9 26.1,27.5 26.1,19.6 L26.1,3.4 C26,3 25.7,2.7 25.4,2.6 Z M18.6,17.3 L18,17.8 L13.5,22.5 C13.3,22.7 13.1,22.7 12.9,22.5 L8.4,17.8 L7.8,17.2 C6.4,15.9 6.4,13.6 7.8,12.3 C8.4,11.7 9.3,11.4 10.1,11.4 C11,11.4 11.8,11.7 12.5,12.4 L13.2,13 L13.9,12.4 C14.6,11.8 15.4,11.4 16.3,11.4 C17.1,11.4 18,11.7 18.6,12.3 C20,13.7 19.9,15.9 18.6,17.3 Z"
  })), children);
});
WfpHumSecurityPos.propTypes = iconPropTypes.iconPropTypes;

module.exports = WfpHumSecurityPos;