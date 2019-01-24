import React from "react";

const Signup = props => {
  console.log("signup props: ", props);
  return (
    <div className="container">
      <form onSubmit={this.handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="name">Screen Name: </label>
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
                  id="email"
                  name="email"
                  value={props.state.user.email}
                  onChange={props.handleChange}
                />
                <div className="input-field">
                  <label htmlFor="account_key">Password: </label>
                  <input
                    type="password"
                    id="password"
                    name="account_key"
                    value={props.state.user.account_key}
                    onChange={props.handleChange}
                  />
                  <div className="input-field">
                    <label htmlFor="account_key">Confirm Password: </label>
                    <input
                      type="password"
                      id="passwordConfirm"
                      name="account_key2"
                      value={props.state.user.account_key2}
                      onChange={props.handleChange}
                    />
                    <div>
                      <input
                        className="btn pink lighten-1 z-depth-2"
                        name="Sign Up "
                        type="submit"
                        value="Sign Up"
                        onClick={props.submit}
                      />
                      <input
                        className="btn pink lighten-1 z-depth-2"
                        name="Login"
                        type="submit"
                        value="Go To Login"
                        onClick={props.toggleStart}
                      />
                    </div>
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
