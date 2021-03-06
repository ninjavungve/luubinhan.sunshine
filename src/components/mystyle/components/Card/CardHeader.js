import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../../utils';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  color: PropTypes.string,
};

const defaultProps = {
  tag: 'div',
  color: ''
};

const CardHeader = (props) => {
  const {
    className,
    cssModule,
    color,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    color,
    'card-header'
  ), cssModule);

  return (
    <Tag {...attributes}
      className={classes}
    />
  );
};

CardHeader.propTypes = propTypes;
CardHeader.defaultProps = defaultProps;

export default CardHeader;
