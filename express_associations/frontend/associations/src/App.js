import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from './views/Home';
import Konexio from './views/Konexio';
import LaCroixRouge from './views/la-croix-rouge';
import  Restau from './views/restau-du-coeur';
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
          <nav> 
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/konexio">konexio</Link></li>
              <li><Link to="/la-croix-rouge">La-croix-rouge</Link></li>
              <li><Link to="/restau-du-coeur">Restau-du-coeur</Link></li>
            </ul>
          </nav>
          <Switch>
          <Route exact path="/" views={Home}/>
          </Switch>  
      </div>
      </BrowserRouter>  
  );
}

export default App;
