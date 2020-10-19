import React, { useState, useEffect } from 'react';
import styles from './Diet.module.scss';

const Diet = ({dietSubmit}) => {
    
    const [a,setA] = useState(0);
    const [b,setB] = useState(0);
    const [c,setC] = useState(0);

    const [kcal,setKcal] = useState(0);
    const [protein,setProtein] = useState(0);
    const [fat,setFat] = useState(0);
    const [carbs,setCarbs] = useState(0);
 

    useEffect(()=>{

        if(dietSubmit.gender==="male"){
            setA(66.5+(13.7*dietSubmit.weight)+(5*dietSubmit.height)-(6.8*dietSubmit.age))
        }else{
            setA(66.5+(9.6*dietSubmit.weight)+(1.85*dietSubmit.height)-(4.7*dietSubmit.age))
        };
        setB(dietSubmit.lifestyle);
        setC(a*b)
        if(dietSubmit.type==="gain"){
            if(dietSubmit.body==="skinny"){
                setKcal(1.2*c)
            }else if(dietSubmit.body==="fat"){
                setKcal(1.15*c)
            }else{
                setKcal(1.1*c)
            }
            setProtein(8*dietSubmit.weight);
            setFat(kcal/4);
            setCarbs(kcal-fat-protein)
        }else{
            if(dietSubmit.body==="skinny"){
                setKcal(0.9*c)
            }else if(dietSubmit.body==="fat"){
                setKcal(0.85*c)
            }else{
                setKcal(0.8*c)
            }
            setProtein(2.2*4*dietSubmit.weight);
            setFat(kcal/5);
            setCarbs(kcal-fat-protein);
        }

    },[dietSubmit,a,b,c,kcal,protein,fat,carbs])

    if(kcal>0){
        
    return (
        <>
            <div className={styles.diet_data}><h3>Dzienne zapotrzebowanie kaloryczne: </h3><p className={styles.diet_data_p}>{kcal.toFixed(2)}kcal</p></div>
            <div className={styles.diet_data}><h3>Dzienne zapotrzebowanie na białko: </h3><p className={styles.diet_data_p}>{(protein/4).toFixed(2)}g</p></div>
            <div className={styles.diet_data}><h3>Dzienne zapotzrebowanie na tłuszcz: </h3><p className={styles.diet_data_p}>{(fat/9).toFixed(2)}g</p></div>
            <div className={styles.diet_data}><h3>Dzienne zapotrzebowanie na węglowodany: </h3><p className={styles.diet_data_p}>{(carbs/4).toFixed(2)}g</p></div>
        </>
        )
    }else return null;
}

export default Diet;