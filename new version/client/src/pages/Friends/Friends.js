import React, { Component } from "react";
import FriendBtn from "../../components/FriendBtn";
import API from "../../utils/API";
import MainLogo from "../../components/MainLogo";



class Friends extends Component {
  state = {
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


render() {
  return (
  
    <div className="container">
      <div class="Row">
        <div class="col s12 center-align top:60px">
          <MainLogo />
        </div>
      </div>
      <br></br>
      <div class="Row">
        <div class="col s12">
          <h2 class="center-align">WHICH GREEDY BASTARD DO YOU WANT TO BUY FOR?</h2>
        </div> 
      </div>
      <div class="Row">
        <div class="col s12 center-align">
          <FriendBtn />
          {/* <button data-uuid={this.state.uuid} class="waves-effect waves-light btn-large red seeGifts">{this.}</button> */}
        </div>
      </div>

    </div>

  );
  }
}

export default Friends;