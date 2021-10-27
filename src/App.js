/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import Database from './components/Database';
import Game from './components/Game';

function App() {
  return (
    <>
      <Router>
        <ChakraProvider>
          <NavBar />
          <Switch>
            <Route exact path="/database" component={Database} />
            <Route exact path="/game" component={Game} />
          </Switch>
        </ChakraProvider>
      </Router>
    </>
  );
}

export default App;
