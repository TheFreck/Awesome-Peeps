import React from "react";
import { Container } from "../../components/Grid";

const Profile = props => {

  return (
    <Container fluid>
      <h1>Profile Page</h1>
      <form>
        <label htmlFor="screenName">Screen Name: </label>
        <input
          type="text"
          name="screenName"
          value={props.state.user.screenName}
          onChange={props.handleChange}
        />
        <br />
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          name="firstName"
          value={props.state.user.firstName}
          onChange={props.handleChange}
        />
        <br />
        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          name="lastName"
          value={props.state.user.lastName}
          onChange={props.handleChange}
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          value={props.state.user.email}
          onChange={props.handleChange}
        />
        <br />
        <label htmlFor="account_key">Password: </label>
        <input
          type="password"
          name="account_key"
          value={props.state.user.account_key}
          onChange={props.handleChange}
        />
        <br />
        <input 
          type="submit" 
          value="Update" 
          onSubmit={props.submit} 
        />
      </form>
    </Container>
  )
}

export default Profile;
