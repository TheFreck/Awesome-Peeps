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
import Create from "../../pages/Create";
import LogoutBtn from "../../components/LogoutBtn";

class Start extends Component {
  state = {
    isUser: false,
    user: {
      uuid: "",
      account_key: "",
      sessionId: "",
      verified: false,
      email: "",
      name: "",
      pic: "",
      shareWithMe: [],
      shareWithOthers: [],
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


  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      user: {
          ...this.state.user,
          [name]: value
        }
      }
    );
  };

  // handleInputChangeProfile = (event) => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     user: {
  //       ...this.state.user,
  //       profile: {
  //         ...this.state.user.profile,
  //         [name]: value
  //       }
  //     }
  //   });
  // };

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
        console.log("finished form submit true: ", this.state.user);
      }else{
        console.log("signup error");
        console.log("finished form submit false: ", this.state.user);
      }
      console.log("finished form submit anyway:  ", this.state.user);
    })
    .catch(err => console.log("signup server err: ", err))
    
  };

  login = event => {
    event.preventDefault();
    console.log("login: ", event.target)
    console.log("this.state.user.email: ", this.state.user.email)
    console.log("this.state.user.account_key: ", this.state.user.account_key)

    API.login({
      username: this.state.user.email,
      password: this.state.user.account_key
    })
    .then(res => {
      if(res.data) {
        this.setState({
          user: {
            ...this.state.user,
              verified: true
            }
          }
        )
      }else{
        console.log("incorrect password")
      }
    })
    .catch(err => console.log("login err err: ", err));
  }

  logout = event => {

  }

  toggleStart = () => {
    console.log("toggleStart: ", this.state.isUser);
    this.setState({ isUser: !this.state.isUser })
  }

  

  render() {
    if(this.state.isUser && this.state.user.verified){
      return (
        <Container fluid>
          <LogoutBtn
            onClick={this.logout} 
          />
          <Create
            state={this.state} 
          />
        </Container>
      )
    }else{
      return (
        <div>
          {this.state.isUser ? 
            <Container fluid>
              <Login 
                state={this.state}
                handleChange={this.handleInputChange}
                submit={this.login}
              /> 
              <Button 
                click={this.toggleStart}
                name="Signup Instead" 
              />
            </Container>
              : 
            <Container fluid>
              <Signup 
                signupAttempt={this.signup}
                state={this.state}
                handleChange={this.handleInputChange}
                submit={this.signup}
              />
              <Button 
                click={this.toggleStart}
                name="Login Instead" 
              />
            </Container>
          }
        </div>
          
      );
    }
  }
}

export default Start;
