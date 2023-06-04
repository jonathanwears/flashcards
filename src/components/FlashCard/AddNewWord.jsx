import React, { useCallback } from 'react';
import { useDropdown } from '../hooks/useDropdown';
import useDataStore from '../../utils/useDataStore';
import Button from '../Button';
import WordForm from './WordForm';

function AddNewWord() {
  const { setWord } = useDataStore((state) => state);
  const [ref, toggle, setToggle] = useDropdown();

  const handleSubmit = useCallback((event) => {
    setWord(event);
  });

  const showElement = toggle ? (
    <WordForm
      handleSubmit={handleSubmit}
    />
  ) : null;

  return (
    <div
      className="relative"
      ref={ref}
    >
      <Button
        onClick={() => setToggle(!toggle)}
      >
        Add New Word
      </Button>
      {showElement}
    </div>
  );
}

export default AddNewWord;
