/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import EditFlashCardButton from './EditFlashCardButton';
import EditFlashcardForm from './EditFlashcardForm';
import FlashCardWords from './FlashCardWords';

function FlashCard({ word }) {
  const [languageToggle, setLanguageToggle] = useState(false);
  const [edit, setEdit] = useState(false);

  const boxColor = languageToggle ? 'teal.300' : 'red.400';
  const boxColorHover = languageToggle ? 'teal.100' : 'red.200';
  const { _id: id } = word;

  function handleOnClick() {
    setLanguageToggle(!languageToggle);
  }
  return (
    <>
      <Box
        key={id}
        bg={boxColor}
        _hover={{ bg: `${boxColorHover}` }}
        h="100%"
        maxW="sm"
        w="100%"
        borderWidth="1px"
        borderRadius="lg"
        align="center"
        onClick={handleOnClick}
      >
        {edit && <EditFlashcardForm />}
        {!edit && <FlashCardWords languageToggle={languageToggle} word={word} />}
        <EditFlashCardButton setEdit={setEdit} />
      </Box>
    </>
  );
}

export default FlashCard;
