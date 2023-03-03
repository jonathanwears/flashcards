import React from 'react';

function Button({ onClick, children }) {
  return (
    <button
      className="bg-red-300 m-2 w-min-32 w-fit p-3 rounded-xl hover:bg-red-200"
      type="button"
      onClick={onClick}
    >
      <h2 className="font-bold text-lg text-slate-600">
        {children}
      </h2>
    </button>
  );
}

export default Button;
