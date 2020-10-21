import React from 'react';
import './App.css';
import {
  Switch,
  Route,
} from 'react-router-dom';
import AddTraining from '../subpages/AddTrainig';
import AddDiet from '../subpages/AddDiet';
import Main from '../subpages/Main';


    const App = () =>{
      return(
      <Switch>
        <Route exact path='/beefCake' component={Main} />
        <Route path='/addtraining' component={AddTraining} />
        <Route path='/adddiet' component={AddDiet} />
      </Switch>
      )
    }
  

    export default App;