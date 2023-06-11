import React from 'react';

function Score({ score }) {
  return (
    <div className="text-white text-2xl bg-slate-700">
      <h2>Correct {score.correct}</h2>
      <h2>Wrong {score.wrong}</h2>
    </div>
  );
}

export default Score;
