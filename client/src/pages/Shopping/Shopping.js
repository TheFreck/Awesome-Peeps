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
      console.log("itemData: ", itemData)
      this.setState({ shoppingItems: itemData.data.shoppingListItems })
      for(let i=0; i<this.state.shoppingItems.length; i++){
        this.getItemDetails(this.state.shoppingItems[i]);
      }
    })
    .catch((err) => console.log(err))
  };

  getItemDetails = id => {
    console.log("getItemDetails id: ", id);
    API.getItem(id)
    .then(res => {
      console.log("getItemDetails res: ", res);
    })
  }

  getPerson = () => {
      API.getUsers()
      .then(res => {
        this.setState({ users: res.data, firstName: ""})
      })
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
            {this.state.shoppingItems.map(item => (
								<tr key={item._id}>
									<td>{item.item}</td>
									<td>{item.price}</td>
                  <td>{item.occasion}</td>
									<td>{item.comments}</td>
                  <td>
										<FindOnlineBtn name={item.item} />
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