import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
// import { Link } from "react-router-dom";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import Button from "../../components/Button";
// import SearchForm from "../../components/SearchForm";
import { /* Col, Row, */ Container } from "../../components/Grid";
import API from "../../utils/API";
import Login from "../../components/Login";
import Signup from "../../components/Signup";

class Start extends Component {
  state = {
    isUser: false,
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
  };

  componentDidMount() {
    // this.loadUsers();
    console.log("mounted"); 
  }

  // loadUsers = () => {
  //   API.getUsers()
  //     .then(res =>
  //       this.setState({ user: {
  //         login: {
  //           account_key: "F4U4"
  //         },
  //         profile: {
  //           email: "a@b.com",
  //           name: "Howard"
  //         }
  //       } })
  //     )
  //     .catch(err => console.log(err));
  // };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadUsers())
  //     .catch(err => console.log(err));
  // };


  handleInputChangeLogin = (event) => {
    const { name, value } = event.target;
    this.setState({
      user: {
        ...this.state.user,
        login: {
          ...this.state.user.login,
          [name]: value
        }
      }
    });
  };

  handleInputChangeProfile = (event) => {
    const { name, value } = event.target;
    this.setState({
      user: {
        ...this.state.user,
        profile: {
          ...this.state.user.profile,
          [name]: value
        }
      }
    });
  };

  signup = event => {
    event.preventDefault();
    console.log("signup event.target: ", event.target);
    console.log("signup this.state.user: ", this.state.user);
    API.saveUser(this.state.user)
    .then(res=> {
      console.log("submit res: ", res);
      if(res.data) {
        this.setState({
          user: res.data
        })
        console.log("finished form submit 1: ", this.state.user);
      }else{
        console.log("signup error");
        console.log("finished form submit 2: ", this.state.user);
      }
      console.log("finished form submit 3:  ", this.state.user);
    })
    .catch(err => console.log("signup server err: ", err))
    
  };

  login = event => {
    event.preventDefault();
    console.log("login: ", event.target)
    console.log("this.state.user.profile.email: ", this.state.user.profile.email)
    console.log("this.state.user.login.account_key: ", this.state.user.login.account_key)
    let userData = {
      username: this.state.user.profile.email,
      password: this.state.user.login.account_key
    }
    API.login(userData)
    .then(res => {
      console.log("login response: ", res);
      if(Response.status === 200) {
        this.props.updateUser({
          loggedIn: true,
          username: Response.data.username
        })
        this.setState({
          redirectTo: "/"
        })
      }
    })
    .catch(err => console.log("login err: ", err));
  }

  toggleStart = () => {
    console.log("toggleStart: ", this.state.isUser);
    this.setState({ isUser: !this.state.isUser })
  }

  

  render() {
    return (
      <div>
        {this.state.isUser ? 
          <Container fluid>
            <Login 
              state={this.state}
              handleChangeProfile={this.handleInputChangeProfile}
              handleChangeLogin={this.handleInputChangeLogin}
              submit={this.login}
            /> 
            <Button 
              click={this.toggleStart}
              name="Signup Instead" />
          </Container>
            : 
          <Container fluid>
            <Signup 
              signupAttempt={this.signup}
              state={this.state}
              handleChangeProfile={this.handleInputChangeProfile}
              handleChangeLogin={this.handleInputChangeLogin}
              submit={this.signup}
            />
            <Button 
              click={this.toggleStart}
              name="Login Instead" />
          </Container>
        }
      </div>
        
    );
  }
}

export default Start;
