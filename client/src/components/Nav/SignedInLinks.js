import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/Landing"> Home </NavLink>
      </li>
      <li>
        <NavLink to="/Create"> My Wishlist </NavLink>
      </li>
      <li>
        <NavLink to="/Friends"> Friend List</NavLink>
      </li>
      <li>
        <NavLink to="/Shopping"> Shopping List</NavLink>
      </li>
      <li>
        <NavLink to="/Profile" className="btn btn-floating yellow darken-2">
          GB
        </NavLink>
      </li>
      <li>
        <div onClick={props.logout}>
          <NavLink to="/"> Logout </NavLink>
        </div>
      </li>
	
		</ul>
	);
};

export default SignedInLinks;
