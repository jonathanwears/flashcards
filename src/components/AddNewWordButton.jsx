import React from 'react';
import { useDisclosure, Button, Collapse, Box, Center } from '@chakra-ui/react';
import EditFlashcardForm from './FlashCard/EditFlashcardForm';

function AddNewWordButton() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Center>
        <Button bg="blue.100" onClick={onToggle} my="1rem">Add New Word</Button>
      </Center>
      <Center>
        <Collapse in={isOpen} animateOpacity>
          <Box direction="column">
            <EditFlashcardForm postMethod="POST" />
          </Box>
        </Collapse>
      </Center>
    </>
  );
}

export default AddNewWordButton;
