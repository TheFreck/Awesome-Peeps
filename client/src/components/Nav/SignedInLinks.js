import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = (props) => {
	return (
		<ul className="right">
      <li>
        <div
          onClick={props.logout}
        >
          <NavLink to="/"> Logout </NavLink>
        </div>
      </li>
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
};

export default SignedInLinks;
