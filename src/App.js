import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Kiddies from './pages/Kiddies';
import Translator from './pages/Translator';
import About from './pages/About';
import Puzzle from './pages/Puzzle';
import Help from './pages/Help';
import Home from './pages/Home';

import './App.css';


function App() {
  return (

    <Switch> 
    <Route 
    path="/" exact component={Home } />
    <Route  path="/about" component= {About } />
    <Route  path="/translator" component={Translator}/>
    <Route  path="/puzzle" component={Puzzle}/>
     <Route  path="/kiddies" component={Kiddies}/>
     <Route path="/help">
              <Help />
            </Route>
     <Redirect to="/" />
     </Switch>
   
  );
}

export default App;
