import React from "react";

const Login = props => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          value={props.state.user.profile.email}
          onChange={props.handleChangeProfile}
        />
        <label htmlFor="account_key">Password: </label>
        <input
          type="password"
          name="account_key"
          value={props.state.user.login.account_key}
          onChange={props.handleChangeLogin}
        />
        <input type="submit" value="Login" onClick={props.submit} />
      </form>
    </div>
  );
};

export default Login;
