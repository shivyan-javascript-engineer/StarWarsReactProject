import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

function Button({ style, label, type }) {
  return (
    <button style={style} className={styles.submitButton} type={type || 'button'}>{label}</button>
  );
}

Button.propTypes = {
  style: PropTypes.object,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};


export default Button;
