/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
<<<<<<< HEAD
import useUpdateForm from '../hooks/useUpdateForm';
import { updateWord } from '../../utils/index';
import EditCreateWordUi from './EditCreateWordUi';

// Creates a component to add a new word to db and edit exsisting word
function EditFlashcardForm({ word }) {
=======
import useUpdateForm from '../../utils/hooks/useUpdateForm';
import { updateWord } from '../../utils/server/index';
import EditCreateWordUi from './EditCreateWordUi';

// Creates a component to add a new word to db and edit existing word
function EditFlashcardForm({ word, postMethod }) {
>>>>>>> dev
  const history = useHistory();
  const { value, setNewValue, inputChange } = useUpdateForm('word');

  useEffect(() => {
<<<<<<< HEAD
    setNewValue({
      id: word._id,
      germanWord: word.germanWord,
      englishWord: word.englishWord,
    });
  }, []);

  const postOptions = {
    method: 'PATCH',
=======
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
>>>>>>> dev
    body: JSON.stringify(value),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  async function handleSubmitForm(event) {
    event.preventDefault();
    try {
<<<<<<< HEAD
      console.log(postOptions);
=======
>>>>>>> dev
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
