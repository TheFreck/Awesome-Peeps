//----------Import external components----------
import React, { Component } from "react";
import FriendBtn from "../../components/FriendBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import MainLogo from "../../components/MainLogo";

//----------Friends component----------
class Friends extends React.Component {
  
  state = {
<<<<<<< HEAD
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
=======
    savedItems: [],
    item: "",
    price: 0,
    url: "",
    occasion: "",
    comments: "",
    users: [],
    name: "",
    myItems: [],
    notes: "",
    user: this.props.state
    
  }

  componentDidMount() {
    // this.setState({ uuid: this.state.uuid })
    // this.userAndItems(this.state.uuid);
  }

  User = (id) => {
    API.getUser(id)
    .then(res =>{
      console.log("this is our res fron userctrl", res)
      this.setState({ myUsers: res.data.myUsers })
    }

    )
    .catch(err => console.log(err));
  };

  renderUsers = () => {
    return this.state.User.map(save => (
      <FriendBtn
        name={save.name}
        selectUser={this.selectUser}
      />
    ));
  };

>>>>>>> master

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
<<<<<<< HEAD
      <div>
      {users.map(users => <button type="submit" className="btn btn-info"><Link to={"/FriendRegistry/" + users._id}>{users.firstName + users.lastName}</Link></button>)}
      
      
      
=======
      <div class="Row">
        <div class="col s12 center-align">
          <FriendBtn />
          {/* <button data-uuid={this.state.uuid} class="waves-effect waves-light btn-large red seeGifts">{this.}</button> */}
        </div>
>>>>>>> master
      </div>
      </div>
      </div>
    )
  }
}

export default Friends;

