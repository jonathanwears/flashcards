import React, { useState, useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import { getAllWords } from '../utils/index';

function Game() {
  const [flashcards, setFlashcards] = useState();
  const [gameStart, setGame] = useState(false);
  function startGame() {
    setGame(!gameStart);
  }

  useEffect(() => {
    async function getFlashcards() {
      const req = await getAllWords();
      setFlashcards(req);
    }
    getFlashcards();
  }, []);

  return (
    <>
      {!gameStart && <Button onClick={startGame}>Start</Button>}
      {gameStart && flashcards.map((flashcard, index) => <p key={index}>{flashcard.englishWord}</p>)}
    </>
  );
}

export default Game;
