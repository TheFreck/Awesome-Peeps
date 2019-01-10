import React from "react";

const ResetPswd = props => {
  return (
    <div className="list-overflow-container">
      <form>
        <label htmlFor="resetPswd">Email Address: </label>
        <input 
          type="text"
          name="resetPswd"
          value={props.pword}
          onChange={props.handleChange}
        />
        <input
          type="submit"
          onClick={props.click}
        />
      </form>
    </div>
  );
};


export default ResetPswd;