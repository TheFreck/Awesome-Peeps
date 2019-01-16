import React, { Component } from 'react';
import API from '../../utils/API';
// import Nav from "../../components/Nav";
// import MainLogo from '../../components/MainLogo';
// import DeleteBtn from "../../components/DeleteBtn";

class Shopping extends Component {
<<<<<<< HEAD:client/src/pages/Shopping/Shopping.js
  state = {
    items: [],
    item: "",
    price: "",
    
  };

  componentDidMount() {
    this.getItems();
  }

  getItems = () => {
    API.getItems()
      .then(res =>
        this.setState({ items: res.data, item: "", price: "" })
      )
      .catch(err => console.log(err));
  };

  deleteItem = id => {
    API.deleteItem(id)
      .then(res => this.getItems())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div> 
        <MainLogo />
        <thead>
            <tr>
              <th>GREEDY BASTARD</th>
              <th>ITEM</th>
              <th>PRICE</th>
              <th>OCCASION</th>
              <th>DATE ADDED</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map(item => (
              <tr key={item._id}>
                <td>
                  {item.item} {item.price} occasion:{item.occasion} comments:{item.comments}
                  <button onClick={() => this.deleteItem(item._id)}>Delete</button>
                  <button onClick={() => this.deleteItem(item._id)}>Buy it!</button>
                </td>
              </tr>
          ))}
          </tbody>
      </div>
    );
  };
};
=======
	state = {
		stuff: [],
		users: [],
		item: '',
		price: ''
	};

	componentDidMount() {
		this.getItems();
		this.getPerson();
	}

	getItems = () => {
		API.getItems()
			.then((res) => this.setState({ stuff: res.data, item: '', price: '' }))
			.catch((err) => console.log(err));
	};

	getPerson = () => {
		API.getUsers()
			.then((res) => this.setState({ users: res.data, firstName: '' }))
			.catch((err) => console.log(err));
	};

	deleteItem = (id) => {
		API.deleteItem(id).then((res) => this.getItems()).catch((err) => console.log(err));
	};

	render() {
		return (
			<div>
				<div className="container">
					<form className="white">
						<h5 className="grey-text text-darken-3">Shopping List</h5>
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
							{this.state.stuff.map((item) => (
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
								</tr>
							))}
							{this.state.users.map((user) => (
								<tr key={user._id}>
									<td>{user.firstName}</td>
								</tr>
							))}
						</tbody>
					</form>
				</div>
			</div>
		);
	}
}
>>>>>>> 63379b7bfc793dc7804a6334c2b879ac55a438c2:new version/client/src/pages/Shopping/Shopping.js

export default Shopping;
