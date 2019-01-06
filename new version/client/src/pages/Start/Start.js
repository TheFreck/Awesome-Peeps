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
              signupAttempt={this.handleFormSubmit}
              state={this.state}
              handleChangeProfile={this.handleInputChangeProfile}
              handleChangeLogin={this.handleInputChangeLogin}
              submit={this.handleFormSubmit}
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
