import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg fixed top-0 w-full z-50">
      <div className="flex-1">
        <NavLink to="/" className="btn btn-ghost normal-case text-xl">
          Compliance Dashboard
        </NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/vault" className={({ isActive }) => isActive ? 'btn btn-active' : 'btn'}>
              Evidence Vault
            </NavLink>
          </li>
          <li className="ml-2">
            <NavLink to="/requests" className={({ isActive }) => isActive ? 'btn btn-active' : 'btn'}>
              Buyer Requests
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;