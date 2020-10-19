import React from 'react';
import styles from './DietForm.module.scss'
import styleBtn from '../app/scss/Buttons.module.scss'
import styleInput from '../app/scss/Inputs.module.scss'

const DietForm = ({dietData,gender,type,lifestyle,body}) => {
    return(
        <form onSubmit={dietData}>
            <div className={styles.gender}>
               <h3>Wybierz płeć</h3>
                <input required onChange={e=>gender("male")} value="" type="radio" name="gender" />Mężczyzna
                <input onChange={e=>gender("female")} value="" type="radio" name="gender" />Kobieta
            </div>
            <div className={styles.basic_data}>
                <h3>Podaj dane</h3>
                <input className={styleInput.input_styles} required type="number" min="1" placeholder="Wiek"/>
                <input className={styleInput.input_styles} required type="number" min="1" placeholder="Masa ciała"/>
                <input className={styleInput.input_styles} required type="number" min="1" placeholder="Wzrost(cm)"/>
            </div>
            <div className={styles.lifestyle}>
                <h3>Określenie trybu życia</h3>
                <div><input required onChange={e=>lifestyle(1)} type="radio" value="" name="lifestyle"/>Leżący/siedzący tryb życia (brak aktywności fizycznej)</div>
                <div><input onChange={e=>lifestyle(1.2)} type="radio" value="" name="lifestyle"/>Praca siedząca (aktywność fizyczna na niskim poziomie)</div>
                <div><input required onChange={e=>lifestyle(1.4)} type="radio" value="" name="lifestyle"/>Praca niefizyczna (umiarkowana aktywność fizyczna)</div>
                <div><input onChange={e=>lifestyle(1.6)} type="radio" value="" name="lifestyle"/>Lekka praca fizyczna (aktywność fizyczna na średnim poziomie)</div>
                <div><input required onChange={e=>lifestyle(1.8)} type="radio" value="" name="lifestyle"/>Praca fizyczna (aktywność fizyczna na wysokim poziomie)</div>
                <div><input onChange={e=>lifestyle(2)} type="radio" value="" name="lifestyle"/>Ciężka praca fizyczna (aktywność fizyczna na bardzo wysokim poziomie)</div>
            </div>
            <div className={styles.shape}>
                <h3>Określenie sylwetki</h3>
                <input required onChange={e=>body("skinny")} type="radio" value="" name="body"/>Chudzielec
                <input onChange={e=>body("fat")} type="radio" value="" name="body"/>Pasibrzuch
                <input required onChange={e=>body("beefcake")} type="radio" value="" name="body"/>Beefcake
            </div>
            <div className={styles.plan}>
                <h3>Co planujesz?</h3>
                <input required onChange={e=>type("reduction")} type="radio" value="Redukcja masy ciała" name="type"/>Redukcja masy ciała
                <input onChange={e=>type("gain")} type="radio" value="Budowanie masy ciała" name="type"/>Budowanie masy ciała
            </div>
            <button className={styleBtn.button} type="submit">Wylicz dietę</button>
        </form>
    )
}

export default DietForm;