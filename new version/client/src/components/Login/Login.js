import React from "react";
import Button from "../Button";
import ResetPswd from "../ResetPswd";

const Login = props => {
  return (
<<<<<<< HEAD
    <div className="container">
      <h5 className="grey-text text-darken-3">Login</h5>
      <form onSubmit={this.handleSubmit} className="white">
        <div className="input-field">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            value={props.state.user.email}
            onChange={props.handleChange}
          />
          <div className="input-field">
=======
    <div>
      {props.reset ? 
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
>>>>>>> 7f18fffc45c65729c29a1ecd4de5d6d72ace6fea
            <label htmlFor="account_key">Password: </label>
            <input
              type="password"
              name="account_key"
              value={props.state.user.account_key}
              onChange={props.handleChange}
            />
<<<<<<< HEAD
            <button
              className="btn pink lighten-1 z-depth-0"
              input
              type="submit"
              value="Login"
              onClick={props.submit}
            >
              Login
            </button>
          </div>
        </div>
      </form>
=======
            <Button
              name="forgot password"
              click={props.click}
              pword={props.state.resetPswd}
            />
            <input 
              type="submit" 
              value="Login" 
              onClick={props.submit} 
            />
          </form>
        </div>
      }
>>>>>>> 7f18fffc45c65729c29a1ecd4de5d6d72ace6fea
    </div>
  );
};

export default Login;
