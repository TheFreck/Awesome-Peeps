import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/Landing"> Home </NavLink>
      </li>
      <li>
        <NavLink to="/Create"> Wishlist </NavLink>
      </li>
      <li>
        <NavLink to="/Shopping"> Shopping List</NavLink>
      </li>
      <li>
        <NavLink to="/Friends"> Friends List</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating yellow darken-2">
          GB
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
