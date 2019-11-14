import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

function Button({
  style, label, type, className,
}) {
  return (
    <button style={style || {}} className={className || styles.submitButton} type={type || 'button'}>{label}</button>
  );
}

Button.propTypes = {
  style: PropTypes.object,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};


export default Button;
