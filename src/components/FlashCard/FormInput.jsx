/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

function FormInput({ word, onChange, value }) {
  return (
    <label
      className="w-full"
      htmlFor={`${word}-word-input`}
    >
      <p
        className="p-2 text-slate-800 capitalize"
      >
        {word} Word:
      </p>
      <input
        className="text-slate-900 rounded-md border-2 w-full p-2 shadow-sm"
        type="text"
        name={`${word}Word`}
        placeholder={`${word} word`}
        onChange={onChange}
        value={value}
      />
    </label>

  );
}

export default FormInput;
