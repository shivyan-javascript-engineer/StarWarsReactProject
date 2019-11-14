import React from 'react';
import styles from './loader.module.scss';

export default function Loader({ loading }) {
  return (
    <>
      {loading && <div className={styles.loader} />}
    </>
  );
}
