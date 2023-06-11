import React, { useState } from 'react';
import mockData from '../../mockData';
import Card from '../components/FlashCard/Card';
import Button from '../components/Button';
import Score from '../components/Score';
import GameButtons from '../components/GameButtons';

function Game() {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState({ correct: 0, wrong: 0 });

  const handleOnClick = () => {
    if (count <= mockData.length - 2) {
      const newCount = count + 1;
      setCount(newCount);
    }
  };
  const handleAnswer = (event) => {
    const target = event.target.name;
    const newValue = score[target] + 1;
    const newAns = {
      ...score,
      [target]: newValue,
    };
    setScore(newAns);
  };

  return (
    <div className="grid grid-cols-5">
      <Card
        word={mockData[count]}
      />
      <Button
        onClick={handleOnClick}
      >
        Next Card
      </Button>
      <Score
        score={score}
      />
      <GameButtons
        onClick={handleAnswer}
      />
    </div>
  );
}

export default Game;
