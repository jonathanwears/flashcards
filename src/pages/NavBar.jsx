import React from 'react';
import NavLink from '../components/NavLink';

function NavBar() {
  return (
    <div className="flex flex-row justify-center items-center w-full p-3 bg-slate-700 ">
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
