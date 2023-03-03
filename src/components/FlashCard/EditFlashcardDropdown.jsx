/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { deleteEntry } from '../../utils/server';
import DropDownButton from './DropdownButton';

function EditFlashcardDropdown({ setToggleOpen, toggleOpen, edit, setEdit }) {
  function handleOutsideClick() {
    setToggleOpen(false);
  }
  const ref = useDetectClickOutside({ onTriggered: handleOutsideClick });
  const history = useHistory();

  const handleEditClick = useCallback(() => {
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
      ref={ref}
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
