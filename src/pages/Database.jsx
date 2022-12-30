import React, { useState, useEffect } from 'react';
import { Box, Grid } from '@chakra-ui/react';
import FlashCard from '../components/FlashCard/FlashCard';
import { getAllWords } from '../utils/server';
import AddNewWordButton from '../components/AddNewWordButton';
import mockData from '../../mockData';

function Database() {
  const [words, setWords] = useState();

  useEffect(() => {
    async function getData() {
      // const data = await getAllWords();
      // const data = mockData;
      setWords(mockData);
    }
    getData();
  }, []);

  const renderWords = words ? words.map((word, index) => <FlashCard key={`${word}${index}`} word={word} />) : null

  return (
    <>
      <AddNewWordButton />
      <Box w="100vw">
        <Grid
          px="5px"
          w="100%"
          templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
          gap={2}
        >
          {renderWords}
        </Grid>
      </Box>
    </>
  );
}

export default Database;
