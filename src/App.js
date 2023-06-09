/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './pages/NavBar';
import Database from './pages/Database';
import Game from './pages/Game';

function App() {
  return (
    <>
      <div className="bg-slate-800 w-screen h-screen">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/database" component={Database} />
            <Route exact path="/game" component={Game} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
