/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import EditFlashCardButton from './EditFlashCardButton';
import EditFlashcardForm from './EditFlashcardForm';
import FlashCardWords from './FlashCardWords';

function FlashCard({ word, isGame }) {
  const [languageToggle, setLanguageToggle] = useState(false);
  const [showEditButton, setShowEditButton] = useState(false);
  const { _id: id } = word;
  const boxColor = languageToggle ? 'teal.300' : 'red.400';
  const boxColorHover = languageToggle ? 'teal.100' : 'red.200';
  // have a ref to disable edit button

  function handleOnClick() {
    if (showEditButton === false) {
      setLanguageToggle(!languageToggle);
    }
  }

  const newWordForm = showEditButton ? <EditFlashcardForm word={word} postMethod="PATCH" /> : null;

  return (
    <div>
      <Box
        key={id}
        bg={boxColor}
        _hover={{ bg: `${boxColorHover}` }}
        h="100%"
        maxW="sm"
        w="100%"
        borderWidth="1px"
        borderRadius="lg"
        onClick={handleOnClick}
      >
        <FlashCardWords languageToggle={languageToggle} word={word} />
        {newWordForm}
        {!isGame && <EditFlashCardButton setShowEditButton={setShowEditButton} id={id} />}
      </Box>
    </div>
  );
}

export default FlashCard;
