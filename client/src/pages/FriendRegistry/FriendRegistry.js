//----------Import external components----------
import React, { Component } from "react";
import API from "../../utils/API";
import MainLogo from "../../components/MainLogo";
// import { Link } from "react-router-dom";
// import FindOnlineBtn from "../../components/FindOnlineBtn";
// import ResetPswd from "../../components/ResetPswd";

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
        // console.log(friendData)
        this.setState({ friends: friendData.data.myItems})
        })
      .catch((err) => console.log(err));
    };
  
  // //Add item to shoppingListItems array for Shopping page
  // addShoppingListItems = () => {
  //   API.getShoppingListItems()
  //     .then((res) => {
  //       this.setState({users: res.data})
  //     .catch((err) => console.log(err));
  //   }
      
  // };
//Render Friends Registry into a table
  render() {
    // console.log(this.state.friends)
    return (
    <div> 
      <div className="container">
        <div className = "col s12 center-align">
          <MainLogo />
        </div>
      <form className="white">
        <div>
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
                    <button onClick={(e)=>{
                      e.preventDefault();
                      API.addToShoppingList(item._id)
                    }}>Add to List</button>
									</td>
                  <td>
										<form action="http://www.google.com/search" method="get">
                   		<input type="" class="itemInput" name="q" value={item.item} />
                   		<button type="submit" id="online" target={item.item} value={item.item}>get item</button>
                 		</form>
									</td>
								</tr>
							))}
					</tbody>
        </div>
      </form>
      </div>
    </div>
      
    )};
    }
export default FriendRegistry;
