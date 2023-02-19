/* eslint-disable react/prop-types */
import React from 'react';
import { Center, Heading } from '@chakra-ui/react';

function FlashCardWord({ word }) {
  return (
    <Center>
      <Heading color="white" size="2xl" py="8rem">
        {word}
      </Heading>
    </Center>
  );
}

export default FlashCardWord;
