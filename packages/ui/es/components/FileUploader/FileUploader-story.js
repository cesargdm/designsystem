/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, array, boolean, number, select, text } from '@storybook/addon-knobs';
import settings from '../../globals/js/settings';
import FileUploader, { FileUploaderButton } from '.';
import FileUploaderSkeleton from './FileUploader.Skeleton';
import FileUploaderItem from './FileUploaderItem';
import FileUploaderDropContainer from './FileUploaderDropContainer';
var prefix = settings.prefix;
var buttonKinds = {
  'Primary (primary)': 'primary',
  'Secondary (secondary)': 'secondary',
  'Danger (danger)': 'danger',
  'Ghost (ghost)': 'ghost',
  'Danger Primary (danger--primary)': 'danger--primary',
  'Tertiary (tertiary)': 'tertiary'
};
var filenameStatuses = {
  'Edit (edit)': 'edit',
  'Complete (complete)': 'complete',
  'Uploading (uploading)': 'uploading'
};
var props = {
  fileUploaderButton: function fileUploaderButton() {
    var buttonKind = select('Button kind (buttonKind)', buttonKinds, '');
    return {
      className: 'bob',
      labelText: text('Label text (labelText)', 'Add files'),
      name: text('Form item name: (name)', ''),
      multiple: boolean('Supports multiple files (multiple)', true),
      disabled: boolean('Disabled (disabled)', false),
      buttonKind: buttonKind || 'primary',
      disableLabelChanges: boolean('Prevent the label from being replaced with file selected file (disableLabelChanges)', false),
      role: text('ARIA role of the button (role)', 'button'),
      tabIndex: number('Tab index (tabIndex)', 0),
      onChange: action('onChange')
    };
  },
  fileUploader: function fileUploader() {
    return {
      labelTitle: text('The label title (labelTitle)', 'Upload'),
      labelDescription: text('The label description (labelDescription)', 'only .jpg files at 500mb or less'),
      buttonLabel: text('The button label (buttonLabel)', 'Add files'),
      filenameStatus: select('Status for file name (filenameStatus)', filenameStatuses, 'edit'),
      accept: array('Accepted file extensions (accept)', ['.jpg', '.png'], ','),
      name: text('Form item name: (name)', ''),
      multiple: boolean('Supports multiple files (multiple)', true),
      iconDescription: text('Close button icon description (iconDescription)', 'Clear file')
    };
  },
  fileUploaderItem: function fileUploaderItem() {
    return {
      name: text('Filename (name)', 'README.md'),
      status: select('Status for file name (status)', filenameStatuses, 'edit'),
      iconDescription: text('Close button icon description (iconDescription)', 'Clear file'),
      onDelete: action('onDelete'),
      invalid: boolean('Invalid (invalid)', false),
      errorSubject: text('Error subject (errorSubject)', 'File size exceeds limit'),
      errorBody: text('Error body (errorBody)', '500kb max file size. Select a new file and try again.')
    };
  },
  fileUploaderDropContainer: function fileUploaderDropContainer() {
    return {
      labelText: text('Label text (labelText)', 'Drag and drop files here or click to upload'),
      name: text('Form item name (name)', ''),
      multiple: boolean('Supports multiple files (multiple)', true),
      accept: array('Accepted MIME types or file extensions (accept)', ['image/jpeg', 'image/png'], ','),
      disabled: boolean('Disabled (disabled)', false),
      role: text('ARIA role of the button (role)', ''),
      tabIndex: number('Tab index (tabIndex)', 0),
      onChange: action('onChange')
    };
  }
};
storiesOf('Components|FileUploader', module).addDecorator(withKnobs).add('FileUploaderButton', function () {
  return /*#__PURE__*/React.createElement(FileUploaderButton, props.fileUploaderButton());
}).add('FileUploader', function () {
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--file__container")
  }, /*#__PURE__*/React.createElement(FileUploader, props.fileUploader()));
}).add('FileUploaderItem', function () {
  return /*#__PURE__*/React.createElement(FileUploaderItem, props.fileUploaderItem());
}).add('FileUploaderDropContainer', function () {
  return /*#__PURE__*/React.createElement(FileUploaderDropContainer, props.fileUploaderDropContainer());
}).add('Drag and drop upload container example application', function () {
  return require('./stories/drop-container').default(props.fileUploaderDropContainer());
}).add('skeleton', function () {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '500px'
    }
  }, /*#__PURE__*/React.createElement(FileUploaderSkeleton, null));
});