// import React, { Component } from 'react';
// import {Redirect} from 'react-router-dom';
// import API from '../../utils/API';

// class Login extends Component {

//   componentDidMount (){
//     console.log(this.props);
//     // this.checkResetToken()
//   }

//   state = {
//     email: "",
//     password: "",
//     confirmPassword: "",
//     redirect: false,
//     tokenStatus: false,
//     resetSuccesful: false
//   }

//   handleChange = (event) => {
//     const {name, value} = event.target;
//     this.setState({
//       [name]: value
//     });
//   }

//   checkResetToken = () => {
//     console.log(this.props.match.params.token);
//     const token = this.props.match.params.token;
//     API.checkResetToken(token).then((res)=>{
//       console.log(res);
//       if(res.data.tokenStatus === "expired"){
//         console.log("BAD token");
//         this.setState({
//           tokenStatus: false
//         });
//       }else{
//         console.log("GOOD token");
//         this.setState({
//           tokenStatus: true,
//           email: res.data.email
//         });
//       }
//     })
//   }

//   postForgotPassword = () => {
//     console.log(this.props.match.params.email);
//     // API.resetPassword(this.state.forgotEmail).then((res) => {
//     //   <Redirect to="/"/>
//     // })
//   }

//   handleReset = () => {
//     if (this.state.password === this.state.confirmPassword) {
//       API.resetPassword({
//         email: this.state.email,
//         password: this.state.password
//       }).then((res) => {
//         this.setState({
//           redirect: true
//         });
//       })

//     }else{
//       console.log("passwords don't match bummer");
//     }
//   }

// render() {
//   if (this.state.redirect) {
//     return <Redirect to={`/login`} />;
//   }
//   else if(this.state.resetSuccesful){
//     return <h1>AWWWWW YEAH PASSWORD RESET HOMIE</h1>
//   }
//   else if (this.state.tokenStatus){
//     return (
//     <div className="container-fluid reset-page-background">
//       <div className="row justify-content-center">
//         <div className="col-sm-3 login-group-container">
//           <div className="form-group">
//             <label>Password</label>
//             <input type="password" className="form-control" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
//           </div>
//           <div className="form-group">
//             <label> Confirm Password</label>
//             <input type="password" className="form-control" placeholder="Confirm Password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} />
//           </div>
//           <button className="btn justify-content-center" onClick={this.handleReset}>Reset Password</button>
//         </div>

//       </div>
//     </div>
//   );
//   }
//   else{
//     return (
//       <h1>Password reset token is invalid or has expired.</h1>
//     );
//   }
// }
// }

// export default Login;
