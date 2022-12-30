import React from 'react';
import { Link } from 'react-router-dom';
import {
<<<<<<< HEAD
  Box,
=======
>>>>>>> dev
  Link as StyleLink,
  Heading,
  Flex,
} from '@chakra-ui/react';

function NavBar() {
  return (
    <>
<<<<<<< HEAD
      <Box w="100%" h="5vh">
=======
      <Flex w="100%" h="5vh" justifyContent="center">
>>>>>>> dev
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
<<<<<<< HEAD
      </Box>
=======
      </Flex>
>>>>>>> dev
    </>
  );
}

export default NavBar;
