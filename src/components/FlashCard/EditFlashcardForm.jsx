/* eslint-disable react/prop-types */
import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import useDataStore from '../../utils/useDataStore';
import { updateWord } from '../../utils/server/index';
import WordForm from './WordForm';

// Creates a component to add a new word to db and edit existing word
function EditFlashcardForm({ word, postMethod, index }) {
  const setNewWord = useDataStore((state) => state.replaceWord);
  const findWord = useDataStore((state) => state.words[index]);
  const history = useHistory();
  const [value, setNewValue] = useState();

  const postOptions = {
    method: postMethod,
    body: JSON.stringify(value),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  async function handleSubmitForm(words) {
    try {
      console.log(words);
      setNewWord(index, words);
      // await updateWord(postOptions);
    } catch (err) {
      console.log(err);
    } finally {
      // history.go();
    }
  }

  return (
    <>
      <WordForm
        values={word}
        handleSubmit={handleSubmitForm}
      />
    </>
  );
}

export default EditFlashcardForm;
