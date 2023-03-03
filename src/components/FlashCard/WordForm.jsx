import React, { useCallback, useState } from 'react';
import FormInput from './FormInput';
import Button from '../Button';

const defaultValues = {
  englishWord: '',
  germanWord: '',
};

function WordForm({ values = defaultValues, handleSubmit }) {
  const [words, setWords] = useState(values);

  const handleOnChange = useCallback((event) => {
    setWords((prevValue) => ({
      ...prevValue,
      [event.target.name]: event.target.value,
    }));
  });

  function handleOnClick(event) {
    event.preventDefault();
    handleSubmit(words);
  }

  return (
    <div className="bg-blue-50 p-2 w-96 rounded-lg absolute">
      <form className="w-full flex flex-col justify-center items-center p-2">
        <FormInput
          word="english"
          value={words.englishWord}
          onChange={handleOnChange}
        />
        <FormInput
          word="german"
          value={words.germanWord}
          onChange={handleOnChange}
        />
        <Button
          onClick={handleOnClick}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default WordForm;
