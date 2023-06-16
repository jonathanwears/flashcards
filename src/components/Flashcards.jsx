import React from 'react';
import Card from './Card';

function FlashCards({ words }) {
  const flashCards = words.map((word, index) => (
    <Card key={`${word}${index}`} index={index} word={word} />));

  return (
    <div className="flex flex-wrap ">
      {flashCards}
    </div>
  );
}

export default FlashCards;
