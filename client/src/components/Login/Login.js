import React from "react";
// import Button from "../Button";
import ResetPswd from "../ResetPswd";

const Login = props => {
  return (
    <div>
      {props.state.resetPasswordBoolean ? (
        <ResetPswd handleChange={props.handleChange} click={props.click} />
      ) : (
        <div className="container">
          <form onSubmit={props.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Login</h5>
            <div className="input-field">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                id="email"
                name="email"
                // value={props.state.user.email}
                onChange={props.handleChange}
              />
              <div className="input-field">
                <label htmlFor="account_key">Password: </label>
                <input
                  type="password"
                  id="password"
                  name="account_key"
                  // value={props.state.user.account_key}
                  onChange={props.handleChange}
                />
                <input
                  className="btn pink lighten-1 z-depth-2"
                  type="submit"
                  value="Login"
                  onClick={props.submit}
                />
                <input
                  className="btn pink lighten-1 z-depth-2"
                  name="forgot password"
                  type="submit"
                  value="Forgot Password"
                  pword={props.state.resetPswd}
                  onClick={props.click}
                />
                <input
                  className="btn pink lighten-1 z-depth-2"
                  name="Register"
                  type="submit"
                  value="Register"
                  onClick={props.toggleStart}
                />
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
