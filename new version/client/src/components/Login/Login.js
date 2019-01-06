import React from "react";

const Login = props => {
  return (
    <div>
      <h1>Login</h1>
      <form 
        onSubmit={()=> props.loginAttempt}>
        <label htmlFor="username">Email: </label>
        <input 
          type="email"
          name="username"
          value={props.state.user.profile.email}
          onChange={props.handleChange}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="text"
          name="password"
          value={props.state.user.login.account_key}
          onChange={props.handleChange}
        />
        <input 
          type="submit"
          value="Login" />
      </form>
      <p>{props.state.username}</p>
      <p>{props.state.password}</p>
    </div>
  )
}

export default Login;


