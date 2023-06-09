/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { deleteEntry } from '../../utils/server';
import DropDownButton from './DropdownButton';

function EditFlashcardDropdown({ setToggleOpen, toggleOpen, edit, setEdit }) {
  const history = useHistory();

  const handleEditClick = useCallback((event) => {
    event.stopPropagation();
    setEdit(true);
    setToggleOpen(!toggleOpen);
  });

  const handleDeleteClick = useCallback(async () => {
    try {
      // await deleteEntry(id);
    } finally {
      history.go();
    }
  });

  return (
    <div
      className="absolute w-32 bg-slate-200 rounded-xl flex flex-col items-start"
    >
      <DropDownButton
        handleOnClick={handleEditClick}
      >
        Edit
      </DropDownButton>
      <DropDownButton
        handleOnClick={handleDeleteClick}
      >
        Delete
      </DropDownButton>
    </div>
  );
}

export default EditFlashcardDropdown;
