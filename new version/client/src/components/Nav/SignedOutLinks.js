import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
	return (
		<ul className="right">
			<li>
				<NavLink to="/Signup"> Sign Up</NavLink>
			</li>
			<li>
				<NavLink to="/Login"> Login </NavLink>
			</li>
		</ul>
	);
};

export default SignedOutLinks;
