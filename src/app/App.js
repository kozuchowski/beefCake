import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import AddTraining from '../subpages/AddTrainig';
import AddDiet from '../subpages/AddDiet';
import Main from '../subpages/Main';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Main} />
      <Route path='/addtraining' component={AddTraining} />
      <Route path='/adddiet' component={AddDiet} />
    </BrowserRouter>
  )
  
}

export default App;
