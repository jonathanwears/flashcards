import React from 'react';
import Tile from '../Tile';

function FlashCards({ words }) {
  const flashCards = words.map((word, index) => (
    <Tile key={`${word}${index}`} index={index} word={word} />));

  return (
    <div className="flex">
      {flashCards}
    </div>
  );
}

export default FlashCards;
