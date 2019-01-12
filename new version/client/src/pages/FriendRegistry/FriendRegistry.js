import React, { Component } from "react";
import Row from "../../components/Row"
import API from "../../utils/API"
// import RegistryHeader from "../../components/RegistryHeader"
import UserList from "../../components/UserList"
import MainLogo from "../../components/MainLogo"

class FriendRegistry extends Component {
  state = {
    savedItems: [],
    item: "",
    price: 0,
    url: "",
    pic: "",
    occasion: "",
    comments: "",
    users: [],
    user: {
      uuid: "",
      account_key: "",
      sessionId: "",
      email: "",
      name: "",
      pic: "",
      shareWithMe: [],
      shareWithOthers: [],
      myItems: [],
      notes: ""
    }
  }

  componentDidMount() {
    this.getSavedItems();
    // this.getAllUsers();
  }

  getSavedItems = () => {
    API.getItems()
      .then(res =>
        this.setState({ savedItems: res.data })
      )
      .catch(err => console.log(err));
  };

  //Find saved users
  getAllUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({ users: res.data }) 
      )
      .catch(err => console.log(err));
  };

 //Delete item from registry
  deleteItem = (id) => {
    API.deleteItem(id)
      .then(res =>
        this.getSavedItems())
      .catch((err) => {
        console.log(err);
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  
//Saves item to registry
  handleSaveItem = event => {
    event.preventDefault();
    console.log("CLICK")
    if (this.state.item) {
      API.saveItem({
        item: this.state.item,
        price: this.state.price,
        url: this.state.url,
        occasion: this.state.occasion,
        comments: this.state.comments
      })
        .then(res => {
          console.log("save item response: ", res);
          this.getSavedItems();
        })
        .catch(err => console.log(err));
    }
  };



//Share registry with another user
shareRegistry = event => {
  event.preventDefault();
  console.log("Share with user")
    API.getUsers({
      name: this.state.name,
      uuid: this.state.uuid
    })
      .then(res => {
        console.log("users data: ", res);
        this.getAllUsers();
      })
      .catch(err => console.log(err));
};



// selectUser = event => {
//   event.preventDefault();
//   console.log("Shared with", event.target.value)
//   console.log("User Selected")

//     API.getUser({
//       this.setState({ sharedUser: res.data }) 
//     })
// }


selectUser = (event) => {
  // console.log("This is data-id", event.target.getAttribute("data-id"))
  console.log("This is uuid value", event.target.value)
  // console.log("This is uuid name", event.target.name)
  // console.log(this.state.user.login.uuid)
  API.updateUser({
      "login.uuid": event.target.value
    })
    .then(res =>
      {console.log("Create: ", res)
        this.setState({ shareWithOthers: res.data }) }
    )
    .catch(err => console.log(err));
};


  //Value from URL input
  handleURL = (event) => {
    this.setState({ url: event.target.value });
  }

  //Value from Price input
  handlePrice = (event) => {
    this.setState({ price: event.target.value });
  }

  //Value from Occasion input
  handleOccasion = (event) => {
    this.setState({ occasion: event.target.value });
  }

  //Value from Comments input
  handleComments = (event) => {
    this.setState({ comments: event.target.value });
  }

  renderSaved = () => {
    return this.state.savedItems.map(save => (
      <Row
        _id={save._id}
        key={save._id}
        item={save.item}
        price={save.price}
        url={save.url}
        occasion={save.occasion}
        comments={save.comments}
        deleteItem={this.deleteItem}
        getSavedArticles={this.getSavedArticles}
      />
    ))
  }

  renderUsers = () => {
    return this.state.users.map(save => (
      <UserList
        _id={save._id}
        key={save._id}uninsta
        name={save.name}
        uuid={save.uuid}
        pic={save.pic}
        selectUser={this.selectUser}
      />
    ))
  }

  render() {
    return (
      
      <div className="container">
      <div class="Row">
        <div class="col s12 center-align top:60px">
          <MainLogo />
        </div>
      </div>
      <br></br>
      <div class="Row">
        <div class="col s12">
          <h2 class="center-align">I'M A GREEDY BASTARD - HERE IS MY LIST</h2>
        </div> 
      </div>
      <div class="Row">
        <div class="col s12 center-align">
          <h3>Registry table goes here</h3>
        </div>
      </div>

    </div>
    );
  }
}


export default FriendRegistry;
