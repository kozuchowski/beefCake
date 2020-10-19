import React from 'react';
import styles from './Training.module.scss'

const Training= ({squats,benchPress,rowing,deadLift,militaryPress}) => {
    


   if(typeof squats.week1!=="undefined"){
    return (
        <>
              <h3>Tydzień 1</h3>
              <table border="1">
                  <thead><tr><td colSpan="2">Dzień 1</td><td colSpan="3">Dzień 2</td></tr></thead>
                 <tbody>
                 <tr><td>Squats</td><td>Bench press</td><td>Rowing</td><td>Dead lift</td><td>Military press</td></tr>
                 <tr>
                    <td>{squats.week1.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń </li>)}</td>
                    <td>{benchPress.week1.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                    <td>{rowing.week1.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                    <td>{deadLift.week1.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                    <td>{militaryPress.week1.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                     </tr>
                 </tbody>
              </table>

              <h3>Tydzień 2</h3>
              <table border="1">
                  <thead><tr><td colSpan="2">Dzień 1</td><td colSpan="3">Dzień 2</td></tr></thead>
                 <tbody>
                 <tr><td>Squats</td><td>Bench press</td><td>Rowing</td><td>Dead lift</td><td>Military press</td></tr>
                 <tr>
                    <td>{squats.week2.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń </li>)}</td>
                    <td>{benchPress.week2.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                    <td>{rowing.week2.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                    <td>{deadLift.week2.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                    <td>{militaryPress.week2.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                     </tr>
                 </tbody>
              </table>

              <h3>Tydzień 3</h3>
              <table border="1">
                  <thead><tr><td colSpan="2">Dzień 1</td><td colSpan="3">Dzień 2</td></tr></thead>
                 <tbody>
                 <tr><td>Squats</td><td>Bench press</td><td>Rowing</td><td>Dead lift</td><td>Military press</td></tr>
                 <tr>
                    <td>{squats.week3.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń </li>)}</td>
                    <td>{benchPress.week3.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                    <td>{rowing.week3.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                    <td>{deadLift.week3.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                    <td>{militaryPress.week3.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                     </tr>
                 </tbody>
              </table>

              <h3>Tydzień 4</h3>
              <table border="1">
                  <thead><tr><td colSpan="2">Dzień 1</td><td colSpan="3">Dzień 2</td></tr></thead>
                 <tbody>
                 <tr><td>Squats</td><td>Bench press</td><td>Rowing</td><td>Dead lift</td><td>Military press</td></tr>
                 <tr>
                    <td>{squats.week4.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń </li>)}</td>
                    <td>{benchPress.week4.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                    <td>{rowing.week4.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                    <td>{deadLift.week4.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                    <td>{militaryPress.week4.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                     </tr>
                 </tbody>
              </table>

              <h3>Tydzień 5</h3>
              <table border="1">
                  <thead><tr><td colSpan="2">Dzień 1</td><td colSpan="3">Dzień 2</td></tr></thead>
                 <tbody>
                 <tr><td>Squats</td><td>Bench press</td><td>Rowing</td><td>Dead lift</td><td>Military press</td></tr>
                 <tr>
                    <td>{squats.week5.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń </li>)}</td>
                    <td>{benchPress.week5.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                    <td>{rowing.week5.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                    <td>{deadLift.week5.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                    <td>{militaryPress.week5.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                     </tr>
                 </tbody>
              </table>

              <h3>Tydzień 6</h3>
              <table border="1">
                  <thead><tr><td colSpan="2">Dzień 1</td><td colSpan="3">Dzień 2</td></tr></thead>
                 <tbody>
                 <tr><td>Squats</td><td>Bench press</td><td>Rowing</td><td>Dead lift</td><td>Military press</td></tr>
                 <tr>
                    <td>{squats.week6.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń </li>)}</td>
                    <td>{benchPress.week6.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                    <td>{rowing.week6.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                    <td>{deadLift.week6.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                    <td>{militaryPress.week6.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                     </tr>
                 </tbody>
              </table>

              <h3>Tydzień 7</h3>
              <table border="1">
                  <thead><tr><td colSpan="2">Dzień 1</td><td colSpan="3">Dzień 2</td></tr></thead>
                 <tbody>
                 <tr><td>Squats</td><td>Bench press</td><td>Rowing</td><td>Dead lift</td><td>Military press</td></tr>
                 <tr>
                    <td>{squats.week7.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń </li>)}</td>
                    <td>{benchPress.week7.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                    <td>{rowing.week7.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                    <td>{deadLift.week7.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                    <td>{militaryPress.week7.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                     </tr>
                 </tbody>
              </table>

              <h3>Tydzień 8</h3>
              <table border="1">
                  <thead><tr><td colSpan="2">Dzień 1</td><td colSpan="3">Dzień 2</td></tr></thead>
                 <tbody>
                 <tr><td>Squats</td><td>Bench press</td><td>Rowing</td><td>Dead lift</td><td>Military press</td></tr>
                 <tr>
                    <td>{squats.week8.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń </li>)}</td>
                    <td>{benchPress.week8.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                    <td>{rowing.week8.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                    <td>{deadLift.week8.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                    <td>{militaryPress.week8.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                     </tr>
                 </tbody>
              </table>

              <h3>Tydzień 9</h3>
              <table border="1">
                  <thead><tr><td colSpan="2">Dzień 1</td><td colSpan="3">Dzień 2</td></tr></thead>
                 <tbody>
                 <tr><td>Squats</td><td>Bench press</td><td>Rowing</td><td>Dead lift</td><td>Military press</td></tr>
                 <tr>
                    <td>{squats.week9.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń </li>)}</td>
                    <td>{benchPress.week9.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                    <td>{rowing.week9.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                    <td>{deadLift.week9.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                    <td>{militaryPress.week9.map((e,i)=><li key={i}><span>seria {i+1}:</span> {e}kg po {6-i} powtórzeń</li>)}</td>
                     </tr>
                 </tbody>
              </table>
        </>
 
     )
   }else return null
}

export default Training;