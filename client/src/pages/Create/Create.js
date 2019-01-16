<<<<<<< HEAD:client/src/pages/Create/Create.js
import React, { Component } from "react";
import Row from "../../components/Row";
import API from "../../utils/API";
import RegistryHeader from "../../components/RegistryHeader";
import UserList from "../../components/UserList";

class Create extends Component {
  state = {
    savedItems: [],
    item: "",
    price: 0,
    url: "",
    occasion: "",
    comments: "",
    users: [],
    myItems: [],
    user: this.props.state
  }

  componentDidMount() {
    this.getSavedItems();

    this.setState({ uuid: this.props.state.user.uuid })
    console.log("props from create.js", this.props.state.user.uuid)
    // this.getAllUsers();
  }



userAndItems = (uuid) => {
  API.getUserandItems()
  .then(res =>
    this.setState({ savedItems: res.data })
  )
  .catch(err => console.log(err));
};
  // getSavedItems = () => {
  //   API.getItems()
  //     .then(res =>
  //       this.setState({ savedItems: res.data })
  //     )
  //     .catch(err => console.log(err));
  // };

  getSavedItems = () => {
    API.getItems()
      .then(res => this.setState({ savedItems: res.data }))
      .catch(err => console.log(err));
  };



  

  //Find saved users
  getAllUsers = () => {
    API.getUsers()
      .then(res => this.setState({ users: res.data }))
      .catch(err => console.log(err));
  };

  //Delete item from registry
  deleteItem = id => {
    API.deleteItem(id)
      .then(res => this.getSavedItems())
      .catch(err => {
        console.log(err);
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //Saves item to registry
  handleSaveItem = event => {
    event.preventDefault();
    console.log(this.state.uuid, "")
    console.log("CLICK")
    if (this.state.item) {
      API.saveItem({
        item: this.state.item,
        price: this.state.price,
        url: this.state.url,
        occasion: this.state.occasion,
        comments: this.state.comments,
        uuid: this.state.uuid
      })
        .then(res => {
          console.log("save item response: ", res);
          this.getSavedItems();
        })
        .catch(err => console.log(err));
    }
  };

  //Share registry with another user
  shareRegistry = event => {
    event.preventDefault();
    console.log("Share with user");
    API.getUsers({
      name: this.state.name,
      uuid: this.state.uuid
    })
      .then(res => {
        console.log("users data: ", res);
        this.getAllUsers();
      })
      .catch(err => console.log(err));
  };

  // selectUser = event => {
  //   event.preventDefault();
  //   console.log("Shared with", event.target.value)
  //   console.log("User Selected")

  //     API.getUser({
  //       this.setState({ sharedUser: res.data })
  //     })
  // }

  selectUser = event => {
    // console.log("This is data-id", event.target.getAttribute("data-id"))
    console.log("This is uuid value", event.target.value);
    // console.log("This is uuid name", event.target.name)
    // console.log(this.state.user.login.uuid)
    API.updateUser({
      "login.uuid": event.target.value
    })
      .then(res => {
        console.log("Create: ", res);
        this.setState({ shareWithOthers: res.data });
      })
      .catch(err => console.log(err));
  };

  //Value from URL input
  handleURL = event => {
    this.setState({ url: event.target.value });
  };

  //Value from Price input
  handlePrice = event => {
    this.setState({ price: event.target.value });
  };

  //Value from Occasion input
  handleOccasion = event => {
    this.setState({ occasion: event.target.value });
  };

  //Value from Comments input
  handleComments = event => {
    this.setState({ comments: event.target.value });
  };

  renderSaved = () => {
    return this.state.savedItems.map(save => (
      <Row
        _id={save._id}
        key={save._id}
        item={save.item}
        price={save.price}
        url={save.url}
        occasion={save.occasion}
        comments={save.comments}
        deleteItem={this.deleteItem}
        getSavedArticles={this.getSavedArticles}
      />
    ));
  };

  renderUsers = () => {
    return this.state.users.map(save => (
      <UserList
        _id={save._id}
        key={save._id}
        uninsta
        name={save.name}
        uuid={save.uuid}
        pic={save.pic}
        selectUser={this.selectUser}
      />
    ));
  };

  render() {
    return (
      <div className="container bg-white">
        <h1 className="text-">Create Your Registry</h1>
        <form>
          <div className="form-group">
            <label htmlFor="item">
              <h4>Item</h4>
            </label>
            <input
              onChange={this.handleChange}
              name="item"
              value={this.state.item}
              type="text"
              className="form-control"
              id="item"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">
              <h4>Price</h4>
            </label>
            <input
              onChange={this.handleChange}
              name="price"
              value={this.state.price}
              type="text"
              className="form-control"
              id="price"
            />
          </div>
          <div className="form-group">
            <label htmlFor="url">
              <h4>URL</h4>
            </label>
            <input
              onChange={this.handleChange}
              name="url"
              value={this.state.url}
              type="text"
              className="form-control"
              id="url"
            />
          </div>
          <div className="form-group">
            <label htmlFor="occasion">
              <h4>Occasion</h4>
            </label>
            <input
              onChange={this.handleChange}
              name="occasion"
              value={this.state.occasion}
              type="text"
              className="form-control"
              id="occasion"
            />
          </div>
          <div className="form-group">
            <label htmlFor="comments">
              <h4>Comments</h4>
            </label>
            <input
              onChange={this.handleChange}
              name="comments"
              value={this.state.comments}
              type="text"
              className="form-control"
              id="comments"
            />
          </div>
          <button
            onClick={this.handleSaveItem}
            type="submit"
            className="btn btn-info"
          >
            Add To Registry
          </button>
          <button
            onClick={this.shareRegistry}
            type="submit"
            className="btn btn-info"
          >
            Share Registry
          </button>
        </form>
        <br />
        <RegistryHeader />
        <div>{this.renderSaved()}</div>
        <h4>Who do you want to share your list with?</h4>
        <UserList />
        <div>{this.renderUsers()}</div>
      </div>
    );
  }
}

=======
import React, { Component } from 'react';
import Row from '../../components/Row';
import API from '../../utils/API';
import RegistryHeader from '../../components/RegistryHeader';
import UserList from '../../components/UserList';
class Create extends Component {
	state = {
		savedItems: [],
		item: '',
		price: 0,
		url: '',
		occasion: '',
		comments: '',
		users: [],
		search: '',
		name: '',
		myItems: [],
		notes: '',
		user: this.props.state,
		shared: []
	};
	//These load whent the page loads
	componentDidMount() {
		this.setState({ uuid: this.state.user.uuid });
		this.userAndItems(this.state.user.uuid);
	}
	//This identifies who is logged in and populates their list with the items they want
	userAndItems = (id) => {
		API.getUserandItems(id)
			.then((res) => {
				console.log('this is our res fron userctrl', res.data.myItems);
				this.setState({ myItems: res.data.myItems });
			})
			.catch((err) => console.log(err));
	};
	//Find all users
	getAllUsers = () => {
		API.getUsers()
			.then((res) => {
				console.log('This is res.data', res.data);
				this.setState({ users: res.data });
			})
			.catch((err) => console.log(err));
	};

	//Delete item from registry (database)
	deleteItem = (id) => {
		API.deleteItem(id)
			// .then(res => this.getSavedItems())
			.then((res) => this.userAndItems())
			.catch((err) => {
				console.log(err);
			});
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	//Saves item to registry
	handleSaveItem = (event) => {
		event.preventDefault();
		if (this.state.item) {
			API.saveItem({
				item: this.state.item,
				price: this.state.price,
				url: this.state.url,
				occasion: this.state.occasion,
				comments: this.state.comments,
				uuid: this.state.uuid
			})
				.then((res) => {
					this.userAndItems();
				})
				.catch((err) => console.log(err));
		}
	};

	//Share registry with another user
	shareRegistry = (event) => {
		event.preventDefault();
		console.log('Share with user');
		API.getUsers({
			name: this.state.firstName,
			uuid: this.state.uuid
		})
			.then((res) => {
				console.log('users data: ', res.data);
				this.getAllUsers();
			})
			.catch((err) => console.log(err));
	};
	selectUser = (userdata) => {
		console.log('THIS IS ID', userdata.uuid);
		// event.preventDefault();
		// this.setState({ shared: event.target.value})
		API.updateUser({
			uuid: userdata.uuid,
			firstName: userdata.firstName
		})
			.then((res) => {
				console.log('Create: ');
				this.setState({ sharewithMe: res.data });
			})
			.catch((err) => console.log(err));
	};
	//Value from URL input
	handleURL = (event) => {
		this.setState({ url: event.target.value });
	};
	//Value from Price input
	handlePrice = (event) => {
		this.setState({ price: event.target.value });
	};
	//Value from Occasion input
	handleOccasion = (event) => {
		this.setState({ occasion: event.target.value });
	};
	//Value from Comments input
	handleComments = (event) => {
		this.setState({ comments: event.target.value });
	};
	//updates search state to current value in search bar
	updateSearch(event) {
		this.setState({ search: event.target.value.substr(0, 20) });
	}

	renderSaved = () => {
		if (this.state.myItems) {
			return this.state.myItems.map((save) => (
				<Row
					_id={save._id}
					key={save._id}
					item={save.item}
					price={save.price}
					url={save.url}
					occasion={save.occasion}
					comments={save.comments}
					deleteItem={this.deleteItem}
					userAndItems={this.userAndItems}
				/>
			));
		}
	};
	renderUsers = () => {
		return this.state.users.map((save) => (
			<UserList
				_id={save._id}
				key={save._id}
				firstName={save.firstName}
				uuid={save.uuid}
				pic={save.pic}
				sharewithMe={save.sharewithMe}
				selectUser={this.selectUser}
			/>
		));
	};

	render() {
		return (
			<div className="container">
				<form className="white">
					<h5 className="grey-text text-darken-3">Create Your Registry</h5>
					<div className="form-group">
						<label htmlFor="item">
							<h6>Item</h6>
						</label>
						<input
							onChange={this.handleChange}
							name="item"
							value={this.state.item}
							type="text"
							className="form-control"
							id="item"
							aria-describedby="emailHelp"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="price">
							<h6>Price</h6>
						</label>
						<input
							onChange={this.handleChange}
							name="price"
							value={this.state.price}
							type="text"
							className="form-control"
							id="price"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="url">
							<h6>URL</h6>
						</label>
						<input
							onChange={this.handleChange}
							name="url"
							value={this.state.url}
							type="text"
							className="form-control"
							id="url"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="occasion">
							<h6>Occasion</h6>
						</label>
						<input
							onChange={this.handleChange}
							name="occasion"
							value={this.state.occasion}
							type="text"
							className="form-control"
							id="occasion"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="comments">
							<h6>Comments</h6>
						</label>
						<input
							onChange={this.handleChange}
							name="comments"
							value={this.state.comments}
							type="text"
							className="form-control"
							id="comments"
						/>
					</div>
					<button onClick={this.handleSaveItem} type="submit" className="btn pink lighten-1 z-depth-2">
						Add To Registry
					</button>
					<button onClick={this.shareRegistry} type="submit" className="btn pink lighten-1 z-depth-2">
						Share Registry
					</button>
				</form>
				<div className="container">
					<form className="white">
						<RegistryHeader />
						<div>{this.renderSaved()}</div>
						<h4>Who do you want to share your list with?</h4>
						<UserList />
						{/* <input
              onChange={this.handleSearch}
              name="search"
              value={this.state.search}
              type="text"
              className="form-control"
              id="search"
              ></input> */}
						<div>{this.renderUsers()}</div>
					</form>
				</div>
			</div>
		);
	}
}
>>>>>>> 63379b7bfc793dc7804a6334c2b879ac55a438c2:new version/client/src/pages/Create/Create.js
export default Create;
