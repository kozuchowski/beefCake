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
                    <input className={styleInput.input_styles} required min="1" type="number"  placeholder="Przysiad ze sztangą" />
                    <input className={styleInput.input_styles} required min="1" type="number"  placeholder="Wyciskanie sztangi leżąc" />
                    <input className={styleInput.input_styles} required min="1" type="number"  placeholder="Wiosłowanie sztangą" />
                    <input className={styleInput.input_styles} required min="1" type="number"  placeholder="Martwy ciąg klasyczny" />
                    <input className={styleInput.input_styles} required min="1" type="number"  placeholder="Wyciskanie żołnierskie" />
                </div>
                <button className={styleBtn.button} type="submit">Pokaż trening</button>
            </form>

            
        </div>
    )
}


export default TrainingForm;