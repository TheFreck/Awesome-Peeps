import React, { Component } from "react";
import API from "../../utils/API"
import UserList from "../../components/UserList"


class Share extends Component {
    state = {
      savedItems: [],
      item: "",
      price: 0,
      url: "",
      pic: "",
      occasion: "",
      comments: "",
      users: [],
      shareWithMe: [],
      shareWithOthers: [],
      user: {
        login: {
          uuid: "",
          account_key: "",
          sessionId: ""
        },
        profile: {
          email: "",
          name: "",
          pic: ""
        },
        notes: ""
      }
    }
  
    componentDidMount() {
      // this.getAllUsers();
      // this.getAllUsers();
    }
  
    // getSavedItems = () => {
    //   API.getItems()
    //     .then(res =>
    //       this.setState({ savedItems: res.data })
    //     )
    //     .catch(err => console.log(err));
    // };
  
    //Find saved users
    getAllUsers = () => {
      
      API.getUsers()
        .then(res =>
          this.setState({ users: res.data }) 
        )
        .catch(err => console.log(err));
    };
  
   //Delete item from registry
    // deleteItem = (id) => {
    //   API.deleteItem(id)
    //     .then(res =>
    //       this.getSavedItems())
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };
  
    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    }
  
    
  //Saves item to registry
    // handleSaveItem = event => {
    //   event.preventDefault();
    //   console.log("CLICK")
    //   if (this.state.item) {
    //     API.saveItem({
    //       item: this.state.item,
    //       price: this.state.price,
    //       url: this.state.url,
    //       occasion: this.state.occasion,
    //       comments: this.state.comments
    //     })
    //       .then(res => {
    //         console.log("save item response: ", res);
    //         this.getSavedItems();
    //       })
    //       .catch(err => console.log(err));
    //   }
    // };
  
  
  
  //Share registry with another user
  shareRegistry = event => {
    event.preventDefault();
    console.log("Share with user")
      API.getUsers({
        name: this.state.user.profile.name,
        uuid: this.state.user.login.uuid
      })
        .then(res => {
  
          console.log("users data: ", res);
          this.getAllUsers();
        })
        .catch(err => console.log(err));
  };
  
  
  
  selectUser = event => {
    event.preventDefault();
    console.log("User Selected")
    console.log("Name:", this.state.users)
      API.updateUser({
        pic: this.state.user.profile.uuid
      })
  }
  
  
    //Value from URL input
    // handleURL = (event) => {
    //   this.setState({ url: event.target.value });
    // }
  
    // //Value from Price input
    // handlePrice = (event) => {
    //   this.setState({ price: event.target.value });
    // }
  
    // //Value from Occasion input
    // handleOccasion = (event) => {
    //   this.setState({ occasion: event.target.value });
    // }
  
    // //Value from Comments input
    // handleComments = (event) => {
    //   this.setState({ comments: event.target.value });
    // }
  
    // renderSaved = () => {
    //   return this.state.savedItems.map(save => (
    //     <Row
    //       _id={save._id}
    //       key={save._id}
    //       item={save.item}
    //       price={save.price}
    //       url={save.url}
    //       occasion={save.occasion}
    //       comments={save.comments}
    //       deleteItem={this.deleteItem}
    //       getSavedArticles={this.getSavedArticles}
    //     />
    //   ))
    // }
  
    renderUsers = () => {
      return this.state.users.map(save => (
        <UserList
          _id={save._id}
          key={save._id}
          name={save.profile.name}
          uuid={save.login.uuid}
          pic={save.login.pic}
          selectUser={this.selectUser}
        />
      ))
    }
  


render() {
    return (
      <div className="container bg-white">
        <h4>Who do you want to share your list with?</h4>
        <UserList />
        <div>
          {this.renderUsers()}
        </div>
      </div>
    );
  }
}


export default Share;