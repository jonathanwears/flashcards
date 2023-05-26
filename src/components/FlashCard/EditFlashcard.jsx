import React, { useState } from 'react';
import GearIcon from '../../icons/GearIcon';
import EditFlashcardDropdown from './EditFlashcardDropdown';
import EditFlashcardForm from './EditFlashcardForm';

function EditFlashcard({ word, index }) {
  const [toggleOpen, setToggleOpen] = useState(false);
  const [edit, setEdit] = useState(false);

  const dropdown = toggleOpen ? (
    <EditFlashcardDropdown
      setToggleOpen={setToggleOpen}
      toggleOpen={toggleOpen}
      edit={edit}
      setEdit={setEdit}
    />
  ) : null;

  const editForm = edit ? (
    <EditFlashcardForm
      word={word}
      index={index}
    />
  ) : null;

  return (
    <>
      <div
        onClick={() => setToggleOpen(!toggleOpen)}
      >
        <GearIcon />
      </div>
      <div>
        {dropdown}
      </div>
      {editForm}
    </>
  );
}

export default EditFlashcard;
