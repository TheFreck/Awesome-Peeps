import React, { Component } from "react";
import { Container } from "../../components/Grid";

class Profile extends Component {
  state = {};

  componentDidMount() {
    console.log("profile props: ", this.props);
  }

  toggleReadOnly = (event) => {
    event.preventDefault();
    console.log("pre profile event target readonly: ", event.target.readonly);
    event.target.readonly = !event.target.readonly;
    console.log("post profile event target readonly: ", event.target.readonly);
  }

  render() {
    return (
      <Container fluid>
        <h1>Profile Page</h1>
        <form>
          <label htmlFor="screenName">Screen Name: </label>
          <input
            type="text"
            name="screenName"
            value={this.props.state.screenName}
            onChange={this.props.update}
            onClick={event => {
              console.log("event.target: ", event.target);
              this.toggleReadOnly(event);
            }}
          />
          <br />
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            name="firstName"
            value={this.props.state.firstName}
            onChange={this.props.update}
          />
          <br />
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            name="lastName"
            value={this.props.state.lastName}
            onChange={this.props.update}
          />
          <br />
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            value={this.props.state.email}
            onChange={this.props.update}
          />
          <br />
          <label htmlFor="account_key">Password: </label>
          <input
            type="password"
            name="account_key"
            value={this.props.state.account_key}
            onChange={this.props.update}
          />
          <br />
          <input type="submit" value="Update" onSubmit={this.props.submit} />
        </form>
      </Container>
    );
  }
};

export default Profile;
