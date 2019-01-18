import React, { Component } from "react";
import Row from "../../components/Row";
import API from "../../utils/API";
import UserList from "../../components/UserList";
import MainLogo from "../../components/MainLogo";
import { Link } from "react-router-dom";
import FindOnlineBtn from "../../components/FindOnlineBtn";
import ResetPswd from "../../components/ResetPswd";

class FriendRegistry extends Component {
  state = {
    user: this.props.state,
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
        this.setState({ friends: friendData.data.myItems})
        })
      .catch((err) => console.log(err));
    };
  
    
//Render Friends Registry into a table
  render() {
    console.log(this.state.friends)
    return (
      <div className="container">
      <form className="white">
        <h3 className="grey-text text-darken-3">I'M A GREEDY BASTARD - HERE IS MY LIST</h3>
        <thead>
          <tr>
            <th>ITEM</th>
            <th>PRICE</th>
            <th>COMMENTS</th>
            <th>ADD TO SHOPPING LIST</th>
            <th>FIND ONLINE</th>
          </tr>
        </thead>
        <tbody>
							{this.state.friends.map((item) => (
								<tr key={item._id}>
									<td>{item.item}</td>
									<td>{item.price}</td>
									<td>{item.comments}</td>
									<td>
										<button value={item._id} onClick={() => this.deleteItem(item._id)}>ADD TO SHOPPING LIST</button>
									</td>
                  <td>
										<button value={item._id} onClick={() => this.deleteItem(item._id)}>FIND ONLINE</button>
									</td>
								</tr>
							))}
					</tbody>
      </form>
      </div>
      
    )};
    }
export default FriendRegistry;
