import React from 'react';

function DropdownButton({ children, handleOnClick }) {
  return (
    <button
      type="button"
      className="p-2 list-none rounded-xl w-full hover:bg-slate-300 "
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
}

export default DropdownButton;
