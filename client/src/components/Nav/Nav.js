import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
// import SignedOutLinks from "./SignedOutLinks";
import Mainlogo from "../../Images/GreedyBastards2.png";

const Nav = (props) => {
  return (
    <nav
      className="nav-wrapper blue darken-2"
    >
      <div className="container">
        {/* className is a Materialize classs*/}
        <button type="submit" className="brand-logo">
          <Link to={"/Landing/"}>
            {/* <img className="responsive-img" src={Mainlogo} alt="main logo" /> */}
          </Link>
        </button>
        <SignedInLinks 
          logout={props.goodbye}
        />
        {/* <SignedOutLinks /> */}
      </div>
    </nav>
  );
};

export default Nav;
