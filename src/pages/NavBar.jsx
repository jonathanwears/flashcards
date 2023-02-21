import React from 'react';
import NavLink from '../components/FlashCard/navBar/NavLink';

function NavBar() {
  return (
    <div className="flex flex-row justify-center items-center w-full p-3 bg-blue-300 ">
      <NavLink
        link="Game"
      />
      <NavLink
        link="Database"
      />
    </div>
  );
}

export default NavBar;
