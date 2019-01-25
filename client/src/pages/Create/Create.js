import React, { Component } from "react";
import Row from "../../components/Row";
import API from "../../utils/API";
import RegistryHeader from "../../components/RegistryHeader";
import UserList from "../../components/UserList";
class Create extends Component {
  state = {
    savedItems: [],
    item: "",
    price: 0,
    url: "",
    occasion: "",
    comments: "",
    users: [],
    search: "",
    name: "",
    myItems: [],
    notes: "",
    user: this.props.state,
    shared: false
  };
  //These load whent the page loads
  componentDidMount() {
    console.log("create this.props", this.props);
    // this.props.auth();
    this.setState({ uuid: this.state.user.uuid });
    this.userAndItems(this.state.user.uuid);
  }
  //This identifies who is logged in and populates their list with the items they want
  userAndItems = id => {
    API.getUserandItems(id)
      .then(res => {
        // console.log('this is our res fron userctrl', res.data.myItems);
        this.setState({ myItems: res.data.myItems });
      })
      .catch(err => console.log(err));
  };
  //Find all users
  getAllUsers = () => {
    API.getUsers()
      .then(res => {
        // console.log('This is res.data', res.data);
        this.setState({ users: res.data });
      })
      .catch(err => console.log(err));
  };
  //Delete item from registry (database)
  deleteItem = id => {
    API.deleteItem(id)
      // .then(res => this.getSavedItems())
      .then(res => this.userAndItems())
      .catch(err => {
        console.log(err);
      });
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  //Saves item to registry
  handleSaveItem = event => {
    event.preventDefault();
    if (this.state.item) {
      API.saveItem({
        item: this.state.item,
        price: this.state.price,
        url: this.state.url,
        occasion: this.state.occasion,
        comments: this.state.comments,
        uuid: this.state.uuid
      })
        .then(res => {
          this.userAndItems();
        })
        .catch(err => console.log(err));
    }
  };
  handleShared = () => {
    this.setState({
      shared: true
    }).then();
  };
  //Share registry with another user
  shareRegistry = event => {
    event.preventDefault();
    this.setState({ shared: true });

    // console.log('Share with user');
    API.getUsers({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      uuid: this.state.uuid,
      shared: this.state.shared
    })
      .then(res => {
        // console.log('users data: ', res.data);
        this.getAllUsers();
      })
      .catch(err => console.log(err));
  };
  selectUser = userdata => {
    // console.log('THIS IS ID', userdata.uuid);
    // event.preventDefault();
    // this.setState({ shared: event.target.value})
    API.updateUser({
      uuid: userdata.uuid,
      firstName: userdata.firstName,
      lastName: userdata.lastName
    })
      .then((res) => {
        // e.preventDefault();
      
        // alert("Your list has been shared with " + userdata.firstName);
        console.log("THIS IS RES.DATA", res.data)
       
        this.setState({ sharewithMe: res.data });
      })
      .catch(err => console.log(err));
  };
  //Value from URL input
  handleURL = event => {
    this.setState({ url: event.target.value });
  };
  //Value from Price input
  handlePrice = event => {
    this.setState({ price: event.target.value });
  };
  //Value from Occasion input
  handleOccasion = event => {
    this.setState({ occasion: event.target.value });
  };
  //Value from Comments input
  handleComments = event => {
    this.setState({ comments: event.target.value });
  };
  //updates search state to current value in search bar
  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }
  renderSaved = () => {
    if (this.state.myItems) {
      return this.state.myItems.map(save => (
        <Row
          _id={save._id}
          key={save._id}
          item={save.item}
          price={save.price}
          url={save.url}
          occasion={save.occasion}
          comments={save.comments}
          deleteItem={this.deleteItem}
          userAndItems={this.userAndItems}
        />
      ));
    }
  };
  renderUsers = () => {
    return this.state.users.map(save => (
      <UserList
        _id={save._id}
        key={save._id}
        firstName={save.firstName}
        lastName={save.lastName}
        uuid={save.uuid}
        pic={save.pic}
        sharewithMe={save.sharewithMe}
        selectUser={this.selectUser}
      />
    ));
  };
  render() {
    if (this.state.shared) {
      return (
        <div className="container">
          <form className="most-headers">
            <h4>
              <u>Who do you want to share your list with?</u>
            </h4>
            <div className="user-button">{this.renderUsers()}</div>
          </form>
        </div>
      );
    } else {
      return (
        <div className="container">
          <form>
            <h5 className="most-headers">
              <u>Create Your Registry!</u>
            </h5>
            <br />
            <div className="form-group">
              <label htmlFor="item">
                <h6>Item</h6>
              </label>
              <input
                onChange={this.handleChange}
                name="item"
                value={this.state.item}
                type="text"
                className="form-control"
                id="item"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">
                <h6>Price</h6>
              </label>
              <input
                onChange={this.handleChange}
                name="price"
                value={this.state.price}
                type="text"
                className="form-control"
                id="price"
              />
            </div>
            <div className="form-group">
              <label htmlFor="url">
                <h6>URL</h6>
              </label>
              <input
                onChange={this.handleChange}
                name="url"
                value={this.state.url}
                type="text"
                className="form-control"
                id="url"
                placeholder="enter url if known"
              />
            </div>
            <div className="form-group">
              <label htmlFor="occasion">
                <h6>Occasion</h6>
              </label>

              <input
                onChange={this.handleChange}
                name="occasion"
                value={this.state.occasion}
                type="text"
                className="form-control"
                id="occasion"
              />
            </div>
            <div className="form-group">
              <label htmlFor="comments">
                <h6>Comments</h6>
              </label>
              <input
                onChange={this.handleChange}
                name="comments"
                value={this.state.comments}
                type="text"
                className="form-control"
                id="comments"
              />
            </div>
            <br />
            <button
              onClick={this.handleSaveItem}
              type="submit"
              className="btn pink lighten-1 z-depth-2"
            >
              Add To Registry
            </button>
            <button
              onClick={this.shareRegistry}
              type="submit"
              className="btn pink lighten-1 z-depth-2"
            >
              Share Registry
            </button>
          </form>
          <form className="registry-form">
            <RegistryHeader />
            <div>{this.renderSaved()}</div>
          </form>
        </div>
      );
    }
  }
}

export default Create;
