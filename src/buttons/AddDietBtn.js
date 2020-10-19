import React from 'react';
import {
    Link,
  } from 'react-router-dom';
  import styles from '../app/scss/Buttons.module.scss';

const AddDietBtn = () => {
    return (
        <Link className={styles.button} to='/adddiet'>Zaplanuj Dietę</Link>
    )
};

export default AddDietBtn;