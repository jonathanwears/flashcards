import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Link to="/database">Database</Link>
      <Link to="/game">Game</Link>
    </div>
  );
}

export default Home;
