import React from 'react';
import { Link } from 'react-router-dom';
import {
  Link as StyleLink,
  Heading,
  Flex,
} from '@chakra-ui/react';

function NavBar() {
  return (
    <>
      <Flex w="100%" h="5vh" justifyContent="center">
        <Flex>
          <StyleLink>
            <Heading pr="2">
              <Link to="/game">Game</Link>
            </Heading>
          </StyleLink>
          <StyleLink>
            <Heading>
              <Link to="/database">Database</Link>
            </Heading>
          </StyleLink>
        </Flex>
      </Flex>
    </>
  );
}

export default NavBar;
