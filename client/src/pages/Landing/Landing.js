import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Landing extends Component {
  render() {
    // function friendsRegistry() {
    //   location.href = "/Friends";
    // }
    // function myRegistry() {
    //   location.href = "/Create";
    // }
    return (
      <div className="showcase-container">
        <header className="main-header">
          <div className="row">
            <div className="col s12 m12 center">
              <h4>What Do You Bastards Want?</h4>
              <button>
                <Link to="/Create" />
              </button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Landing;
