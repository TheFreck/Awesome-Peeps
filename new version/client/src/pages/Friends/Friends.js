import React, { Component } from "react";
import UserList from "../../components/UserList";
import API from "../../utils/API";
import MainLogo from "../../components/MainLogo";

class Friends extends Component {
  state = {
    savedItems: [],
    item: "",
    price: 0,
    url: "",
    pic: "",
    occasion: "",
    comments: "",
    users: [],
    user: {
      uuid: "",
      account_key: "",
      sessionId: "",
      email: "",
      name: "",
      pic: "",
      shareWithMe: [],
      shareWithOthers: [],
      myItems: [],
      notes: ""
    }
  };

  // componentDidMount() {
  //   this.getUsers();
  // }

  //Share registry with another user
  populateUsers = event => {
    event.preventDefault();
    console.log("Share with user");
    API.getUsers({
      name: this.state.name,
      uuid: this.state.uuid
    })
      .then(res => {
        console.log("users data: ", res);
        this.getAllUsers();
      })
      .catch(err => console.log(err));
  };

  renderUsers = () => {
    return this.state.users.map(save => (
      <UserList
        _id={save._id}
        key={save._id}
        uninsta
        name={save.name}
        uuid={save.uuid}
        pic={save.pic}
        selectUser={this.selectUser}
      />
    ));
  };

  render() {
    return (
      <div className="container">
        <div class="Row">
          <div class="col s12 center-align top:60px">
            <MainLogo />
          </div>
        </div>
        <br />
        <div class="Row">
          <div class="col s12">
            <h2 class="center-align">
              WHICH GREEDY BASTARD DO YOU WANT TO BUY FOR?
            </h2>
          </div>
        </div>
        <div class="Row">
          <div class="col s12 center-align">
            <UserList />
            {/* <button class="waves-effect waves-light btn-large red seeGifts">{this.populateUsers}</button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Friends;
