import React from "react";

const Signup = props => {
  // console.log("signup props: ", props);
  return (
    <div>
      <h1>Signup</h1>
      <form>
        <label htmlFor="name">Screen Name: </label>
        <input
          type="text"
          data-val="profile"
          name="name"
          value={props.state.user.profile.name}
          onChange={props.handleChangeProfile}
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          data-val="profile"
          name="email"
          value={props.state.user.profile.email}
          onChange={props.handleChangeProfile}
        />
        <br />
        <label htmlFor="account_key">Password: </label>
        <input
          type="password"
          val="login"
          name="account_key"
          value={props.state.user.login.account_key}
          onChange={props.handleChangeLogin}
        />
        <br />
        <input type="submit" value="Signup" onClick={props.submit} />
      </form>
    </div>
  );
};

export default Signup;
