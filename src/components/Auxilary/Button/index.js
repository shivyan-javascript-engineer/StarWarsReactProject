import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

function Button({
  style, label, type, className, loading,
}) {
  return (
    <button style={style || {}} className={className || styles.submitButton} type={type}>{loading ? <div className={styles.miniLoader} /> : label}</button>
  );
}

Button.propTypes = {
  style: PropTypes.instanceOf(Object),
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
  type: 'button',
  style: null,
};

export default Button;
