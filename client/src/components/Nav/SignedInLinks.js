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
<<<<<<< HEAD
    </ul>
  );
=======
			<li>
				<NavLink to="/Landing"> Home </NavLink>
			</li>
			<li>
				<NavLink to="/Create"> Wishlist </NavLink>
			</li>
			<li>
				<NavLink to={`/Shopping/${props.userId}`}> Shopping List</NavLink>
			</li>
			<li>
				<NavLink to="/Friends"> Friends List</NavLink>
			</li>
			<li>
				<NavLink to={`/FriendRegistry/${props.userId}`}> Friends Registry</NavLink>
			</li>
			<li>
				<NavLink to="/Profile" className="btn btn-floating yellow darken-2">
					GB
				</NavLink>
			</li>
		</ul>
	);
>>>>>>> 64503d2260f17f6c64cfc4a3803eb9c5da5b4498
};

export default SignedInLinks;
