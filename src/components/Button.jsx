import React from 'react';

function Button({ click, children }) {
  return (
    <button
      className="bg-red-300 m-2 w-min-32 w-fit p-3 rounded-xl hover:bg-red-400"
      type="button"
      onClick={click}
    >
      <h2 className="font-bold text-lg text-slate-600">
        {children}
      </h2>
    </button>
  );
}

export default Button;
