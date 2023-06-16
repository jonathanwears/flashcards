import React from 'react';
import GearIcon from '../icons/GearIcon';
import EditFlashcardDropdown from './EditFlashcardDropdown';
import EditFlashcardForm from './EditFlashcardForm';
import { useDropdown } from '../utils/hooks/useDropdown';

function EditFlashcard({ word, index }) {
  const [ref, isToggled, setIsToggled] = useDropdown();
  const [ref1, toggle, setToggle] = useDropdown();

  const dropdown = isToggled ? (
    <EditFlashcardDropdown
      setToggleOpen={setIsToggled}
      toggleOpen={isToggled}
      edit={toggle}
      setEdit={setToggle}
    />
  ) : null;

  const editForm = toggle ? (
    <EditFlashcardForm
      word={word}
      index={index}
    />
  ) : null;

  return (
    <div>
      <div ref={ref}>
        <div
          onClick={(event) => { event.stopPropagation(); setIsToggled(!isToggled); }}
        >
          <GearIcon />
        </div>
        <div>
          {dropdown}
        </div>
      </div>
      <div ref={ref1}>
        {editForm}
      </div>
    </div>
  );
}

export default EditFlashcard;
