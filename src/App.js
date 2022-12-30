/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import Database from './pages/Database';
import Game from './pages/Game';

function App() {
  return (
    <Flex
      direction="column"
      width="100%"
    >
      <Router>
        <ChakraProvider>
          <NavBar />
          <Switch>
            <Route exact path="/database" component={Database} />
            <Route exact path="/game" component={Game} />
          </Switch>
        </ChakraProvider>
      </Router>
    </Flex>
  );
}

export default App;
