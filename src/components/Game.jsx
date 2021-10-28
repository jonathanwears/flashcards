import React, { useState, useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import { getAllWords } from '../utils/index';
import Flashcard from './FlashCard/FlashCard';

function Game() {
  const [flashcards, setFlashcards] = useState();
  const [gameStart, setGame] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0);
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

  function randomise() {
    const number = Math.floor(Math.random() * flashcards.length);
    setRandomNumber(number);
  }

  return (
    <>
      {!gameStart && flashcards && <Button onClick={startGame}>Start</Button>}
      {
        gameStart
        && (
        <>
          <Flashcard word={flashcards[randomNumber]} />
          <Button onClick={randomise}>Next Word</Button>
        </>
        )
      }
    </>
  );
}

export default Game;
