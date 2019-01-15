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
    url: "",`
    occasion: "",
    comments: "",
    users: [],
    search: "",
    // uuid: "",
    // account_key: "",
    // sessionId: "",
    // email: "",
    name: "",
    // shareWithMe: [],
    // shareWithOthers: [],
    myItems: [],
    notes: "",
    user: this.props.state,
    shared: []
  }


  //These load whent the page loads
  componentDidMount() {   
    this.setState({ uuid: this.state.user.uuid })
    this.userAndItems(this.state.user.uuid);
    // this.getSavedItems();
    // this.getAllUsers();
  }


  //This identifies who is logged in and populates their list with the items they want
  userAndItems = (id) => {
    API.getUserandItems(id)
    .then(res =>{
      console.log("this is our res fron userctrl", res.data.myItems)
      this.setState({ myItems: res.data.myItems })
    })
    .catch(err => console.log(err));
  };

  //Find all users
  getAllUsers = () => {
    API.getUsers()
    .then(res => {
      console.log("This is res.data", res.data)
      this.setState({ users: res.data })
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
    
    
  //Share registry with another user
  shareRegistry = event => {
    event.preventDefault();
    console.log("Share with user");
    API.getUsers({
      name: this.state.firstName,
      uuid: this.state.uuid
    })
      .then(res => {
        console.log("users data: ", res.data);
        this.getAllUsers();
      })
      .catch(err => console.log(err));
  };

  selectUser = id => {
    console.log("THIS IS ID", id)
    // event.preventDefault();
    // this.setState({ shared: event.target.value}) 
    API.updateUser({
      uuid: this.state.uuid,
      name: this.state.user.firstName,
      sharedwithMe: this.state.user.sharedwithMe
      // uuid: event.target.value
    })
      .then(res => {
        console.log("Create: ");
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
    this.setState({ search: event.target.value.substr(0, 20)});
  }


  handleUser = (event) => {
    this.setState({ shared: event.target.value });
    this.selectUser();
  };
  


  renderSaved = () => {
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
  };

  renderUsers = () => {
    return this.state.users.map(save => (
      <UserList
        _id={save._id}
        key={save._id}
        name={save.screenName}
        uuid={save.uuid}
        pic={save.pic}
        sharewithMe={save.sharewithMe}
        selectUser={this.selectUser}
      />
    ));
  };



  // renderUsers = () => {
  //   let filteredUser = this.state.users.filter(
  //     (user) => {
  //       return user.name.indexOf(this.state.search) !== -1;
  //     }
  //   )
  //   return this.state.users.map(save => (
  //     <UserList
  //       _id={save._id}
  //       key={save._id}
  //       name={save.screenName}
  //       uuid={save.uuid}
  //       pic={save.pic}
  //       selectUser={this.selectUser}
  //     />
  //   ));
  // };


  render() {
    return (
      <div className="container bg-white">
        <h1 className="text-">Create Your Registry</h1>
        <form>
          <div className="form-group">
            <label htmlFor="item">
              <h4>Item</h4>
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
              <h4>Price</h4>
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
              <h4>URL</h4>
            </label>
            <input
              onChange={this.handleChange}
              name="url"
              value={this.state.url}
              type="text"
              className="form-control"
              id="url"
            />
          </div>
          <div className="form-group">
            <label htmlFor="occasion">
              <h4>Occasion</h4>
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
              <h4>Comments</h4>
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
          <button
            onClick={this.handleSaveItem}
            type="submit"
            className="btn btn-info"
          >
            Add To Registry
          </button>
          <button
            onClick={this.shareRegistry}
            type="submit"
            className="btn btn-info"
          >
            Share Registry
          </button>
        </form>
        <br />
        <RegistryHeader />
        <div>{this.renderSaved()}</div>
        <h4>Who do you want to share your list with?</h4>
        <UserList />
        {/* <input
              onChange={this.handleSearch}
              name="search"
              value={this.state.search}
              type="text"
              className="form-control"
              id="search"
              ></input> */}
        <div>{this.renderUsers()}</div>
        
      </div>
    );
  }
}

export default Create;
