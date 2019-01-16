import React, { Component } from 'react';
import API from '../../utils/API';
// import Nav from "../../components/Nav";
import MainLogo from '../../components/MainLogo';
// import DeleteBtn from "../../components/DeleteBtn";

class Shopping extends Component {
	state = {
		stuff: [],
		users: [],
		user: {
			sharedItems: []
		},
		item: '',
		price: ''
	};

	componentDidMount() {
		// this.getItems();
		this.getPerson();
	}

	getItems = () => {
		API.getItems()
			.then((res) => this.setState({ stuff: res.data, item: '', price: '' }))
			.catch((err) => console.log(err));
	};

	getPerson = () => {
		// API.getUserAndSharedItems()
		// 	.then((res) => {
				// this.setState({ user: res.data, firstName: '' })
				this.setState({
					user: {
						name: "benny",
						sharedItems: [
							{
								_id: "23jm4h5v2kj3g45",
								name: "glove",
								price: 2,
								ocassion: "baseball",
								comments: "yo"
							},
							{
								_id: "23jqkjdhgfa8i73g45",
								name: "bat",
								price: 20,
								ocassion: "baseball",
								comments: "best bat ever brah"
							}
						]
					}
				});
			// })
			// .then((res) => this.state.users.map((user) => console.log(user.myItems)))
			// .catch((err) => console.log(err));
	};

	deleteItem = (id) => {
		API.deleteItem(id).then((res) => this.getItems()).catch((err) => console.log(err));
	};

	render() {
		console.log(this.state.users.length)
		return (
			<div>
				<div class="col s12 center-align top:60px">
          			<MainLogo />
        		</div>
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
							{this.state.user.sharedItems.map((item) => (
								<tr key={item._id}>
									<td>{item.name} </td>
									<td>{item.item}</td>
									<td>{item.price}</td>
									<td>{item.occasion}</td>
									<td>{item.comments}</td>
									<td>
										<button value={item._id} onClick={() => this.deleteItem(item._id)}>Buy it!</button>
									</td>
								</tr>
							))}
							{this.state.users.map((user) => (
								<tr key={user._id}>
									<td>{user.firstName}</td>
									<td>{user.myItems}</td>
								</tr>
							))}
						</tbody>
					</form>
				</div>
			</div>
		);
	}
}

export default Shopping;
