import { create } from 'zustand';
import mockData from '../../mockData';

const dataStore = create((set) => ({
  words: [
    ...mockData,
  ],

  setWord: (newWord) => set(({ words }) => ({
    words: [
      ...words,
      { ...newWord },
    ],
  })),

  replaceWord: (index, word) => set(({ words }) => (
    {
      words: [
        ...words,
        {
          germanWord: word.germanWord,
          englishWord: word.englishWord,
        },
      ],
    })),
}));

export default dataStore;
