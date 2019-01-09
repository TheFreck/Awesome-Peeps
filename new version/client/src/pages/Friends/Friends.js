import React, { Component } from "react";
import UserList from "../../components/UserList"
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import Row from "../../components/Row";
import Nav from "../../components/Nav";



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
  }

  // componentDidMount() {
  //   this.getUsers();
  // }

//Find saved users
getAllUsers = () => {
  API.getUsers()
    .then(res =>
      this.setState({ users: res.data }) 
    )
    .catch(err => console.log(err));
  };

selectUser = (event) => {
  // console.log("This is data-id", event.target.getAttribute("data-id"))
  console.log("This is uuid value", event.target.value)
  // console.log("This is uuid name", event.target.name)
  // console.log(this.state.user.login.uuid)
  API.updateUser({
      "login.uuid": event.target.value
    })
    .then(res =>
      {console.log("Create: ", res)
        this.setState({ shareWithOthers: res.data }) }
    )
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
  ))
  }

render() {
  return (
    <div className="container bg-white">
      <div>
        <h1 className="logo">Logo Goes Hereeeeee!</h1>
      </div>
      
      <div> 
        <h1>WHICH GREEDY BASTARD DO YOU WANT TO BUY FOR?</h1>
      </div>

      <div>
        {this.renderUsers()}
      </div>
      
    </div>
    );
  }
}

export default Friends;