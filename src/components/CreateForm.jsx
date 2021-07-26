import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';
import useUpdateForm from './hooks/useUpdateForm';
import { createNewWord } from '../utils/index';

function CreateForm() {
  const history = useHistory();
  const { newWord, inputChange } = useUpdateForm(null);

  const postOptions = {
    method: 'POST',
    body: JSON.stringify(newWord),
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
      <Box w="lg" borderWidth="1px" borderRadius="lg" p="1rem" m="1rem" bg="blue.200">
        <FormControl>
          <FormLabel>English Word</FormLabel>
          <Input variant="filled" name="englishWord" {...inputChange} placeholder="English Word" />
          <FormLabel>German Word</FormLabel>
          <Input variant="filled" name="germanWord" {...inputChange} placeholder="German Word" />
          <Button mt="1rem" type="submit" onClick={handleSubmitForm}>Submit</Button>
        </FormControl>
      </Box>
    </>
  );
}

export default CreateForm;
