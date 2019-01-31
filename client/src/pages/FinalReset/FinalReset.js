import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import API from '../../utils/API';

class FinalReset extends Component {    
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    redirect: false,
    tokenStatus: true,
    resetSuccesful: false
  }
  
  componentDidMount (){
    console.log("final reset this.props: ", this.props);
    this.checkResetToken(this.props.token.match.params.token);
  }
  
  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  checkResetToken = (tokenCheck) => {
    console.log("check token");
    const token = tokenCheck;
    API.checkResetToken(token)
    .then(res => {
      console.log("check token res: ", res);
      if(res.data.tokenStatus === "expired"){
        console.log("BAD token");
        this.setState({
          tokenStatus: false
        });
      }else{
        console.log("GOOD token");
        this.setState({
          tokenStatus: true,
          email: res.data.email
        });
        console.log("this.state: ", this.state);
      }
    })
  }

  handleReset = event => {
    event.preventDefault();
    console.log("this.state.email: ", this.state.email);
    console.log("handleReset: ", this.state.password + "&" + this.state.confirmPassword);
    if (this.state.password === this.state.confirmPassword) {
      API.resetPassword({
        email: this.state.email,
        password: this.state.password
      })
      // .then(res => {
      //   console.log("post resetPassword res: ", res);
      //   this.setState({
      //     redirect: true
      //   });
      // })
    }else{
      console.log("passwords don't match bummer");
    }
  }


  render() {
    if (this.state.redirect) {
      return <Redirect to={`/`} />;
    }
    else if(this.state.resetSuccesful){
      return <h1>AWWWWW YEAH PASSWORD RESET HOMIE</h1>
    }
    else if (this.state.tokenStatus){
      return (
      <div className="container">
        <form
          className="white"
        >
          <h5 
            className="grey-text tet-darken-3"
          >Enter your new password
          </h5>
          <div>
            <label
              htmlFor="password"
            >Password
            </label>
            <input 
              type="password"
              placeholder="Password" 
              name="password" 
              value={this.state.password} 
              onChange={this.handleChange} 
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
            > Confirm Password
            </label>
            <input 
              type="password" 
              placeholder="Confirm Password" 
              name="confirmPassword" 
              value={this.state.confirmPassword} 
              onChange={this.handleChange} />
          </div>
          <button 
            className="btn pink lighten-1 z-depth-2"
            onClick={this.handleReset}
          >Reset Password
          </button>
        </form>
      </div>
    );
    }
    else{
      return (
        <h1>Password reset token is invalid or has expired.</h1>
      );
    }
  }
}

export default FinalReset;