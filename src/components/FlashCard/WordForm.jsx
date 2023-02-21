import React from 'react';
import FormInput from './FormInput';
import Button from '../Button';

function WordForm() {
  return (
    <div className="bg-blue-50 p-2 w-96 rounded-lg">
      <form className="w-full flex flex-col justify-center items-center p-2">
        <FormInput word="English" />
        <FormInput word="German" />
        <Button>Submit</Button>
      </form>
    </div>
  );
}

export default WordForm;
