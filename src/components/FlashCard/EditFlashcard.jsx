import React, { useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import GearIcon from '../../icons/GearIcon';
import EditFlashcardDropdown from './EditFlashcardDropdown';

function EditFlashcard({ edit, setEdit }) {
  const [toggleOpen, setToggleOpen] = useState(false);

  const dropdown = toggleOpen ? (
    <EditFlashcardDropdown
      setToggleOpen={setToggleOpen}
      toggleOpen={toggleOpen}
      edit={edit}
      setEdit={setEdit}
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
    </>
  );
}

export default EditFlashcard;
