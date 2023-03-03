import React from 'react';
import Tile from '../Tile';

function FlashCard({ word, isGame, index }) {
  // have a ref to disable edit button

  return (
    <Tile
      word={word}
      index={index}
    />
  );
}

export default FlashCard;
