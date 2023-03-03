import React, { useState, useEffect } from 'react';
import FlashCard from '../components/FlashCard/FlashCard';
import { getAllWords } from '../utils/server';
import useDataStore from '../utils/useDataStore';
import AddNewWord from '../components/FlashCard/AddNewWord';

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

  const renderWords = words ? words.map((word, index) => <FlashCard key={`${word}${index}`} index={index} word={word} />) : null

  return (
    <>
      <AddNewWord />
      <div className="flex">
        {renderWords}
      </div>
    </>
  );
}

export default Database;
