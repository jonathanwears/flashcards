<<<<<<< HEAD
=======
/* eslint-disable react/prop-types */
>>>>>>> dev
import React from 'react';
import { EditIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
<<<<<<< HEAD
import { deleteEntry } from '../../utils';
import { useHistory } from 'react-router-dom';
=======
import { useHistory } from 'react-router-dom';
import { deleteEntry } from '../../utils/server';
>>>>>>> dev

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
