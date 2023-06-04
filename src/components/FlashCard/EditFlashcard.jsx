import React, { useState } from 'react';
import GearIcon from '../../icons/GearIcon';
import EditFlashcardDropdown from './EditFlashcardDropdown';
import EditFlashcardForm from './EditFlashcardForm';
import { useDropdown } from '../hooks/useDropdown';

function EditFlashcard({ word, index }) {
  const [edit, setEdit] = useState(false);
  const [ref, isToggled, setIsToggled] = useDropdown();

  const dropdown = isToggled ? (
    <EditFlashcardDropdown
      setToggleOpen={setIsToggled}
      toggleOpen={isToggled}
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
    <div ref={ref}>
      <div
        onClick={(event) => { event.stopPropagation(); setIsToggled(!isToggled); }}
      >
        <GearIcon />
      </div>
      <div>
        {dropdown}
      </div>
      {editForm}
    </div>
  );
}

export default EditFlashcard;
