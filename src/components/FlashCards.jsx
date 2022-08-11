/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import FlashCard from './FlashCard';

function FlashCards(data) {
  const [index, setIndex] = useState(0);

  function handleNextCardClick() {
    const value = index + 1;
    setIndex(value);
  }

  const { words } = data;
  const singlePassedWord = words[index];

  return (
    <>
      <p>hello</p>
      <FlashCard word={singlePassedWord} />
      <button type="button" onClick={handleNextCardClick}>Next</button>
    </>
  );
}

export default FlashCards;
