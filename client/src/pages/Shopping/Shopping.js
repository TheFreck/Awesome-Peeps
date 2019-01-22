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
  };


  componentDidMount() {
    console.log("shopping this.props: ", this.props);
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
               <td><NevermindBtn name="Nevermind" click={() => console.log("click")} /></td>
              </tr> 
            ))}
          </tbody>
      </div>
    );
  };
};

export default Shopping;