import React from 'react';
import { Link } from 'react-router-dom';

function NavLink({ link }) {
  return (
    <Link to={`/${link}`}>
      <div className="hover:bg-slate-400 -skew-y-3 p-1 rounded-md">
        <h2
          className="m-2 text-4xl font-black skew-y-3 text-slate-700 "
        >
          {link}
        </h2>
      </div>
    </Link>
  );
}

export default NavLink;
