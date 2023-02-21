/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

function FormInput({ word }) {
  return (

    <label
      className="w-full"
      htmlFor={`${word}-word-input`}
    >
      <p className="p-2 text-slate-800">{word} Word:</p>
      <input
        className="text-slate-900 rounded-md border-2 w-full p-2 shadow-sm"
        type="text"
        name={`${word}-word-input`}
        placeholder={`${word} Word`}
      />
    </label>

  );
}

export default FormInput;
