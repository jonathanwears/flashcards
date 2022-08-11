import { useState } from 'react';

function useUpdateForm() {
  const [newWord, setNewWord] = useState({
    englishWord: '',
    germanWord: '',
  });

  return {
    newWord,
    setNewWord,
    inputChange: {
      newWord,
      onChange: (event) => {
        setNewWord((prev) => (
          {
            ...prev,
            [event.target.name]: event.target.value,
          }
        ));
      },
    },
  };
}

export default useUpdateForm;
