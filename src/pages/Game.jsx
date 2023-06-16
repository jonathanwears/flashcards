import React, { useState } from 'react';
import mockData from '../../mockData';
import Card from '../components/Card';
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
    <div className="grid grid-cols-9 auto-rows-fr">
      <div className="md:col-span-3 md:row-span-3 md:row-start-2 md:col-start-2 lg:col-start-2 lg:col-span-2">
        <Card
          word={mockData[count]}
        />
      </div>
      <div className="flex col-start-5 row-start-3 col-span-2 justify-center items-center lg:col-start-4">
        <Button
          onClick={handleOnClick}
        >
          Next Card
        </Button>
      </div>
      <div className="md:row-span-2 md:col-span-2 md:row-start-2 lg:col-span-2 lg:row-span-2 lg:col-start-7 lg:row-start-2">
        <Score
          score={score}
        />
      </div>
      <div className="md:row-start-6 md:col-start-2 md:col-span-3 lg:col-span-2 lg:col-start-2 lg:justify-center lg:mx-8">
        <GameButtons
          onClick={handleAnswer}
        />
      </div>
    </div>
  );
}

export default Game;
