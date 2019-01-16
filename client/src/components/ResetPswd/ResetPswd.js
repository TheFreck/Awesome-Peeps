import React from "react";
import Button from "../Button";

const ResetPswd = props => {


  return (
    <div className="list-overflow-container">
      <h1>Enter your email to reset your password</h1>
      <form>
        <label htmlFor="resetPswdText">Email Address: </label>
        <input 
          type="text"
          name="resetPswdText"
          value={props.pword}
          onChange={props.handleChange}
        />
        <input
          type="submit"
          onClick={props.reset}
        />
      </form>
      <Button 
        name="just kidding"
        click={props.click}
      />
    </div>
  );
};


export default ResetPswd;