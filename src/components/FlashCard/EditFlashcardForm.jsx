/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useUpdateForm from '../hooks/useUpdateForm';
import { updateWord } from '../../utils/index';
import EditCreateWordUi from './EditCreateWordUi';

// Creates a component to add a new word to db and edit exsisting word
function EditFlashcardForm({ word }) {
  const history = useHistory();
  const { value, setNewValue, inputChange } = useUpdateForm('word');

  useEffect(() => {
    setNewValue({
      id: word._id,
      germanWord: word.germanWord,
      englishWord: word.englishWord,
    });
  }, []);

  const postOptions = {
    method: 'PATCH',
    body: JSON.stringify(value),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  async function handleSubmitForm(event) {
    event.preventDefault();
    try {
      console.log(postOptions);
      await updateWord(postOptions);
    } catch (err) {
      console.log(err);
    } finally {
      history.go();
    }
  }

  return (
    <>
      <EditCreateWordUi
        inputChange={inputChange}
        handleSubmitForm={handleSubmitForm}
        value={value}
      />
    </>
  );
}

export default EditFlashcardForm;
