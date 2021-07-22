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

var _g;

var _excluded = ["children", "size"];
var WfpHumWarehousePos = /*#__PURE__*/React__default['default'].forwardRef(function WfpHumWarehousePos(_ref, ref) {
  var children = _ref.children,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 16 : _ref$size,
      rest = iconPropTypes._objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React__default['default'].createElement(iconPropTypes.Icon, iconPropTypes._objectSpread2({
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 34 36",
    fill: "currentColor"
  }, rest), _g || (_g = /*#__PURE__*/React__default['default'].createElement("g", {
    "fill-rule": "evenodd"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    "fill-rule": "nonzero",
    d: "M33.2,8.9 L18.7,1.3 C17.9,0.7 16.8,0.7 16.1,1.3 L1.9,8.6 L1.6,8.8 C1.1,9.2 0.9,9.8 0.9,10.5 L0.9,35.1 L34,35.1 L34,10.6 C34,9.9 33.7,9.3 33.2,8.9 Z M31.2,32.4 L3.6,32.4 L3.6,10.9 L17.4,3.8 L31.2,10.9 L31.2,32.4 Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6.2,12.4 L6.2,13.1 L6.2,28.2 L6.2,28.9 C6.2,29.4 6.6,29.8 7.1,29.8 L27.6,29.8 C28.1,29.8 28.5,29.4 28.5,28.9 L28.5,28.2 L28.5,13.1 L28.5,12.4 C28.5,11.9 28.1,11.5 27.6,11.5 L7.1,11.5 C6.6,11.5 6.2,11.9 6.2,12.4 Z"
  }))), children);
});
WfpHumWarehousePos.propTypes = iconPropTypes.iconPropTypes;

module.exports = WfpHumWarehousePos;