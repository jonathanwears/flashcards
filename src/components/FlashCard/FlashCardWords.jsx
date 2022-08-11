/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React from 'react';
import { Center, Heading } from '@chakra-ui/layout';

function FlashCardWords({ languageToggle, word }) {
  const { germanWord, englishWord } = word;
  return (
    <Center>
      <Heading color="white" size="2xl" py="8rem">
        {languageToggle ? englishWord : germanWord}
      </Heading>
    </Center>
  );
}

export default FlashCardWords;
