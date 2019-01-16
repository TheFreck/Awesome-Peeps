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
      <div class="container">
        <div class="tableContainer">
          <div class="row">
            <div class="col-12">
                  <br></br>
                    <h3 class="center-align" id="greedy">I'M A GREEDY BASTARD - HERE IS MY LIST</h3>
                  <br></br>
              </div>
          </div>      
        </div>   
        </div>
    );
  }
}


export default FriendRegistry;
