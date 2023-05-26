import React, { useState, useEffect } from 'react';
import FlashCardWord from './FlashCard/FlashCardWord';
import EditFlashcard from './FlashCard/EditFlashcard';

function Tile({ word, index }) {
  const styles = 'flex flex-col justify-center items-center rounded-xl h-72 w-72 m-2 shadow-xl hover:opacity-90';

  const [languageToggle, setLanguageToggle] = useState(false);
  const [style, setStyle] = useState(styles);

  const bgStyle = languageToggle ? 'bg-blue-300 rounded-full' : 'bg-red-500';

  useEffect(() => {
    const newStyle = styles.concat(' ', bgStyle);
    setStyle(newStyle);
  }, [languageToggle]);

  function handleOnClick() {
    setLanguageToggle(!languageToggle);
  }

  const shownWord = languageToggle ? word.englishWord : word.germanWord;

  return (
    <div
      className={style}
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
