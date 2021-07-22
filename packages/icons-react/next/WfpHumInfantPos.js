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
var WfpHumInfantPos = /*#__PURE__*/React__default['default'].forwardRef(function WfpHumInfantPos(_ref, ref) {
  var children = _ref.children,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 16 : _ref$size,
      rest = iconPropTypes._objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React__default['default'].createElement(iconPropTypes.Icon, iconPropTypes._objectSpread2({
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 42",
    fill: "currentColor"
  }, rest), _path || (_path = /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12.4,0.3 C14.9,0.3 17,2.4 17,4.9 C17,7.4 14.9,9.5 12.4,9.5 C9.9,9.5 7.8,7.4 7.8,4.9 C7.8,2.3 9.8,0.3 12.4,0.3 Z M9.8,41.2 C9.1,42 7.9,42 7.1,41.4 C4.7,39.7 3.2,36.9 3.2,33.9 C3.2,30.8 4.7,28.1 7,26.5 C7.1,26.4 7.2,26.4 7.3,26.5 L9.9,29.1 C10,29.2 10,29.4 9.8,29.5 C8.3,30.4 7.2,32 7.2,33.9 C7.2,35.6 8,37.1 9.4,38.1 C10.5,38.8 10.6,40.3 9.8,41.2 Z M17.6,41.5 C17.2,41.7 16.8,41.9 16.4,41.9 C15.8,41.9 15.1,41.6 14.7,41 C14.1,40.1 14.3,38.8 15.2,38.2 C16.6,37.3 17.4,35.7 17.4,34 C17.4,32.1 16.4,30.5 14.8,29.6 C14.7,29.5 14.6,29.3 14.7,29.2 L17.3,26.6 C17.4,26.5 17.5,26.5 17.6,26.6 C19.9,28.3 21.4,31 21.4,34 C21.6,37 20.1,39.8 17.6,41.5 Z M22.6,24.8 C21.5,24.8 20.6,23.9 20.6,22.8 C20.6,20.4 19.3,18.5 17.5,17.2 L17.5,23.8 L7.3,23.8 L7.3,17.2 C5.5,18.4 4.2,20.3 4.2,22.8 C4.2,23.9 3.3,24.8 2.2,24.8 C1.1,24.8 0.2,23.9 0.2,22.8 C0.2,16.6 5.7,11.6 12.4,11.6 C19.1,11.6 24.6,16.6 24.6,22.8 C24.6,23.9 23.7,24.8 22.6,24.8 Z"
  })), children);
});
WfpHumInfantPos.propTypes = iconPropTypes.iconPropTypes;

module.exports = WfpHumInfantPos;