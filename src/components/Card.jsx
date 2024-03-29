import React, { useState } from 'react';
import classNames from 'classnames';
import FlashCardWord from './FlashCardWord';
import EditFlashcard from './EditFlashcard';

function Card({ word, index }) {
  const [languageToggle, setLanguageToggle] = useState(false);

  const shownWord = languageToggle ? word.englishWord : word.germanWord;

  const className = classNames('flex flex-col select-none justify-center items-center rounded-3xl h-96 w-72 m-2 shadow-xl hover:opacity-90', {
    'bg-blue-300': languageToggle,
    'bg-red-500': !languageToggle,
  });

  function handleOnClick() {
    setLanguageToggle(!languageToggle);
  }

  return (
    <button
      className="relative flex justify-center"
      type="button"
      onClick={handleOnClick}
    >
      <div
        className={className}
      >
        <FlashCardWord
          word={shownWord}
        />
      </div>
      {index >= 0 ? (
        <div className=" pt-28 absolute bottom-6 right-1/2">
          <EditFlashcard
            word={word}
            index={index}
          />

        </div>
      ) : null}
    </button>
  );
}

export default Card;
