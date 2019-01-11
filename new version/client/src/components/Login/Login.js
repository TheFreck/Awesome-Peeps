import React from "react";
import Button from "../Button";
import ResetPswd from "../ResetPswd";

const Login = props => {
  return (
    <div>
      {props.state.resetPasswordBoolean ? 
        <ResetPswd
          handleChange={props.handleChange}
          click={props.click}
        />
      :
        <div>
          <h1>Login</h1>
          <form>
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
            <Button
              name="forgot password"
              click={props.click}
              pword={props.state.resetPswdText}
            />
            <input 
              type="submit" 
              value="Login"
              onClick={props.submit} 
            />
          </form>
        </div>
      }
    </div>
  );
};

export default Login;
