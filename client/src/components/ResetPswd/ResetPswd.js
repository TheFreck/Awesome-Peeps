import React from "react";

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
          submit={props.click}
        />
      </form>
    </div>
  );
};


export default ResetPswd;

// import React, { Component } from 'react';
// // import TextField from '@material-ui/core/TextField';
// import axios from 'axios';
// import Button from "../Button";

// // import {
// //   LinkButtons,
// //   SubmitButtons,
// //   registerButton,
// //   homeButton,
// //   forgotButton,
// //   inputStyle,
// //   HeaderBar,
// // } from '../components';

// const title = {
//   pageTitle: 'Forgot Password Screen',
// };

// class ResetPswd extends Component {
//   constructor() {
//     super();

//     this.state = {
//       email: '',
//       showError: false,
//       messageFromServer: '',
//       showNullError: false,
//     };
//   }

//   handleChange = name => event => {
//     this.setState({
//       [name]: event.target.value,
//     });
//   };

//   sendEmail = e => {
//     e.preventDefault();
//     if (this.state.email === '') {
//       this.setState({
//         showError: false,
//         messageFromServer: '',
//         showNullError: true,
//       });
//     } else {
//       axios
//         .post('http://localhost:3000/ResetPswd', {
//           email: this.state.email,
//         })
//         .then(response => {
//           console.log(response.data);
//           if (response.data === 'email not in db') {
//             this.setState({
//               showError: true,
//               messageFromServer: '',
//               showNullError: false,
//             });
//           } else if (response.data === 'recovery email sent') {
//             this.setState({
//               showError: false,
//               messageFromServer: 'recovery email sent',
//               showNullError: false,
//             });
//           }
//         })
//         .catch(error => {
//           console.log(error.data);
//         });
//     }
//   };

//   render() {
//     const { email, messageFromServer, showNullError, showError } = this.state;

//     return (
//       <div>
//         <h1>{title}</h1>
//         <form className="profile-form" onSubmit={this.sendEmail}>
//           <input
//             style={inputStyle}
//             id="email"
//             label="email"
//             value={email}
//             onChange={this.handleChange('email')}
//             placeholder="Email Address"
//           />
//           <Button
//             name={'Send Password Reset Email'}
//             click={}
//           />
//         </form>
//         {showNullError && (
//           <div>
//             <p>The email address cannot be null.</p>
//           </div>
//         )}
//         {showError && (
//           <div>
//             <p>
//               That email address isn't recognized. Please try again or register
//               for a new account.
//             </p>
//             <Button
//               name={`Register`}
//               link={'/register'}
//             />
//           </div>
//         )}
//         {messageFromServer === 'recovery email sent' && (
//           <div>
//             <h3>Password Reset Email Successfully Sent!</h3>
//           </div>
//         )}
//         <LinkButtons
//           buttonText={`Go Home`}
//           link={'/'}
//         />
//       </div>
//     );
//   }
// }
// export default ResetPswd;