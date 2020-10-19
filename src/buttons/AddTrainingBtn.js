import React from "react";
import {
    Link,
  } from 'react-router-dom';
  import styles from '../app/scss/Buttons.module.scss';

const AddTrainingBtn = () => {

    return (
        <Link className={styles.button} to='/addtraining'>Zaplanuj Trening</Link>
    )
};

export default AddTrainingBtn;