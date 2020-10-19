import React, { useState, useEffect } from "react";
import TrainingForm from "../app/trainingComponents/TrainingForm";
import Training from "../app/trainingComponents/Training";
import basicStyles from '../app/scss/Basic.module.scss'
import style from './AddDiet.module.scss';
import logo from '../app/img/beefcake-logo.png'
import {
    Link,
  } from 'react-router-dom';



const AddTraining = () => {
    const [trainingData,setTrainingData] = useState({
        squats:0,
        benchpress:0,
        rowing:0,
        deadlift:0,
        militarypress:0,

    })

    const [squats,setSquats] = useState({});
    const [benchPress,setBenchPress] = useState({});
    const [rowing,setRowing] = useState({});
    const [deadLift,setDeadLift] = useState({});
    const [militaryPress,setMilitaryPress] = useState({})

    const trainingSubmit = (e) => {
        e.preventDefault();

        setTrainingData({
            squats:e.target[0].value,
            benchpress:e.target[1].value,
            rowing:e.target[2].value,
            deadlift:e.target[3].value,
            militarypress:e.target[4].value
        })
        e.target.reset();

    }

    useEffect(()=>{
        setSquats({ 
            week1: [
               0.4*trainingData.squats,
               0.4*trainingData.squats+20,
               0.4*trainingData.squats+35,
               0.4*trainingData.squats+45,
               0.4*trainingData.squats+50,
            ],
           week2: [
               0.4*trainingData.squats+5,
               0.4*trainingData.squats+25,
               0.4*trainingData.squats+40,
               0.4*trainingData.squats+50,
               0.4*trainingData.squats+55,
       ],
           week3: [
               0.4*trainingData.squats+10,
               0.4*trainingData.squats+30,
               0.4*trainingData.squats+45,
               0.4*trainingData.squats+55,
               0.4*trainingData.squats+60,
       ],
           week4: [
               0.4*trainingData.squats+15,
               0.4*trainingData.squats+35,
               0.4*trainingData.squats+50,
               0.4*trainingData.squats+60,
               0.4*trainingData.squats+65,
       ],
           week5: [
               0.4*trainingData.squats+20,
               0.4*trainingData.squats+40,
               0.4*trainingData.squats+55,
               0.4*trainingData.squats+65,
               0.4*trainingData.squats+70,
       ],
           week6: [
               0.4*trainingData.squats+25,
               0.4*trainingData.squats+45,
               0.4*trainingData.squats+60,
               0.4*trainingData.squats+70,
               0.4*trainingData.squats+75,
       ],
           week7: [
               0.4*trainingData.squats+30,
               0.4*trainingData.squats+50,
               0.4*trainingData.squats+65,
               0.4*trainingData.squats+75,
               0.4*trainingData.squats+80,
       ],
           week8: [
               0.4*trainingData.squats+35,
               0.4*trainingData.squats+55,
               0.4*trainingData.squats+70,
               0.4*trainingData.squats+80,
               0.4*trainingData.squats+85,
       ],
           week9: [
               0.4*trainingData.squats+40,
               0.4*trainingData.squats+60,
               0.4*trainingData.squats+75,
               0.4*trainingData.squats+85,
               0.4*trainingData.squats+90,
           ]})
   
           setBenchPress({
               week1: [
                   0.4*trainingData.benchpress,
                   0.4*trainingData.benchpress+20,
                   0.4*trainingData.benchpress+35,
                   0.4*trainingData.benchpress+45,
                   0.4*trainingData.benchpress+50,
               ],
               week2: [
                   0.4*trainingData.benchpress+5,
                   0.4*trainingData.benchpress+25,
                   0.4*trainingData.benchpress+40,
                   0.4*trainingData.benchpress+50,
                   0.4*trainingData.benchpress+55,
               ],
               week3: [
                   0.4*trainingData.benchpress+10,
                   0.4*trainingData.benchpress+30,
                   0.4*trainingData.benchpress+45,
                   0.4*trainingData.benchpress+55,
                   0.4*trainingData.benchpress+60,
               ],
               week4: [
                   0.4*trainingData.benchpress+15,
                   0.4*trainingData.benchpress+35,
                   0.4*trainingData.benchpress+50,
                   0.4*trainingData.benchpress+60,
                   0.4*trainingData.benchpress+65,
               ],
               week5: [
                   0.4*trainingData.benchpress+20,
                   0.4*trainingData.benchpress+40,
                   0.4*trainingData.benchpress+55,
                   0.4*trainingData.benchpress+65,
                   0.4*trainingData.benchpress+70,
               ],
               week6: [
                   0.4*trainingData.benchpress+25,
                   0.4*trainingData.benchpress+45,
                   0.4*trainingData.benchpress+60,
                   0.4*trainingData.benchpress+70,
                   0.4*trainingData.benchpress+75,
               ],
               week7: [
                   0.4*trainingData.benchpress+30,
                   0.4*trainingData.benchpress+50,
                   0.4*trainingData.benchpress+65,
                   0.4*trainingData.benchpress+75,
                   0.4*trainingData.benchpress+80,
               ],
               week8: [
                   0.4*trainingData.benchpress+35,
                   0.4*trainingData.benchpress+55,
                   0.4*trainingData.benchpress+70,
                   0.4*trainingData.benchpress+80,
                   0.4*trainingData.benchpress+85,
               ],
               week9: [
                   0.4*trainingData.benchpress+40,
                   0.4*trainingData.benchpress+60,
                   0.4*trainingData.benchpress+75,
                   0.4*trainingData.benchpress+85,
                   0.4*trainingData.benchpress+90,
               ]})
   
           setRowing({
               week1: [
                   0.4*trainingData.rowing,
                   0.4*trainingData.rowing+20,
                   0.4*trainingData.rowing+35,
                   0.4*trainingData.rowing+45,
                   0.4*trainingData.rowing+50,
               ],
               week2: [
                   0.4*trainingData.rowing+5,
                   0.4*trainingData.rowing+25,
                   0.4*trainingData.rowing+40,
                   0.4*trainingData.rowing+50,
                   0.4*trainingData.rowing+55,
               ],
               week3: [
                   0.4*trainingData.rowing+10,
                   0.4*trainingData.rowing+30,
                   0.4*trainingData.rowing+45,
                   0.4*trainingData.rowing+55,
                   0.4*trainingData.rowing+60,
               ],
               week4: [
                   0.4*trainingData.rowing+15,
                   0.4*trainingData.rowing+35,
                   0.4*trainingData.rowing+50,
                   0.4*trainingData.rowing+60,
                   0.4*trainingData.rowing+65,
               ],
               week5: [
                   0.4*trainingData.rowing+20,
                   0.4*trainingData.rowing+40,
                   0.4*trainingData.rowing+55,
                   0.4*trainingData.rowing+65,
                   0.4*trainingData.rowing+70,
               ],
               week6: [
                   0.4*trainingData.rowing+25,
                   0.4*trainingData.rowing+45,
                   0.4*trainingData.rowing+60,
                   0.4*trainingData.rowing+70,
                   0.4*trainingData.rowing+75,
               ],
               week7: [
                   0.4*trainingData.rowing+30,
                   0.4*trainingData.rowing+50,
                   0.4*trainingData.rowing+65,
                   0.4*trainingData.rowing+75,
                   0.4*trainingData.rowing+80,
               ],
               week8: [
                   0.4*trainingData.rowing+35,
                   0.4*trainingData.rowing+55,
                   0.4*trainingData.rowing+70,
                   0.4*trainingData.rowing+80,
                   0.4*trainingData.rowing+85,
               ],
               week9: [
                   0.4*trainingData.rowing+40,
                   0.4*trainingData.rowing+60,
                   0.4*trainingData.rowing+75,
                   0.4*trainingData.rowing+85,
                   0.4*trainingData.rowing+90,
               ]})
   
           setDeadLift({
               week1: [
                   0.4*trainingData.deadlift,
                   0.4*trainingData.deadlift+20,
                   0.4*trainingData.deadlift+35,
                   0.4*trainingData.deadlift+45,
                   0.4*trainingData.deadlift+50,
               ],
               week2: [
                   0.4*trainingData.deadlift+5,
                   0.4*trainingData.deadlift+25,
                   0.4*trainingData.deadlift+40,
                   0.4*trainingData.deadlift+50,
                   0.4*trainingData.deadlift+55,
               ],
               week3: [
                   0.4*trainingData.deadlift+10,
                   0.4*trainingData.deadlift+30,
                   0.4*trainingData.deadlift+45,
                   0.4*trainingData.deadlift+55,
                   0.4*trainingData.deadlift+60,
               ],
               week4: [
                   0.4*trainingData.deadlift+15,
                   0.4*trainingData.deadlift+35,
                   0.4*trainingData.deadlift+50,
                   0.4*trainingData.deadlift+60,
                   0.4*trainingData.deadlift+65,
               ],
               week5: [
                   0.4*trainingData.deadlift+20,
                   0.4*trainingData.deadlift+40,
                   0.4*trainingData.deadlift+55,
                   0.4*trainingData.deadlift+65,
                   0.4*trainingData.deadlift+70,
               ],
               week6: [
                   0.4*trainingData.deadlift+25,
                   0.4*trainingData.deadlift+45,
                   0.4*trainingData.deadlift+60,
                   0.4*trainingData.deadlift+70,
                   0.4*trainingData.deadlift+75,
               ],
               week7: [
                   0.4*trainingData.deadlift+30,
                   0.4*trainingData.deadlift+50,
                   0.4*trainingData.deadlift+65,
                   0.4*trainingData.deadlift+75,
                   0.4*trainingData.deadlift+80,
               ],
               week8: [
                   0.4*trainingData.deadlift+35,
                   0.4*trainingData.deadlift+55,
                   0.4*trainingData.deadlift+70,
                   0.4*trainingData.deadlift+80,
                   0.4*trainingData.deadlift+85,
               ],
               week9: [
                   0.4*trainingData.deadlift+40,
                   0.4*trainingData.deadlift+60,
                   0.4*trainingData.deadlift+75,
                   0.4*trainingData.deadlift+85,
                   0.4*trainingData.deadlift+90,
           ]})
   
           setMilitaryPress({
               week1: [
                   0.4*trainingData.militarypress,
                   0.4*trainingData.militarypress+20,
                   0.4*trainingData.militarypress+35,
                   0.4*trainingData.militarypress+45,
                   0.4*trainingData.militarypress+50,
               ],
               week2: [
                   0.4*trainingData.militarypress+5,
                   0.4*trainingData.militarypress+25,
                   0.4*trainingData.militarypress+40,
                   0.4*trainingData.militarypress+50,
                   0.4*trainingData.militarypress+55,
               ],
               week3: [
                   0.4*trainingData.militarypress+10,
                   0.4*trainingData.militarypress+30,
                   0.4*trainingData.militarypress+45,
                   0.4*trainingData.militarypress+55,
                   0.4*trainingData.militarypress+60,
               ],
               week4: [
                   0.4*trainingData.militarypress+15,
                   0.4*trainingData.militarypress+35,
                   0.4*trainingData.militarypress+50,
                   0.4*trainingData.militarypress+60,
                   0.4*trainingData.militarypress+65,
               ],
               week5: [
                   0.4*trainingData.militarypress+20,
                   0.4*trainingData.militarypress+40,
                   0.4*trainingData.militarypress+55,
                   0.4*trainingData.militarypress+65,
                   0.4*trainingData.militarypress+70,
               ],
               week6: [
                   0.4*trainingData.militarypress+25,
                   0.4*trainingData.militarypress+45,
                   0.4*trainingData.militarypress+60,
                   0.4*trainingData.militarypress+70,
                   0.4*trainingData.militarypress+75,
               ],
               week7: [
                   0.4*trainingData.militarypress+30,
                   0.4*trainingData.militarypress+50,
                   0.4*trainingData.militarypress+65,
                   0.4*trainingData.militarypress+75,
                   0.4*trainingData.militarypress+80,
               ],
               week8: [
                   0.4*trainingData.militarypress+35,
                   0.4*trainingData.militarypress+55,
                   0.4*trainingData.militarypress+70,
                   0.4*trainingData.militarypress+80,
                   0.4*trainingData.militarypress+85,
               ],
               week9: [
                   0.4*trainingData.militarypress+40,
                   0.4*trainingData.militarypress+60,
                   0.4*trainingData.militarypress+75,
                   0.4*trainingData.militarypress+85,
                   0.4*trainingData.militarypress+90,
           ]})
    },[trainingData])

    if(trainingData.squats>0){
        return(
            <div className={style.diet_container}>
                    <div className={style.logo_container}>
                    <Link to="/"><img className={style.small_logo} src={logo}></img></Link>
                    <h3>Zaplanuj swój trening</h3>
                 </div>
                <TrainingForm trainingSubmit={trainingSubmit}/>
                <Training squats={squats} benchPress={benchPress} rowing={rowing} deadLift={deadLift} militaryPress={militaryPress}/>
            </div>
        )
    }else return (

        <div className={basicStyles.container}>
                <div className={style.logo_container}>
                <Link to="/"><img className={style.small_logo} src={logo}></img></Link>
            <h3>Zaplanuj swój trening</h3>
            </div>
            <TrainingForm trainingSubmit={trainingSubmit}/>
        </div>
    )
}

export default AddTraining;