import React, { Component } from "react";
import API from "../../utils/API";
// import Nav from "../../components/Nav";
import MainLogo from "../../components/MainLogo";
// import DeleteBtn from "../../components/DeleteBtn";

class Shopping extends Component {
  state = {
    stuff: [],
    users: [],
    item: "",
    price: "",
  };

//   class Shopping extends Component {
// 	state = {
// 		stuff: [],
// 		users: [],
// 		user: {
// 			sharedItems: []
// 		},
// 		item: '',
// 		price: ''
// 	};

// getPerson = () => {
// 	// API.getUserAndSharedItems()
// 	// 	.then((res) => {
// 			// this.setState({ user: res.data, firstName: '' })
// 			this.setState({
// 				user: {
// 					name: "benny",
// 					sharedItems: [
// 						{
// 							_id: "23jm4h5v2kj3g45",
// 							item: "glove",
// 							price: 2,
// 							occasion: "baseball",
// 							comments: "yo"
// 						},
// 						{
// 							_id: "23jqkjdhgfa8i73g45",
// 							item: "bat",
// 							price: 20,
// 							occasion: "baseball",
// 							comments: "best bat ever brah"
// 						}
// 					]
// 				}
// 			});
// 		// })
// 		// .then((res) => this.state.users.map((user) => console.log(user.myItems)))
// 		// .catch((err) => console.log(err));
// };

  componentDidMount() {
    console.log("shopping this.props: ", this.props);
    this.getItems()
    this.getPerson();
  }

  getItems = () => {
    API.getItems()
      .then(res =>
        this.setState({ stuff: res.data, item: "", price: "" })
      )
      .catch(err => console.log(err));
  };

  getPerson = () => {
      API.getUsers()
      .then(res =>
        this.setState({ users: res.data, firstName: ""})
      )
        .catch(err => console.log(err));
  }

  deleteItem = id => {
    API.deleteItem(id)
      .then(res => this.getItems())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div> 
        <div className="col s12 center-align top:60px">
          <MainLogo />
        </div>
        <thead>
          <tr>
            <th>GREEDY BASTARD</th>
            <th>ITEM</th>
            <th>PRICE</th>
            <th>OCCASION</th>
            <th>COMMENTS</th>
          </tr>
        </thead>
        <tbody>
          {this.state.stuff.map(item => (
            <tr key={item._id}>
              <td>{item.name} </td>
              <td>{item.item}</td>
              <td>{item.price}</td>
              <td>{item.occasion}</td>
              <td>{item.comments}</td>
              <td>
                <button onClick={() => this.deleteItem(item._id)}>Delete</button>
                <button onClick={() => this.deleteItem(item._id)}>Buy it!</button>
                
              </td>         
              <td>
                <a href={"http://www.google.com/search?source=hp&ei=1XZBXJKpEammjwSG4KGgBQ&q=" + item.item} >
                  <button>find online</button>
                </a>
              </td>
            </tr>
          ))}
            {this.state.users.map(user =>(
              <tr key={user._id}>
               <td>{user.firstName}</td>
               <td>{user.myItems}</td>
              </tr> 
            ))}
          </tbody>
      </div>
    );
  };
};

export default Shopping;