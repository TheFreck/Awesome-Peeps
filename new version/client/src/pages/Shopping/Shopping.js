import React, { Component } from "react";
import API from "../../utils/API";
// import Nav from "../../components/Nav";
import MainLogo from "../../components/MainLogo";
// import DeleteBtn from "../../components/DeleteBtn";

class Shopping extends Component {
  state = {
    stuff: [],
    users: [],
    item: "",
    price: "",
  };

  componentDidMount() {
    this.getItems()
    this.getPerson();
  }

  getItems = () => {
    API.getItems()
      .then(res =>
        this.setState({ myItems: res.data.myItems})
      )
      .catch(err => console.log(err));
  };

  getPerson = () => {
      API.getUsers()
      .then(res =>
        this.setState({ users: res.data, firstName: ""})
      )
        .catch(err => console.log(err));
  }

  deleteItem = id => {
    API.deleteItem(id)
      .then(res => this.getItems())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div> 
        <div class="col s12 center-align top:60px">
          <MainLogo />
        </div>
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
            {this.state.stuff.map(item => (
              <tr key={item._id}>
                <td>{item.name} </td>
                <td>{item.item}</td>
                <td>{item.price}</td>
                <td>{item.occasion}</td>
                <td>{item.comments}</td>
                <td>
                  <button onClick={() => this.deleteItem(item._id)}>Delete</button>
                  <button onClick={() => this.deleteItem(item._id)}>Buy it!</button>
                </td>         
              </tr>
          ))}
            {this.state.users.map(user =>(
               <tr key={user._id}>
               <td>
                 {user.firstName}
               </td>
               </tr> 
            ))}
          </tbody>
      </div>
    );
  };
};

export default Shopping;