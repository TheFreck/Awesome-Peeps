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
      
      <div className="container">
      <div class="Row">
        <div class="col s12 center-align top:60px">
          <MainLogo />
        </div>
      </div>
      <br></br>
      <div class="container">
       <div class="tableContainer">
        <div class="row">
          <div class="col-s12">
            <table class="centered responsive-table z-depth-5">
              <thead>
              <br></br>
                <h3 class="center-align" id="greedy">I'M A GREEDY BASTARD - HERE IS MY LIST</h3>
              <br></br>
              <tr>
                <th>ITEM</th>
                <th>PRICE</th>
                <th>COMMENTS</th>
                <th>ADD TO SHOPPING LIST</th>
                <th>FIND ONLINE</th>
              </tr>
              </thead>
                <tbody>
                  <tr>
                   {/* {this.state.user.myItems.map(item => (
                     <tr key={item._id}>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.comments}</td>
                      <td><button>Add</button></td> */}
                      {/* <td><form action="http://www.google.com/search" method="get">
                      <input type="text" class="itemInput" name="q" value= {this.props.item} />
                      <input type="submit" id="online" target="_blank" value="Find Me Online" />
                      </form></td>
                      </tr>
                   ))} */} 
                </tr> 
                </tbody>
            </table>
          </div>
        </div>
       </div>
      </div>
    </div>
    );
  }
}


export default FriendRegistry;
