/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Button } from '@chakra-ui/button';
import useUpdateForm from '../hooks/useUpdateForm';
import { updateWord } from '../../utils/index';

function EditFlashcardForm({ word }) {
  const history = useHistory();
  const { newWord, setNewWord, inputChange } = useUpdateForm(null);

  useEffect(() => {
    setNewWord({
      id: word._id,
      germanWord: word.germanWord,
      englishWord: word.englishWord,
    });
  }, []);

  const postOptions = {
    method: 'PATCH',
    body: JSON.stringify(newWord),
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
      <Box w="lg" borderWidth="1px" borderRadius="lg" p="1rem" m="1rem" bg="blue.200">
        <FormControl>
          <FormLabel>Banana Word</FormLabel>
          <Input variant="filled" name="englishWord" {...inputChange} value={newWord.englishWord} />
          <FormLabel>German Word</FormLabel>
          <Input variant="filled" name="germanWord" {...inputChange} value={newWord.germanWord} />
          <Button mt="1rem" type="submit" onClick={handleSubmitForm}>Submit</Button>
        </FormControl>
      </Box>
    </>
  );
}

export default EditFlashcardForm;
