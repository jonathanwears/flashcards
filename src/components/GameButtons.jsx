import React from 'react';
import GameButton from './GameButton';

function GameButtons({ onClick }) {
  return (
    <div className="bg-slate-700">
      <GameButton
        name="correct"
        onClick={onClick}
        title="Correct"
      />
      <GameButton
        name="wrong"
        onClick={onClick}
        title="Wrong"
      />
    </div>
  );
}

export default GameButtons;
