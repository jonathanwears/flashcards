import React from 'react';
import { useHistory } from 'react-router-dom';
import useUpdateForm from './hooks/useUpdateForm';
import { createNewWord } from '../utils/index';
import EditCreateWordUi from './FlashCard/EditCreateWordUi';

function CreateForm() {
  const history = useHistory();
  const { value, inputChange } = useUpdateForm('word');

  const postOptions = {
    method: 'POST',
    body: JSON.stringify(value),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  async function handleSubmitForm(event) {
    event.preventDefault();
    try {
      await createNewWord(postOptions);
    } catch (err) {
      console.log(err);
    } finally {
      history.go(0);
    }
  }

  return (
    <>
      <EditCreateWordUi
        handleSubmitForm={handleSubmitForm}
        inputChange={inputChange}
        value={value}
      />
    </>
  );
}

export default CreateForm;
