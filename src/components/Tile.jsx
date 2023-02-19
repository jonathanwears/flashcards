import React from 'react';

function Tile({ children, key, bg, click }) {
  return (
    <div
      className="bg-black"
      onClick={click}
    >
      {children}
    </div>

  );
}

export default Tile;
