import React from 'react';
import './App.css';
import {
  HashRouter,
  Route,
} from 'react-router-dom';
import AddTraining from '../subpages/AddTrainig';
import AddDiet from '../subpages/AddDiet';
import Main from '../subpages/Main';

function App() {
  return (
    <HashRouter>
      <Route exact path='/' component={Main} />
      <Route path='/addtraining' component={AddTraining} />
      <Route path='/adddiet' component={AddDiet} />
    </HashRouter>
  )
  
}

export default App;
