import React, { Component } from "react";
import API from "../../utils/API";
import MainLogo from "../../components/MainLogo";
import FindOnlineBtn from "../../components/FindOnlineBtn";

class Shopping extends Component {
  state = {
    user: this.props.state,
    stuff: [],
    users: [],
    item: "",
    price: "",
  };


  componentDidMount() {
    console.log("shopping this.props: ", this.props);
    console.log("shopping this.state: ", this.state);
    API.getItems()
    this.getPerson();
  }

  getPerson = () => {
      API.getUsers()
      .then(res =>
        this.setState({ users: res.data, firstName: ""})
      )
        .catch(err => console.log(err));
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
            {this.state.users.map(user =>(
              <tr key={user._id}>
              <td>{user.firstName}</td>
              <td>{user.myItems}</td>
              <td><FindOnlineBtn name={user.firstName} /></td>
              </tr> 
            ))}
          </tbody>
        </table>
      </div>
    );
  };
};

export default Shopping;