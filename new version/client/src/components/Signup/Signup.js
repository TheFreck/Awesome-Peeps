import React from "react";

const Signup = props => {
  console.log("signup props: ", props);
  return (
    <div>
      <h1>Signup</h1>
      <form 
      >
        <label htmlFor="name">Screen Name: </label>
        <input 
          type="text"
          data-val="profile"
          name="name"
          value={props.state.user.name}
          onChange={props.handleChange}
        />
        <br/>
        <label htmlFor="email">Email: </label>
        <input 
          type="email"
          data-val="profile"
          name="email"
          value={props.state.user.email}
          onChange={props.handleChange}
        />
        <br/>
        <label htmlFor="account_key">Password: </label>
        <input
          type="password"
          val="login"
          name="account_key"
          value={props.state.user.account_key}
          onChange={props.handleChange}
        />
        <br/>
        <input 
          type="submit"
          value="Signup" 
          onClick={ props.submit}
        />
      </form>
    </div>
  )
}

export default Signup;


