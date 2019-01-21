//----------Import external components----------
import React, { Component } from "react";
import API from "../../utils/API";
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
    
  //Add item to shoppingListItems array for Shopping page
  addToShopping = (event) => {
    event.preventDefault();
    API.getShoppingListItems({
      item: this.state.item,
      price: this.state.price,
      occasion: this.state.occasion,
      comments: this.state.comments
    })
    
    

  }
  //Share registry with another user
  shareRegistry = (event) => {
    this.setState({ shared: true } )
    event.preventDefault();
    console.log('Share with user');
    API.getUsers({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        uuid: this.state.uuid,
        shared: this.state.shared
    })
        .then((res) => {
            console.log('users data: ', res.data);
            this.getAllUsers();
        })
        .catch((err) => console.log(err));
};
//Render Friends Registry into a table
  render() {
    console.log(this.state.friends)
    return (
    <div> 
      <div className="container">
        <div className = "col s12 center-align">
          <MainLogo />
        </div>
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
                    <button onClick={this.addToShopping} type="submit" className="btn pink lighten-1 z-depth-2">
                    <Link to={"/Shopping/"}> Add to Shopping List </Link>
                    </button>
                    {/* <button onClick={this.addToShopping} type="submit" className="btn pink lighten-1 z-depth-2"><Link to={"/Shopping/"}>ADD TO SHOPPING LIST</Link></button> */}
									</td>
                    
                  <td><a href={"http://www.google.com/search?source=hp&ei=1XZBXJKpEammjwSG4KGgBQ&q=" + item.item} ><button className="btn pink lighten-1 z-depth-2">find online</button></a></td>
                </tr>
							))}
					</tbody>
      </form>
      </div>
    </div>
      
    )};
    }
export default FriendRegistry;
