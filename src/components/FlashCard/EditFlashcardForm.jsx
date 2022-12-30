/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useUpdateForm from '../../utils/hooks/useUpdateForm';
import { updateWord } from '../../utils/server/index';
import EditCreateWordUi from './EditCreateWordUi';

// Creates a component to add a new word to db and edit existing word
function EditFlashcardForm({ word, postMethod }) {
  const history = useHistory();
  const { value, setNewValue, inputChange } = useUpdateForm('word');

  useEffect(() => {
    if (word !== undefined) {
      setNewValue({
        id: word._id,
        germanWord: word.germanWord,
        englishWord: word.englishWord,
      });
    }
  }, []);

  const postOptions = {
    method: postMethod,
    body: JSON.stringify(value),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  async function handleSubmitForm(event) {
    event.preventDefault();
    try {
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
