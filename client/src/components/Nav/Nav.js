import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
// import SignedOutLinks from "./SignedOutLinks";
import Mainlogo from "../../Images/GreedyBastardsSm.png";

const Nav = props => {
  return (
    <nav className="nav-wrapper blue darken-2">
      <div className="container">
        {/* className is a Materialize classs*/}
        <button type="submit" className="brand-logo">
          <Link to={"/Landing/"}>
            <img className="responsive-img" src={Mainlogo} alt="main logo" />
          </Link>
        </button>
<<<<<<< HEAD
        <SignedInLinks logout={props.goodbye} />
=======
        <SignedInLinks 
          logout={props.goodbye}
          userId={props.userId}
        />
>>>>>>> 64503d2260f17f6c64cfc4a3803eb9c5da5b4498
        {/* <SignedOutLinks /> */}
      </div>
    </nav>
  );
};

export default Nav;
