import React from 'react';
import ScoreValue from './ScoreValue';

function Score({ score }) {
  return (
    <div className=" flex flex-col justify-center items-center bg-slate-700 h-full rounded-xl">
      <div>
        <ScoreValue
          title="Correct"
          value={score.correct}
        />
        <ScoreValue
          title="Wrong"
          value={score.wrong}
        />
      </div>
    </div>
  );
}

export default Score;
