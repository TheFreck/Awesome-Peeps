import React from "react";

const ResetPswd = props => {
  return (
    <div 
      className="container">
      <form 
        onSubmit={props.reset} 
        className="white"
      >
        <h5 
          className="grey-text text-darken-3"
        >Enter your email to reset your password
        </h5>
        <label 
          htmlFor="resetPswdText"
        >Email Address: 
        </label>
        <input 
          type="text"
          name="resetPswdText"
          value={props.pword}
          onChange={props.handleChange}
        />
        <input
          className="btn pink lighten-1 z-depth-2"
          type="submit"
          onClick={props.reset}
        />
        <input
          className="btn pink lighten-1 z-depth-2"
          type="button"
          value="Sign Up"
          onClick={props.toggleStart}
        />
      </form>
    </div>
  );
};

export default ResetPswd;