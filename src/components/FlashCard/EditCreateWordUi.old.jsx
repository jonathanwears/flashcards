/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

function EditCreateWordUi({ handleSubmitForm, inputChange, value }) {
  return (
    <>
      <Box position="absolute" boxShadow="Dark-lg" w="lg" borderWidth="1px" borderRadius="lg" p="1rem" m="1rem" bg="blue.200">
        <FormControl>
          <FormLabel>English Word</FormLabel>
          <Input variant="filled" name="englishWord" {...inputChange} value={value.englishWord} />
          <FormLabel>German Word</FormLabel>
          <Input variant="filled" name="germanWord" {...inputChange} value={value.germanWord} />
          <Button mt="1rem" type="submit" onClick={handleSubmitForm}>Submit</Button>
        </FormControl>
      </Box>
    </>
  );
}

export default EditCreateWordUi;
