import React from 'react';
import classNames from 'classnames';

function GameButton({ onClick, title, name }) {
  const className = classNames('rounded-full h-24 w-24 m-2', {
    'bg-green-400 hover:bg-green-200': name === 'correct',
    'bg-red-400 hover:bg-red-200': name === 'wrong',
  });
  return (
    <button
      className={className}
      type="button"
      onClick={onClick}
      name={name}
    >
      {title}
    </button>

  );
}

export default GameButton;
