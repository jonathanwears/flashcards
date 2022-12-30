import React from 'react';
import { Flex, Button } from '@chakra-ui/react';
import Flashcard from '../FlashCard/FlashCard';

function GameUI({ randomise, card }) {
  return (
    <Flex
      direction="column"
      flex="0 0 1fr"
      alignItems="stretch"
    >
      <Flashcard word={card} isGame="true" />
      <Button margin="0 2vw 0 2vw" onClick={randomise}>Next Word</Button>
    </Flex>
  );
}

export default GameUI;
