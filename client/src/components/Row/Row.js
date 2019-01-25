import React, { Component } from "react";
import API from "../../utils/API";
class Row extends Component {
  state = {
    updateItem: false,
    _id: this.props._id,
    item: this.props.item,
    price: this.props.price,
    url: this.props.url,
    occasion: this.props.occasion,
    comments: this.props.comments
  };
  openUpdateForm = () => {
    this.setState({
      updateItem: !this.state.updateItem
    });
  };

  deleteItem = id => {
    API.deleteItem(id)
      // .then(res => this.getSavedItems())
      .then(res => this.props.userAndItems())
      .catch(err => {
        console.log(err);
      });
  };
  handleUpdatingItem = e => {
    e.preventDefault();
    // console.log("update button clicked");
    const updateItemData = {
      item: this.state.item,
      price: this.state.price,
      url: this.state.url,
      occasion: this.state.occasion,
      comments: this.state.comments
    };
    // console.log(updateItemData);
    //make api call here
    API.updateItem(this.state._id, updateItemData).then(updatedDbData => {
      this.setState({
        ...updatedDbData.data
      });
    });
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="card">
            <div className="card-content">
              {this.state.updateItem && (
                <div>
                  <span onClick={this.openUpdateForm}>
                    <h5 className="most-headers">
                      Update Your Item{" "}
                      <a className="btn-floating btn-med waves-effect waves-light red darken-3">
                        <i className="material-icons right">close</i>
                        <br />
                      </a>
                    </h5>
                  </span>
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
                  <button
                    onClick={this.handleUpdatingItem}
                    type="submit"
                    className="btn pink lighten-1 z-depth-2"
                  >
                    Update Item
                  </button>
                </div>
              )}
              <div className="card sticky-action" />
              <div className="card-title">{this.state.item}</div>
              <div className="card-content">
                {this.state.url}
                <br />${this.state.price}
                <br />
                {this.state.occasion}
                <br />
                {this.state.comments}
              </div>
            </div>
            <br />
            <div className="card-action">
              <span>
                <button
                  className="btn btn-info ml-1"
                  onClick={e => {
                    e.preventDefault();
                    this.deleteItem(this.state._id);
                  }}
                >
                  Delete
                </button>
                <button
                  className="btn btn-info ml-1"
                  onClick={e => {
                    e.preventDefault();
                    this.openUpdateForm();
                  }}
                >
                  Update
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Row;
