import { useState } from 'react';

// prop 'type' is either 'word' or 'user'
function useUpdateForm(type) {
  const word = {
    englishWord: '',
    germanWord: '',
  };

  const user = {
    email: '',
    password: '',
  };

  const [value, setNewValue] = useState(() => {
    let values = '';
    if (type === 'word') {
      values = word;
    }
    if (type === 'user') {
      values = user;
    }
    return values;
  });

  return {
    value,
    setNewValue,
    inputChange: {
      value,
      onChange: (event) => {
        setNewValue((prev) => (
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
