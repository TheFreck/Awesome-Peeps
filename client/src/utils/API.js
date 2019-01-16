import axios from "axios";

export default {
  // Gets all users
  getUsers: () => {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: id => {
    console.log("api get user: ", id);
    return axios.get("/api/users/" + id);
  },
  getUserandItems: id => {
    return axios.get("/api/users/items/" + id);
  },
  // Deletes the user with the given id
  deleteUser: id => {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: userData => {
    // console.log("API user data: ", userData);
    return axios.post("/api/users", userData);
  },
  //updates user profile with given id
  updateUser: id => {
    console.log("updateUser id: ", id);
    return axios.put("/api/users", id)
  },
  login: userData => {
    let userName = userData.username;
    console.log("api userData: ", userData);
    userName = userName.replace(".", "-DOT-");
    userName = userName.replace("@", "-AT-");
    console.log("api userName: ", userName);
    return axios.post("/api/users/" + userName, userData);
  },
  getItems: () => {
    return axios.get("/api/items");
  },
  getItem: id => {
    return axios.get("/api/items/" + id);
  },
  // Deletes the item with the given id
  deleteItem: id => {
    return axios.delete("/api/items/" + id);
  },
  // Saves an item to the database
  saveItem: itemData => {
    console.log("API user data: ", itemData);
    return axios.post("/api/items", itemData);
  },
  forgotPassword: email => {
    console.log("api email: ", email);
    //route can be diff but it need to call the forgot method inside of resetPasswordCtrl aka: resetPasswordCtrl.forgot()
    return axios.post(`/api/users/forgotPassword/${email}`)
  },
  checkResetToken: token => {
    //route can be diff but it need to call the checkToken method inside of resetPasswordCtrl aka: resetPasswordCtrl.checkToken()
    return axios.post(`/api/users/checkResetToken/${token}`)
  },
  resetPassword: emailAndPass => {
    //route can be diff but it need to call the resetPassword method inside of resetPasswordCtrl aka: resetPasswordCtrl.resetPassword()
    return axios.post(`/api/users/resetPassword`, emailAndPass)
  }

};
