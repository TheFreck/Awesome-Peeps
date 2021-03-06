import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Container } from "../../components/Grid";
import API from "../../utils/API";
import Login from "../../components/Login";
import Signup from "../../components/Signup";

class Start extends Component {
  state = {
    resetPasswordBoolean: false,
    resetPswdText: "",
    viewProfile: false,
    isUser: true,
    user: this.props.state
  };
  
  componentDidMount() {
    console.log("state: ", this.props);
  }

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [name]: value
      }
    });
    this.props.updateState({
      ...this.state,
      key: name,
      value: value
    });
  };

  signup = event => {
    event.preventDefault();
    // console.log("signup event.target: ", event.target);
    // console.log("signup this.state.user: ", this.state.user);

    if (this.state.account_key === this.state.account_key2) {
      API.saveUser(this.state.user)
        .then(res => {
          console.log("submit res.data: ", res.date);
          if (res.data) {
            this.props.updateStateItem(res.data);
          } else {
            console.log("signup error");
            console.log("finished form submit false: ", this.state.user);
          }
          console.log("finished form submit anyway:  ", this.state.user);
          this.login(event);
        })
        .catch(err => console.log("signup server err: ", err));
    } else {
      console.log("passwords don't match");
    }
  };

  // eventually make the fields read only until you click the button
  // when you click the password update button you will have to type
  // the current password to update it
  updateProfile = event => {
    event.preventDefault();
    // save state to the database
    API.updateUser(this.state.user).then(res => {
      // console.log("updateProfile: ", res);
    });
  };

  login = event => {
    event.preventDefault();
    // console.log("login: ", event.target);
    // console.log("this.state.user.email: ", this.state.user.email);
    // console.log("this.state.user.account_key: ", this.state.user.account_key);
    console.log("login hit");
    API.login({
      username: this.state.user.email,
      password: this.state.user.account_key
    })
    .then(res => {
      console.log("Start res.data.user.uuid: ", res.data);
      if (res.data) {
        let user = {
          user: {
            ...this.state.user,
            uuid: res.data.user.uuid,
            screenName: res.data.user.screenName,
            firstName: res.data.user.firstName,
            lastName: res.data.user.lastName,
            pic: res.data.user.pic,
            notes: res.data.user.notes,
            account_key: "",
            account_key2: "",
            loggedIn: true
          }
        };
        console.log("user: ", user);
        // console.log("user: ", user.user);
        this.setState({
          ...this.state,
          user
        });
        this.props.updateStateItem(user.user);
        console.log("login this.props.state", this.props.state)
        // console.log("res: ", res);
      } else {
        console.log("incorrect password");
      }
    })
    .catch(err => console.log("login err err: ", err));
    console.log("post login this.props.state", this.props.state)
  };

  logout = event => {
    event.preventDefault();
    // console.log("event.target: ", event.target);
    console.log("start logout props: ", this.props)
    this.props.goodbye();
    // console.log("this.state: ", this.state);
  };

  toggleStart = () => {
    // console.log("does it hit?", this.state);
    this.setState({
      ...this.state,
      resetPasswordBoolean: false,
      isUser: !this.state.isUser
    });
  };

  viewProfile = () => this.setState({ viewProfile: !this.state.viewProfile });

  resetPasswordBoolean = event => {
    event.preventDefault();
    // console.log("resetting password: ");
    this.setState({
      resetPasswordBoolean: !this.state.resetPasswordBoolean
    });
  };

  sendResetEmail = event => {
    event.preventDefault();
    // console.log("send reset email: ", this.state.user.resetPswdText);
    API.forgotPassword(this.state.user.resetPswdText)
    .then(res=> {
      // console.log("res from sending reset email to api: ", res);
    })
  };

  render() {
    // are you signed in?
    if (this.props.loggedIn) {
      // you're signed in - go play
      return <Redirect push to="/Landing" />
    } else {
      // not signed in
      return (
        <div>
          {this.state.isUser ? (
            /* are you a user? */
            /* pass functionality to reset password through the Login page */
            <Container fluid>
              {/* <Nav 
                toggleStart={this.toggleStart}
              /> */}
              <Login
                state={this.state}
                handleChange={this.handleChange}
                submit={this.login}
                click={this.resetPasswordBoolean}
                reset={this.sendResetEmail}
                toggleStart={this.toggleStart}
              />
            </Container>
          ) : (
            // not a user so let's sign up
            <Container fluid>
              <Signup
                state={this.state}
                handleChange={this.handleChange}
                submit={this.signup}
              />
            </Container>
          )}
        </div>
      );
    }
  }
}

export default Start;
