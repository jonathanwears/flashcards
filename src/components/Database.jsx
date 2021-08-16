import React, { useState, useEffect } from 'react';
import { useDisclosure } from '@chakra-ui/hooks';
import { Button } from '@chakra-ui/button';
import { Collapse } from '@chakra-ui/transition';
import { Box, Flex, Center } from '@chakra-ui/layout';
import { Grid } from '@chakra-ui/react';
import FlashCard from './FlashCard/FlashCard';
import { getAllWords } from '../utils';
import CreateForm from './CreateForm';

function Database() {
  const [words, setWords] = useState();
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    async function getData() {
      const data = await getAllWords();
      setWords(data);
    }
    getData();
  }, []);

  return (
    <>
      <Center>
        <Button bg="blue.100" onClick={onToggle} my="1rem">Add New Word</Button>
      </Center>
      <Center>
        <Collapse in={isOpen} animateOpacity>
          <Box direction="column">
            <CreateForm />
          </Box>
        </Collapse>
      </Center>
      <Box w="100vw">
        <Grid px="5px" w="100%" templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={2}>
          {words && words.map((word) => <FlashCard word={word} />)}
        </Grid>
      </Box>
    </>
  );
}

export default Database;
