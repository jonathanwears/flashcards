/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import EditFlashCardButton from './EditFlashCardButton';
import EditFlashcardForm from './EditFlashcardForm';
import FlashCardWords from './FlashCardWords';
import Tile from '../Tile';

function FlashCard({ word, isGame }) {
  const [languageToggle, setLanguageToggle] = useState(false);
  const [showEditButton, setShowEditButton] = useState(false);
  const { _id: id } = word;
  const boxColor = languageToggle ? 'teal.300' : 'red.400';
  // have a ref to disable edit button

  function handleOnClick() {
    if (showEditButton === false) {
      setLanguageToggle(!languageToggle);
    }
  }
  const newWordForm = showEditButton ? <EditFlashcardForm word={word} postMethod="PATCH" /> : null;
  const shownWord = languageToggle ? word.englishWord : word.germanWord

  return (
    <Tile
      key={id}
      bg={boxColor}
      click={handleOnClick}
    >
      {newWordForm}
      {!isGame && <EditFlashCardButton setShowEditButton={setShowEditButton} id={id} />}
      <FlashCardWords
        word={shownWord}
      />
    </Tile>
  );
}

export default FlashCard;
