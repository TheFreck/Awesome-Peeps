import React, { Component } from "react";
import { Link } from "react-router-dom";
import FriendBubble from "../../Images/FriendsSpeechBubble.png";
import MyBubble from "../../Images/MyListSpeechBubble.png";

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
              <div>
                <button type="submit" className="btn-friend">
                  <Link to={"/Create/"}>
                    <img
                      className="responsive-img"
                      src={MyBubble}
                      alt="My list bubble"
                    />
                  </Link>
                </button>
                <button type="submit" className="btn-friend">
                  <Link to={"/Friends/"}>
                    <img
                      className="responsive-img"
                      src={FriendBubble}
                      alt="Friends list bubble"
                    />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Landing;
