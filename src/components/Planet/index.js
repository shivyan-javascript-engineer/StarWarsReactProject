import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { API_URL } from '../../config/constants';
import Loader from '../Auxilary/Loader';
import styles from './planet.module.scss';

export default function Planet(props) {
  const [planetInfo, setPlanetInfo] = useState('');

  useEffect(() => {
    Axios.get(`${API_URL}/private/planets/${props.match.params.name}/item`)
      .then((response) => {
        console.log(response.data.data);
        setPlanetInfo(response.data.data);
      })
      .catch((err) => {
        console.log(err, 'planet Error');
      });
  }, []);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const renderPlanetInfo = (planetDetails) => {
    const keys = Object.keys(planetDetails);

    return keys.map((planet) => (
      <div className={styles.planetInfoList} key={planetDetails[planet]}>
        <p>
          {capitalizeFirstLetter(planet)}
          {' '}
:
          {' '}
          {planetDetails[planet]}
        </p>
      </div>
    ));
  };
  
  

  return (
    <div className={styles.planetsInfoContainer}>
      <div className={styles.planetDetailsContianer}>
        {planetInfo ? (
          renderPlanetInfo(planetInfo)) : <Loader loading />}
      </div>

    </div>
  );
}
