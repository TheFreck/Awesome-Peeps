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
        this.setState({ shoppingItems: itemData.data.shoppingListItems });
        this.getItemDetails(itemData.data._id);
      })
      .catch(err => console.log(err));
  };

  getFriendsandItems = () => {
    API.getFriendsandItems(this.props.match.params.userId)
      .then(friendData => {
        console.log("this is friendDAta: ", friendData);
        this.setState({ friends: friendData.data.firstName });
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
  // deleteItem = id => {
  //   API.deleteItem(id)
  //     .then(res => this.getItems())
  //     .catch(err => console.log(err));
  // };

  render() {
    console.log("this is this.state.friends: ", this.state.friends);
    let name = this.state.friends;
    return (
      <div className="container">
        <table className="most-headers">
          <thead>
            <tr>
              <th>GREEDY BASTARD</th>
              <th>ITEM</th>
              <th>PRICE</th>
              <th>OCCASION</th>
              <th>COMMENTS</th>
            </tr>
          </thead>
          <tbody>

            {this.state.shoppingItems.map(item => (
<<<<<<< HEAD
              <tr key={item._id}>
                <td>{name}</td>
                <td>{item.item}</td>
                <td>{item.price}</td>
                <td>{item.occasion}</td>
                <td>{item.comments}</td>
                <td>
                  <FindOnlineBtn name={item.item} />
                </td>
              </tr>
=======
								<tr key={item._id}>
                  <td>{name}</td>
									<td>{item.item}</td>
									<td>{item.price}</td>
                  <td>{item.occasion}</td>
									<td>{item.comments}</td>

                  <td>
										<FindOnlineBtn name={itemData.itemData} />
									</td>
                  </tr>
>>>>>>> ebc799c7c9bfbd54cf8f613d028c523dedf5ecfd
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Shopping;
