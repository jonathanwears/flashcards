import React, { useState, useEffect } from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { getAllWords } from '../utils/server/index';
import Score from '../components/game/Score';
import GameUI from '../components/game/GameUI';

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
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            height="80vh"

          >
            <GameUI randomise={randomise} card={flashcards[randomNumber]} />
            <Score />
          </Flex>
        )

      }

    </>
  );
}

export default Game;
