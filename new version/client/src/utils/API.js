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
  }
};
