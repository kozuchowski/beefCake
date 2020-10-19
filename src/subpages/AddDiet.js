import React, { useState } from 'react';
import DietForm from '../dietComponents/DietForm';
import Diet from '../dietComponents/Diet';
import style from './AddDiet.module.scss'
import logo from '../app/img/beefcake-logo.png'
import {Link,
} from 'react-router-dom';

const AddDiet = () => {

    const [dietSubmit,setDietSubmit] = useState({
        gender:"",
        age:"",
        weight:"",
        height:"",
        type:"",
        lifestyle:"",
        body:""

    });
    
    const [gender,setGender] = useState('')
    const [type,setType] = useState('')
    const [lifestyle,setLifestyle] = useState('');
    const [body,setBody] = useState ('');
    
    const dietData = (e) => {
        e.preventDefault();
        
        setDietSubmit({
            gender:gender,
            age:e.target[2].value ,
            weight:e.target[3].value ,
            height:e.target[4].value ,
            type:type,
            lifestyle:lifestyle,
            body:body

        })
        e.target.reset();
    }
    
    return (
        <div className={style.diet_container}>
            <div className={style.logo_container}>
                <Link to="/"><img className={style.small_logo} src={logo}></img></Link>
                <h3>Zaplanuj swoją dietę</h3>
            </div>
            <DietForm dietData={dietData} gender={setGender} type={setType} lifestyle={setLifestyle} body={setBody}/>
            <Diet dietSubmit={dietSubmit}/>
        </div>
    )
}



export default AddDiet;


