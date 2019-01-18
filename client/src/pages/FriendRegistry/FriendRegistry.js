import React, { Component } from "react";
import Row from "../../components/Row";
import API from "../../utils/API";
// import RegistryHeader from "../../components/RegistryHeader"
import UserList from "../../components/UserList";
import MainLogo from "../../components/MainLogo";
import { Link } from "react-router-dom";
import FindOnlineBtn from "../../components/FindOnlineBtn";
import ResetPswd from "../../components/ResetPswd";

class FriendRegistry extends Component {
  state = {
    user: [],
    myItems: [],
    friends: []
  };

  componentDidMount() {
    this.getFriendsandItems();
  }
    //this.props.match is the url bar and params.id is the users id
    getFriendsandItems = () => {
      API.getFriendsandItems(this.props.match.params.userId).then((friendData)=>{
        console.log(friendData)
        this.setState({ friends: friendData.data, item: "", price: "", occasion: "", comments: "" })
        })
      //   this.setState({ friends: res.data, item:"", price: "", occasion:"", comments: "" }))
      
      // .catch((err) => console.log(err));
    };
  
    
        

  render() {
    return (
      <div className="col-12">
        <h3 class="center-align" id="greedy">I'M A GREEDY BASTARD - HERE IS MY LIST</h3>
  
      <div className="container">
        <div className="card">
          <div className="card-header">
            <p>{this.state.myItems}</p>
            {/* {friends.map(friends => {this.state.friends})}  */}
            <div className="card-body">
              {/* {props.url}
              {props.price} */}
              
            </div>
            <div className="card-footer">
              <span>
                <button
                className="btn btn-info ml-1">
                {/* onClick={() => props.deleteItem(props._id)}> */}
                  Add
                </button>

                <button
                className="btn btn-info ml-1">
                {/* onClick={() => props.deleteItem(props._id)}> */}
                  Find Online
                </button>
            </span>
            </div>
      </div>
    </div>
  </div>
</div>
    )};
    }
export default FriendRegistry;
