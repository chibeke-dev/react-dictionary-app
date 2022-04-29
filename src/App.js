import React from 'react';
import { Switch, Route } from 'react-router-dom';
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
    <Route exact
    path="/" component={props => <Home {...props} />} />
    <Route exact path="/about" component= {About } />
    <Route exact path="/translator" component={Translator}/>
    <Route exact path="/puzzle" component={Puzzle}/>
     <Route exact path="/kiddies" component={Kiddies}/>
     <Route exact path="/help" component={Help}/>
     </Switch>
   
  );
}

export default App;
