import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

export default class Tab extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    handleTabClick: PropTypes.func,
    handleTabAnchorFocus: PropTypes.func,
    handleTabKeyDown: PropTypes.func,
    href: PropTypes.string.isRequired,
    index: PropTypes.number,
    label: PropTypes.string,
    role: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    onKeyDown: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
    tabIndex: PropTypes.number.isRequired,
    /*
     * An optional parameter to allow overriding the list element rendering.
     **/
    renderListElement: PropTypes.node,
    /*
     * An optional parameter to allow overriding the anchor rendering.
     * Useful for using Tab along with react-router or other client
     * side router libraries.
     **/
    renderAnchor: PropTypes.func,
  };

  static defaultProps = {
    role: 'presentation',
    label: 'provide a label',
    tabIndex: 0,
    href: '#',
    selected: false,
    onClick: () => {},
    onKeyDown: () => {},
  };

  setTabFocus(evt) {
    const leftKey = 37;
    const rightKey = 39;
    if (evt.which === leftKey) {
      this.props.handleTabAnchorFocus(this.props.index - 1);
    } else if (evt.which === rightKey) {
      this.props.handleTabAnchorFocus(this.props.index + 1);
    } else {
      return;
    }
  }

  render() {
    const {
      className,
      disabled,
      handleTabClick,
      handleTabAnchorFocus, // eslint-disable-line
      handleTabKeyDown,
      href,
      index,
      label,
      selected,
      tabIndex,
      onClick,
      onKeyDown,
      renderAnchor,
      renderListElement,
    } = this.props;

    const classes = classNames(
      'wfp--tabs__nav-item',
      { 'wfp--tabs__nav-item--disabled': disabled },
      { 'wfp--tabs__nav-item--selected': selected },
      className
    );

    const selectedClasses = classNames(
      'wfp--tabs__nav-item',
      'wfp--tabs__nav-item--selected',
      className
    );

    const anchorProps = {
      className: 'wfp--tabs__nav-link',
      href: disabled ? undefined : href,
      label,
      role: 'tab',
      tabIndex,
      'aria-selected': selected,
      ref: e => {
        this.tabAnchor = e;
      },
    };

    //  {...other}
    const liProps = {
      tabIndex: -1,
      className: classes,
      onClick: evt => {
        if (!disabled) {
          handleTabClick(index, label, evt);
          onClick(evt);
        }
      },
      onKeyDown: evt => {
        if (!disabled) {
          this.setTabFocus(evt);
          handleTabKeyDown(index, label, evt);
          onKeyDown(evt);
        }
      },
      role: 'presentation',
      selected: selected,
    };

    return (
      <React.Fragment>
        {renderListElement ? (
          renderListElement({
            ...this.props,
            ...liProps,
            anchor: anchorProps,
            selectedClasses: selectedClasses,
          })
        ) : (
          <li {...liProps}>
            {renderAnchor ? (
              renderAnchor(anchorProps)
            ) : disabled ? (
              <span {...anchorProps}>{label}</span>
            ) : (
              <a {...anchorProps}>{label}</a>
            )}
          </li>
        )}
      </React.Fragment>
    );
  }
}
