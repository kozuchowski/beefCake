import React from "react";
import styleBtn from '../scss/Buttons.module.scss';
import styleInput from '../scss/Inputs.module.scss';
import styles from './TrainingForm.module.scss';




const TrainingForm = ({trainingSubmit}) => {
   
    return (
        <div className={styles.trainingForm_container}>
            <h3>Sprawdź i wpisz swoje maksymalne udźwigi</h3>
            <form onSubmit={trainingSubmit}>
                <div className={styles.training_input_container}>
                    <label><input className={styleInput.input_styles} required min="1" type="number"  placeholder="Przysiad ze sztangą" /></label>
                    <label><input className={styleInput.input_styles} required min="1" type="number"  placeholder="Wyciskanie sztangi leżąc" /></label>
                    <label><input className={styleInput.input_styles} required min="1" type="number"  placeholder="Wiosłowanie sztangą" /></label>
                    <label><input className={styleInput.input_styles} required min="1" type="number"  placeholder="Martwy ciąg klasyczny" /></label>
                    <label><input className={styleInput.input_styles} required min="1" type="number"  placeholder="Wyciskanie żołnierskie" /></label>
                </div>
                <button className={styleBtn.button} type="submit">Pokaż trening</button>
            </form>

            
        </div>
    )
}


export default TrainingForm;