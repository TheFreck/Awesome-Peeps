import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
// import { Link } from "react-router-dom";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
// import SearchForm from "../../components/SearchForm";
import { Redirect } from "react-router-dom";
import Button from "../../components/Button";
import { Container } from "../../components/Grid";
import API from "../../utils/API";
import Login from "../../components/Login";
import Signup from "../../components/Signup";
import LogoutBtn from "../../components/LogoutBtn";
import Profile from "../../pages/Profile";

const initialState = {
  uuid: "",
  account_key: "",
  sessionId: "",
  email: "",
  firstName: "",
  lastName: "",
  screenName: "",
  pic: "",
  shareWithMe: [],
  shareWithOthers: [],
  notes: ""
};

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
    console.log("handleChange: ", event.target);
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
    console.log("resetPswdText: ", this.state.user.resetPswdText );
  };

  // handleInputChange = input => {
  //   // event.preventDefault();
  //   console.log("handleInputChange target: ", event.target);
  //   const { name, value } = event.target;
  //   // this.setState({
  //   //   ...this.state,
  //   //   user: {
  //   //     ...this.state.user,
  //   //     [name]: value
  //   //   }
  //   // });
  //   this.props.updateStateItem(input);
  // };

  signup = event => {
    event.preventDefault();
    console.log("signup event.target: ", event.target);
    console.log("signup this.state.user: ", this.state.user);

    if (this.state.account_key === this.state.account_key2) {
      API.saveUser(this.state.user)
        .then(res => {
          console.log("submit res.data: ", res.date);
          if (res.data) {
            // this.setState({
            //   ...this.state,
            //   user: res.data
            // });
            this.props.updateStateItem(res.data);
          } else {
            console.log("signup error");
            console.log("finished form submit false: ", this.state.user);
          }
          console.log("finished form submit anyway:  ", this.state.user);
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
      console.log("updateProfile: ", res);
    });
  };

  login = event => {
    event.preventDefault();
    console.log("login: ", event.target);
    console.log("this.state.user.email: ", this.state.user.email);
    console.log("this.state.user.account_key: ", this.state.user.account_key);

    API.login({
      username: this.state.user.email,
      password: this.state.user.account_key
    })
      .then(res => {
        console.log("Start res: ", res.data);
        if (res.data) {
          let user = {
            user: {
              ...this.state.user,
              uuid: res.data.uuid,
              screenName: res.data.screenName,
              firstName: res.data.firstName,
              lastName: res.data.lastName,
              pic: res.data.pic,
              notes: res.data.notes
            }
          };
          console.log("user: ", user.user);
          this.setState(user);
          this.props.updateStateItem(user.user);

          console.log("res: ", res);
        } else {
          console.log("incorrect password");
        }
      })
      .catch(err => console.log("login err err: ", err));
  };

  logout = event => {
    event.preventDefault();
    console.log("event.target: ", event.target);
    this.setState(initialState);
    this.props.updateStateItem(initialState);
    console.log("this.state: ", this.state);
  };

  toggleStart = () => {
    console.log("does it hit?", this.state);
    this.setState({
      ...this.state,
      resetPasswordBoolean: false,
      isUser: !this.state.isUser
    });
  };

  viewProfile = () => this.setState({ viewProfile: !this.state.viewProfile });

  resetPasswordBoolean = event => {
    event.preventDefault();
    console.log("resetting password: ");
    this.setState({
      resetPasswordBoolean: !this.state.resetPasswordBoolean
    });
  };

  sendResetEmail = event => {
    event.preventDefault();
    console.log("send reset email: ", this.state.user.resetPswdText);
    API.forgotPassword(this.state.user.resetPswdText)
    .then(res=> {
      console.log("res from sending reset email to api: ", res);
    })
  };

  render() {
    // are you signed in?
    if (this.props.state.uuid) {
      // you are signed in
      return (
        <Container fluid>
          <Button name="Profile" click={this.viewProfile} />
          <LogoutBtn logout={this.logout} />
          {this.state.viewProfile ? (
            <Profile
              state={this.state}
              handleChange={this.handleChange}
              submit={this.updateProfile}
            />
          ) : (
            <Redirect push to="/landing" />
          )}
        </Container>
      );
    } else {
      // not signed in
      return (
        <div>
          {this.state.isUser ? (
            /* are you a user? */
            /* pass functionality to reset password into the Login page */
            <Container fluid>
              <Login
                state={this.state}
                handleChange={this.handleChange}
                submit={this.login}
                click={this.resetPasswordBoolean}
                reset={this.sendResetEmail}
                toggleStart={this.toggleStart}
              />
              {/* <Button click={this.toggleStart} name="Signup Instead" /> */}
            </Container>
          ) : (
            // not a user so let's sign up
            <Container fluid>
              <Signup
                state={this.state}
                handleChange={this.handleChange}
                submit={this.signup}
              />
              {/* <Button click={this.toggleStart} name="Login Instead" /> */}
            </Container>
          )}
        </div>
      );
    }
  }
}

export default Start;
