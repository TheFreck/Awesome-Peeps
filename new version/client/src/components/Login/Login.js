import React from "react";

const Login = props => {
  return (
    <div>
      <h1>Login</h1>
      <form 
      >
        <label htmlFor="email">Email: </label>
        <input 
          type="email"
          name="email"
          value={props.state.user.email}
          onChange={props.handleChange}
        />
        <label htmlFor="account_key">Password: </label>
        <input
          type="password"
          name="account_key"
          value={props.state.user.account_key}
          onChange={props.handleChange}
        />
        <input 
          type="submit"
          value="Login"
          onClick={props.submit} />
      </form>
    </div>
  )
}

export default Login;


