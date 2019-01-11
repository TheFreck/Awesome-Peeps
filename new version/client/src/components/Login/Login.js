import React from "react";
// import Button from "../Button";
import ResetPswd from "../ResetPswd";

const Login = props => {
  return (
    <div className="container">
      {props.reset ? (
        <ResetPswd handleChange={props.handleChange} click={props.click} />
      ) : (
        <div>
          <h5 className="grey-text text-darken-3">Login</h5>
          <form onSubmit={this.handleSubmit} className="white">
            <div className="input-field">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                name="email"
                // value={props.state.user.email}
                onChange={props.handleChange}
              />
              <div className="input-field">
                <label htmlFor="account_key">Password: </label>
                <input
                  type="password"
                  name="account_key"
                  // value={props.state.user.account_key}
                  onChange={props.handleChange}
                />
                <button
                  className="btn pink lighten-1 z-depth-0"
                  input
                  type="submit"
                  value="Forgot Password"
                  pword={props.state.resetPswd}
                  onClick={props.click}
                >
                  Forgot Password
                </button>

                <button
                  className="btn pink lighten-1 z-depth-0"
                  input
                  type="submit"
                  value="Signup"
                  onClick={props.submit}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
