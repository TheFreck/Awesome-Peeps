import React, { Component } from "react";
import API from "../../utils/API";
import FindOnlineBtn from "../../components/FindOnlineBtn";
import NevermindBtn from "../../components/NevermindBtn";

class Shopping extends Component {
  state = {
    user: this.props.state,
    users: [],
    item: "",
    price: "",
    shoppingItems: [],
    friends: [],
    shoppingListItems: []
  };

  componentDidMount() {
    console.log("shopping this.props: ", this.props);
    this.getShoppingListItems();
    this.getFriendsandItems();
    this.getPerson();
  }

  getShoppingListItems = () => {
    API.getFriendsandItemsTwo()
      .then(itemData => {
        console.log("itemData: ", itemData);
        console.log(
          "userItem data: ",
          itemData.data.shoppingListItems.userItem
        );
        this.setState({ shoppingItems: itemData.data.shoppingListItems });
        this.getItemDetails(itemData.data._id);
      })
      .catch(err => console.log(err));
  };

  getFriendsandItems = () => {
    API.getFriendsandItems(this.props.state)
      .then(friendData => {
        console.log("this is friendDAta: ", this.props.state);
        this.setState({ friends: friendData.data.shoppingListItems });
      })
      .catch(err => console.log(err));
  };

  getPerson = () => {
    API.getUsers()
      .then(res => {
        this.setState({ users: res.data, firstName: "" });
      })
      .catch(err => console.log(err));
  };

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [name]: value
      }
    });
    this.props.updateState({
      ...this.state,
      key: name,
      value: value
    });
  };
  deleteItem = id => {
    API.deleteItem(id)
      .then(res => this.getShoppingListItems())
      .catch(err => console.log(err));
  };

  render() {
    console.log("this is this.state.friends: ", this.state.friends);
    let name = this.state.friends;
    return (
      <div className="container">
        <div className="most-headers">
          <u> THIS Is What You Finally Decided On?!</u>
          <table className="responsive-table striped highlight">
            <thead className="table-head">
              <tr>
                <th>GREEDY BASTARD</th>
                <th>ITEM</th>
                <th>PRICE</th>
                <th>OCCASION</th>
                <th>COMMENTS</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {this.state.shoppingItems.map(item => (
                <tr key={item._id}>
                  <td>{item.userItem.firstName}</td>
                  <td>{item.item}</td>
                  <td>{item.price}</td>
                  <td>{item.occasion}</td>
                  <td>{item.comments}</td>
                  <td>
                    <FindOnlineBtn name={item.item} />
                  </td>
                  <td>
                    <button
                      className="btn pink lighten-1 z-depth-2"
                      onClick={() => this.deleteItem(item._id)}
                    >
                      Purchase
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Shopping;
