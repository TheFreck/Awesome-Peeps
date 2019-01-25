import React, { Component } from "react";
import API from "../../utils/API";
import MainLogo from "../../components/MainLogo";
import FindOnlineBtn from "../../components/FindOnlineBtn";
import NevermindBtn from "../../components/NevermindBtn";

class Shopping extends Component {
  state = {
    user: this.props.state,
    users: [],
    item: "",
    price: "",
    shoppingItems:[],
    friends:[],
    shoppingListItems:[]
  };


  componentDidMount() {
    console.log("shopping this.props: ", this.props);
    this.getShoppingListItems();
  }
  getShoppingListItems = () => {
    API.getFriendsandItemsTwo().then((itemData) =>{
      console.log(itemData)
      this.setState({ shoppingItems: itemData.data.shoppingListItems })
    })
    .catch((err) => console.log(err))
  };

  getPerson = () => {
      API.getUsers()
      .then(res =>
        this.setState({ users: res.data, firstName: ""})
      )
        .catch(err => console.log(err));
  }

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
    })
  }
  // deleteItem = id => {
  //   API.deleteItem(id)
  //     .then(res => this.getItems())
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      <div> 
        <div className="col s12 center-align top:60px">
          <MainLogo />
        </div>
        <table>
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
            {this.state.shoppingItems.map(itemData => (
								<tr key={itemData._id}>
                  <td>{itemData.screenName}</td>
									<td>{itemData.item}</td>
									<td>{itemData.price}</td>
                  <td>{itemData.occasion}</td>
									<td>{itemData.comments}</td>
                  <td>
										<FindOnlineBtn name={itemData.itemData} />
									</td>
                  </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
};

export default Shopping;