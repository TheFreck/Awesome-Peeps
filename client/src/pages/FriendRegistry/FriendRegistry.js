import React, { Component } from "react";
import Row from "../../components/Row";
import API from "../../utils/API";
// import RegistryHeader from "../../components/RegistryHeader"
import UserList from "../../components/UserList";
import MainLogo from "../../components/MainLogo";
import { Link } from "react-router-dom";
import FindOnlineBtn from "../../components/FindOnlineBtn";

class FriendRegistry extends Component {
  state = {
    user: {},
    myItems: {}
  };

  componentDidMount() {
    //this.props.match is the url bar and params.id is the users id
    API.getFriendsandItems(this.props.match.params.userId).then((friendData)=>{
      console.log(friendData)
      //set to state
      
    })

  }
    // API.getUserandItems(this.props.match.params.id)
    //   .then(res => this.setState({ myItems: res.data}))
    //   .catch(err => console.log(err));
  // }

  //This identifies who is logged in and populates their list with the items they want
	// userAndItems = (id) => {
	// 	API.getUserandItems(this.props.match.params.id)
	// 		.then((res) => {
	// 			console.log('this is our res fron userctrl', res.data.myItems);
	// 			this.setState({ myItems: res.data.myItems });
	// 		})
	// 		.catch((err) => console.log(err));
	// };

  render() {
    return (
      <div className="col-12">
        <h3 class="center-align" id="greedy">I'M A GREEDY BASTARD - HERE IS MY LIST</h3>
  
      <div className="container">
        <div className="card">
          <div className="card-header">
            {/* {props.item} */}
            <p>stink bombs</p>
            </div>
            <div className="card-body">
              <p>$5.99</p>
              <p>Comments go here</p>
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
    )};
    }
export default FriendRegistry;
