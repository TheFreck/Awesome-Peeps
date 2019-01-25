//----------Import external components----------
import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import MainLogo from "../../components/MainLogo";

//----------Friends component----------
class Friends extends Component {
  state = {
    users: [],
    uuid: "",
    user: this.props.state
  };

  componentDidMount() {
    this.getUsers();
  }
  //Fetching firstName and lastName of users from the db
  getUsers = () => {
    API.getUsers().then(res =>
      this.setState({ users: res.data, firstName: "", lastName: "" })
    );
  };

  //-------------Rendering components to the Friends page------------------------
  render() {
    let users = this.state.users;
    console.log("friends users: ", users);
    return (
      <div className="container">
        <div className="Row">
          <div className="col s12 center-align top:60px">
            <MainLogo />
          </div>
          <div>
            <h3>WHICH GREEDY BASTARD DO YOU WANT TO BUY FOR?</h3>
          </div>
          <div>
            {users.map(users => (
              <button key={users._id} type="submit" className="btn btn-info">
                <Link to={"/FriendRegistry/" + users._id}>
                  {users.firstName + "  " + users.lastName}
                </Link>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Friends;
