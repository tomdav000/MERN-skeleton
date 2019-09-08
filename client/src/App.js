import React from 'react';
import Home from './comps/Home';
import Drink from './comps/Drink';
import AddDrink from './comps/AddDrink';
import UpdateDrink from './comps/UpdateDrink';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/add' component={AddDrink}/>
        <Route exact path='/edit/:id' component={UpdateDrink}/>
        <Route exact path='/:id' component={Drink}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
