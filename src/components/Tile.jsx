import React, { useState } from 'react';
import classNames from 'classnames';
import FlashCardWord from './FlashCard/FlashCardWord';
import EditFlashcard from './FlashCard/EditFlashcard';

function Tile({ word, index }) {
  const [languageToggle, setLanguageToggle] = useState(false);

  const className = classNames('flex flex-col select-none justify-center items-center rounded-xl h-72 w-72 m-2 shadow-xl hover:opacity-90', {
    'bg-blue-300': languageToggle,
    'bg-red-500': !languageToggle,
  });

  function handleOnClick() {
    setLanguageToggle(!languageToggle);
  }

  const shownWord = languageToggle ? word.englishWord : word.germanWord;

  return (
    <div
      className={className}
      onClick={handleOnClick}
    >
      <FlashCardWord
        word={shownWord}
      />
      <div className=" pt-28">
        <EditFlashcard
          word={word}
          index={index}
        />
      </div>
    </div>
  );
}

export default Tile;
