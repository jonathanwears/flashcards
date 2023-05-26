import React, { useState, useEffect } from 'react';
import { getAllWords } from '../utils/server';
import useDataStore from '../utils/useDataStore';
import AddNewWord from '../components/FlashCard/AddNewWord';
import FlashCards from '../components/FlashCard/Flashcards';

function Database() {
  const dataStore = useDataStore((state) => state.words);
  const [words, setWords] = useState();

  useEffect(() => {
    async function getData() {
      // const data = await getAllWords();
      // const data = mockData;
      setWords(dataStore);
    }
    getData();
  }, [dataStore]);

  const renderWords = words ? <FlashCards words={words} /> : null;

  return (
    <div>
      <AddNewWord />
      {renderWords}
    </div>
  );
}

export default Database;
