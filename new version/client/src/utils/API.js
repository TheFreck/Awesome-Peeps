import axios from "axios";

export default {
  // Gets all books
  getUsers: () => {
    return axios.get("/api/users");
  },
  // Gets the book with the given id
  getUser: id => {
    return axios.get("/api/users/" + id);
  },
  // Deletes the book with the given id
  deleteUser: id => {
    return axios.delete("/api/users/" + id);
  },
  // Saves a book to the database
  saveUser: userData => {
    // console.log("API user data: ", userData);
    return axios.post("/api/users", userData);
  },
  login: userData => {
    let userName = userData.username;
    userName = userName.replace(".", "-DOT-");
    userName = userName.replace("@", "-AT-");
    return axios.post("/api/users/" + userName, userData);
  },
  getItems: () => {
    return axios.get("/api/items");
  },
  getItem: id => {
    return axios.get("/api/items/" + id);
  },
  // Deletes the book with the given id
  deleteItem: id => {
    return axios.delete("/api/items/" + id);
  },
  // Saves a book to the database
  saveItem: itemData => {
    console.log("API user data: ", itemData);
    return axios.post("/api/items", itemData);
  }

};
