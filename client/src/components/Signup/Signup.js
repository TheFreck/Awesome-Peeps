import React from "react";

const Signup = props => {
  // console.log("signup props: ", props);
  return (
    <div className="container">
      <h5 className="grey-text text-darken-3">Sign Up</h5>
      <form onSubmit={this.handleSubmit} className="white">
        <div className="input-field">
          <label htmlFor="name">User Name: </label>
          <input
            type="text"
            name="screenName"
            value={props.state.user.name}
            onChange={props.handleChange}
          />
          <div className="input-field">
            <label htmlFor="firstName">First Name: </label>
            <input
              type="text"
              name="firstName"
              value={props.state.user.firstName}
              onChange={props.handleChange}
            />
            <div className="input-field">
              <label htmlFor="lastName">Last Name: </label>
              <input
                type="text"
                name="lastName"
                value={props.state.user.lastName}
                onChange={props.handleChange}
              />
              <div className="input-field">
                <label htmlFor="email">Email: </label>
                <input
                  type="email"
                  name="email"
                  value={props.state.user.email}
                  onChange={props.handleChange}
                />
                <div className="input-field">
                  <label htmlFor="account_key">Password: </label>
                  <input
                    type="password"
                    name="account_key"
                    value={props.state.user.account_key}
                    onChange={props.handleChange}
                  />
                  <div className="input-field">
                    <label htmlFor="account_key">Confirm Password: </label>
                    <input
                      type="password"
                      name="account_key2"
                      value={props.state.user.account_key2}
                      onChange={props.handleChange}
                    />
                    <button
                      className="btn pink lighten-1 z-depth-0"
                      type="submit"
                      value="Signup"
                      onClick={props.submit}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
