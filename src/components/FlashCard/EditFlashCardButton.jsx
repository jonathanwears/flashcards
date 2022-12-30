/* eslint-disable react/prop-types */
import React from 'react';
import { EditIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { deleteEntry } from '../../utils/server';

function EditFlashCardButton({ setEdit, id }) {
  const history = useHistory();

  function handleEditClick() {
    setEdit(true);
  }

  const deleteOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  async function handleDeleteClick() {
    try {
      await deleteEntry(deleteOptions, id);
    } catch (err) {
      console.log(err);
    } finally {
      history.go();
    }
  }

  return (
    <Menu>
      <MenuButton>
        <EditIcon w={5} h={5} color="black" />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={handleEditClick}>edit</MenuItem>
        <MenuItem onClick={handleDeleteClick}>delete</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default EditFlashCardButton;
