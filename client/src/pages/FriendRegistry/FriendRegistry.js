//----------Import external components----------
import React, { Component } from "react";
import API from "../../utils/API";
import MainLogo from "../../components/MainLogo";
// import { Link } from "react-router-dom";
import FindOnlineBtn from "../../components/FindOnlineBtn";
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
        console.log(friendData)
        this.setState({ friends: friendData.data.myItems })
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
    console.log(this.props)
    return (
    <div> 
      <div className="container">
        <div className = "col s12 center-align">
          <MainLogo />
        </div>
      <form className="white">
        <div>
        <h3 className="grey-text text-darken-3">I'M A GREEDY BASTARD - HERE IS MY LIST</h3>
        <table>
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
                    API.addToShoppingList(item)
                    API.removeFromGeneralList(item._id)
                    console.log("this is after it is added before the switch")
                  }}>Add to List</button>
                </td>
                <td>
                  <FindOnlineBtn name={item.item} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </form>
      </div>
    </div>
      
    )};
    }
export default FriendRegistry;
