import React, { useState, useEffect } from 'react';
import FlashCardWord from './FlashCard/FlashCardWord';
import GearIcon from '../icons/GearIcon';
import EditFlashcard from './FlashCard/EditFlashcard';
import EditFlashcardForm from './FlashCard/EditFlashcardForm';

function Tile({ word, index }) {
  const styles = 'flex flex-col justify-center items-center rounded-xl h-72 w-72 m-2 shadow-xl hover:opacity-90';

  const [languageToggle, setLanguageToggle] = useState(false);
  const [style, setStyle] = useState(styles);
  const [edit, setEdit] = useState(false);

  const bgStyle = languageToggle ? 'bg-blue-300 rounded-full' : 'bg-red-500';

  useEffect(() => {
    const newStyle = styles.concat(' ', bgStyle);
    setStyle(newStyle);
  }, [languageToggle]);

  function handleOnClick() {
    setLanguageToggle(!languageToggle);
  }

  const shownWord = languageToggle ? word.englishWord : word.germanWord;

  const editForm = edit ? (
    <EditFlashcardForm
      word={word}
      index={index}
    />
  ) : null;

  return (
    <div
      className={style}
      onClick={handleOnClick}
    >
      <FlashCardWord
        word={shownWord}
        edit={GearIcon}
      />
      <div className=" pt-28">
        <EditFlashcard
          edit={edit}
          setEdit={setEdit}
        />
      </div>
      <div>
        {editForm}
      </div>
    </div>
  );
}

export default Tile;
