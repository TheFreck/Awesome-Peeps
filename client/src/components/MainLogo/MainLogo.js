import React from "react";
import logo from "../../Images/GreedyBastards2.png"; // Tell Webpack this JS file uses this image

// console.log(logo); // Greedy Bastages main logo

function Header() {
  // Import result is the URL of the logo
  return (
    <img
      className="responsive-img"
      src={logo}
      alt="Logo"
      width="500px"
      align="middle"
    />
  );
}

export default Header;
