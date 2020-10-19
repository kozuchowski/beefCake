import React from 'react';
import AddTrainingBtn from '../buttons/AddTrainingBtn';
import AddDietBtn from '../buttons/AddDietBtn';
import styles from './Main.module.scss';
import basicStyles from '../app/scss/Basic.module.scss';
import logo from '../app/img/beefcake-logo.png'




const Main = () => {
    return (
        <div className={basicStyles.container}>
            <div className={styles.main_header}>
            <img alt="logo" src={logo}></img>
            <h1>BeefCake</h1>
            <div className={styles.text_container}>
                <p>Tired of being big fat ass? </p>
                <p>Too skinny to pick up a girl? </p>
                <p>Try Beefcake!</p>
            </div>
            </div>
            <div className={styles.btn_container}>
                <AddTrainingBtn />
                <AddDietBtn />
            </div>
        </div>
    )
}

export default Main;