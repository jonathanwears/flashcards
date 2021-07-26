import React from 'react';
import { EditIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from '@chakra-ui/react';
import { deleteEntry } from '../../utils';

function EditFlashCardButton({ setEdit, id }) {
  function handleEditClick() {
    setEdit(true);
  }

  const deleteOptions = {
    method: 'DELETE',
    body: JSON.stringify(id),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  function handleDeleteClick() {
    try {
      deleteEntry(deleteOptions);
    } catch (err) {
      console.log(err);
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
