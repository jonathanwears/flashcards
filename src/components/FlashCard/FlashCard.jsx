import React from 'react';
import Tile from '../Tile';

function FlashCard({ word, isGame }) {
  // have a ref to disable edit button

  return (
    <Tile
      word={word}
    />
  );
}

export default FlashCard;
