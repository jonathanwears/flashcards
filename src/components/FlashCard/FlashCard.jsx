/* eslint-disable max-len */
/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import EditFlashCardDropdown from './EditFlashCardDropdown';
import EditFlashcardForm from './EditFlashcardForm';
import FlashCardWord from './FlashCardWord';
import Tile from '../Tile';

function FlashCard({ word, isGame }) {
  const [languageToggle, setLanguageToggle] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const { _id: id } = word;
  const boxColor = languageToggle ? 'teal.300' : 'red.400';
  // have a ref to disable edit button

  function handleOnClick() {
    if (showEditForm === false) {
      setLanguageToggle(!languageToggle);
    }
  }
  const newWordForm = showEditForm ? <EditFlashcardForm word={word} postMethod="PATCH" /> : null;
  const editWordDropdown = isGame ? null : <EditFlashCardDropdown setShowEditBForm={setShowEditForm} id={id} />;
  const shownWord = languageToggle ? word.englishWord : word.germanWord;

  return (
    <Tile
      key={id}
      bg={boxColor}
      click={handleOnClick}
    >
      {newWordForm}
      {editWordDropdown}
      <FlashCardWord
        word={shownWord}
      />
    </Tile>

  );
}

export default FlashCard;
