import React, { useState, useEffect } from 'react';
import FlashCardWord from './FlashCard/FlashCardWord';

function Tile({ word }) {
  const styles = 'flex items-center justify-center rounded-xl h-72 w-72 m-2 shadow-xl ';

  const [languageToggle, setLanguageToggle] = useState(false);
  const [style, setStyle] = useState(styles);

  function handleOnClick() {
    setLanguageToggle(!languageToggle);
  }

  const shownWord = languageToggle ? word.englishWord : word.germanWord;
  const bgStyle = languageToggle ? 'bg-blue-300 rounded-full' : 'bg-red-400';

  useEffect(() => {
    const a = styles.concat(' ', bgStyle);
    setStyle(a);
  }, [languageToggle]);

  return (
    <div
      className={style}
      onClick={handleOnClick}
    >
      <FlashCardWord
        word={shownWord}
      />
    </div>
  );
}

export default Tile;
