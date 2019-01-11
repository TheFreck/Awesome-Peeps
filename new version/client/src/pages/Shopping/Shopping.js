import React, { Component } from "react";
import API from "../../utils/API";
// import Nav from "../../components/Nav";
import MainLogo from "../../components/MainLogo";
// import DeleteBtn from "../../components/DeleteBtn";

class Shopping extends Component {
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

export default Shopping;