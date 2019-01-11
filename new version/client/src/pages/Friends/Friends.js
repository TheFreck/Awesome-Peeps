import React, { Component } from "react";
import UserList from "../../components/UserList";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Nav from "../../components/Nav";
import MainLogo from "../../components/MainLogo";

class Friends extends Component {
  state = {
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

  //Find saved users
  getAllUsers = () => {
    API.getUsers()
      .then(res => this.setState({ users: res.data }))
      .catch(err => console.log(err));
  };

  selectUser = event => {
    // console.log("This is data-id", event.target.getAttribute("data-id"))
    console.log("This is uuid value", event.target.value);
    // console.log("This is uuid name", event.target.name)
    // console.log(this.state.user.login.uuid)
    API.updateUser({
      "login.uuid": event.target.value
    })
      .then(res => {
        console.log("Create: ", res);
        this.setState({ shareWithOthers: res.data });
      })
      .catch(err => console.log(err));
  };

  renderUsers = () => {
    return this.state.users.map(save => (
      <UserList
        _id={save._id}
        key={save._id}
        name={save.name}
        uuid={save.uuid}
        pic={save.pic}
        selectUser={this.selectUser}
      />
    ));
  };

  render() {
    return (
      <div className="container bg-white">
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
            <h3>UsEr bUtToNs gO heRe</h3>
            {this.renderUsers()}
          </div>
        </div>
      </div>
    );
  }
}

export default Friends;
