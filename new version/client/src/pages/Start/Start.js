import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
// import { Link } from "react-router-dom";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
// import Button from "../../components/Button";
// import SearchForm from "../../components/SearchForm";
import { /* Col, Row, */ Container } from "../../components/Grid";
import API from "../../utils/API";
// import Login from "../../components/Login";
import Signup from "../../components/Signup";

class Start extends Component {
  state = {
    user: {
      login: {
        uuid: "",
        account_key: ""
      },
      profile: {
        email: "",
        name: "",
        pic: ""
      },
      notes: "",
      sessionId: ""
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

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("handleFormSubmit event.target: ", event.target);
    console.log("handleFormSubmit this.state.user: ", this.state.user);
    this.setState({
      user: {
        
      }
    })
    API.saveUser(this.state.user)
    .then(res=> {
      console.log("submit res: ", res);
      if(res.data) {
        this.setState({
          user: res.data
        })
      }else{
        console.log("signup error");
      }
      console.log("finished form submit", this.state.user);
    })
    .catch(err => console.log("signup server err: ", err))
  };

  buttonClick = input => {
    console.log("buttonClick input: ", input);
  }

  

  render() {
    return (
      <Container fluid>
        <Signup 
          signupAttempt={this.handleFormSubmit}
          state={this.state}
          handleChangeProfile={this.handleInputChangeProfile}
          handleChangeLogin={this.handleInputChangeLogin}
          submit={this.handleFormSubmit}
        />
      </Container>
    );
  }
}

export default Start;
