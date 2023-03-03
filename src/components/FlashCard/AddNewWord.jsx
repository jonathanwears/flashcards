import React, { useCallback, useState } from 'react';
import useDataStore from '../../utils/useDataStore';
import Button from '../Button';
import WordForm from './WordForm';

function AddNewWord() {
  const { setWord } = useDataStore((state) => state);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = useCallback((event) => {
    setWord(event);
  });

  const showElement = isOpen ? (
    <WordForm
      handleSubmit={handleSubmit}
    />
  ) : null;

  return (
    <div className="relative">
      <Button
        onClick={() => setIsOpen(!isOpen)}
      >
        Add New Word
      </Button>
      {showElement}
    </div>
  );
}

export default AddNewWord;
