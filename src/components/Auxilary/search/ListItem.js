import React from 'react';
import './ListItem.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { API_URL } from '../../../config/constants'

export default function ListItem({ name, style }) {
  return (
    <Link to={`/planet/${name}`}><li style={style}>{name}</li></Link>
  );
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.object,
};
