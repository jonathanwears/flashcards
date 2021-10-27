import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Link as StyleLink,
  Heading,
  Flex,
} from '@chakra-ui/react';

function NavBar() {
  return (
    <>
      <Box w="100%" h="5vh">
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
      </Box>
    </>
  );
}

export default NavBar;
