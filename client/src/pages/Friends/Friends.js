//----------Import external components----------
import React, { Component } from "react";
import UserList from "../../components/UserList"
import API from "../../utils/API";
import { Link } from "react-router-dom";
import MainLogo from "../../components/MainLogo";

//----------Friends component----------
class Friends extends React.Component {
  
  state = {
    users:[],
    uuid: "",
    user: this.props.state
  };
  

  componentDidMount() {
    this.getUsers();
  }
//Fetching firstName and lastName of users from the db
  getUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({ users: res.data, firstName:"", lastName:""}))
  }

  nextPath(path) {
    // this.state.users(path);
  }
  //-------------Rendering components to the Friends page------------------------
  render(){
    let users = this.state.users
    return (
      <div className="container">
      <div class="Row">
      <div class="col s12 center-align top:60px">
        <MainLogo />
      </div>
      <div>
        <h3>WHICH GREEDY BASTARD DO YOU WANT TO BUY FOR?</h3>
      </div>
      <div>
      {users.map(users => <button type="submit" className="btn btn-info"><Link to={"/users/" + users._id}>{users.firstName + users.lastName}</Link></button>)}
      
      
      
      </div>
      </div>
      </div>
    )
  }
}

export default Friends;
