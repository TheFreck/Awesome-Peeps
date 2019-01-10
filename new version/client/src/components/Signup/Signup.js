import React from "react";

const Signup = props => {
  console.log("signup props: ", props);
  return (
    <div className="container">
      <h5 className="grey-text text-darken-3">Sign Up</h5>
      <form onSubmit={this.handleSubmit} className="white">
        <div className="input-field">
          <label htmlFor="name">User Name: </label>
          <input
            type="text"
            data-val="profile"
            name="name"
            id="user Name"
            // value={props.state.user.name}
            onChange={props.handleChange}
          />
          <div className="input-field">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              data-val="profile"
              name="email"
              id="email"
              // value={props.state.user.email}
              onChange={props.handleChange}
            />
            <div className="input-field">
              <label htmlFor="account_key">Password: </label>
              <input
                type="password"
                val="login"
                name="account_key"
                id="password"
                // value={props.state.user.account_key}
                onChange={props.handleChange}
              />
              <button
                className="btn pink lighten-1 z-depth-0"
                input
                type="submit"
                value="Signup"
                onClick={props.submit}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
