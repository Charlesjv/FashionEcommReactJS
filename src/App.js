import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import './App.css';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div >
      <Switch>
      <Route exact path = '/' component = {HomePage}></Route>
      <Route path = '/hats' component = {HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
