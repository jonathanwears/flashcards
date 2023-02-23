import { create } from 'zustand';
import mockData from '../../mockData';

const useDataStore = create((set) => ({
  words: [
    ...mockData,
  ],

  setWord: (newWord) => set(({ words }) => ({
    words: [
      ...words,
      { newWord },
    ],
  })),
}));

export default useDataStore;
