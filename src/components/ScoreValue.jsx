import React from 'react';

function ScoreValue({ title, value }) {
  return (
    <h2
      className=" text-white text-4xl lg:text-5xl"
    >
      {title} {value}
    </h2>
  );
}

export default ScoreValue;
