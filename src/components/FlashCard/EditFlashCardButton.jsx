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

function EditFlashCardButton({ setEdit }) {
  function handleClick() {
    setEdit(true);
  }

  return (
    <Menu>
      <MenuButton>
        <EditIcon w={5} h={5} color="black" />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={handleClick}>edit</MenuItem>
        <MenuItem>delete</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default EditFlashCardButton;
