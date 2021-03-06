//----------Import external components----------
import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";

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
        <form className="most-headers">
          <div>
            <h3>
              <u> Who's The Lucky Bastard You're Buying For?</u>
            </h3>
          </div>
          <div>
            {users.map(users => (
              <button key={users._id} type="submit">
                <Link className="btn" to={"/FriendRegistry/" + users._id}>
                  {users.firstName + "  " + users.lastName}
                </Link>
              </button>
            ))}
          </div>
        </form>
      </div>
    );
  }
}

export default Friends;
