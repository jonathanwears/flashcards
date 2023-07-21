import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Flashcards from '../src/components/Flashcards';

describe('flashcard changes langauge word on click', () => {
  test('word should go from german to english and back', async () => {
    const user = userEvent.setup();
    const words = [{
      englishWord: 'Morning',
      germanWord: 'Morgen',
    }];
    render(<Flashcards words={words} />);
    const germanWord = screen.getByRole('button', { name: 'Morgen' });
    await user.click(germanWord);
    const englishWord = screen.getByRole('button', { name: 'Morning' });
    expect(englishWord).toBeTruthy();
    await user.click(englishWord);
    expect(germanWord).toBeTruthy();
  });
});
