import React, { Component } from "react";
import Row from "../../components/Row"
import API from "../../utils/API"
// import RegistryHeader from "../../components/RegistryHeader"
import UserList from "../../components/UserList"
import MainLogo from "../../components/MainLogo"

class FriendRegistry extends Component {
  state = {
     userItems: [],
     item: "",
     price: "",
     comments: "",
     user: this.props.state
  };

  componentDidMount() {
    this.getItems();
  }

  getItems = () => {
    API.getItems()
      .then(res =>
        this.setState({ userItems: res.data, item: "", price: "" })
      )
      .catch(err => console.log(err));
  };
  
  render() {
    return (
      <div class="container">
        <div class="tableContainer">
          <div class="row">
            <div class="col-12">
              <table class="centered responsive-table z-depth-5">
                <thead>
                  <br></br>
                    <h3 class="center-align" id="greedy">I'M A GREEDY BASTARD - HERE IS MY LIST</h3>
                  <br></br>
                  <tr>
                    <th>ITEM</th>
                    <th>PRICE</th>
                    <th>COMMENTS</th>
                    <th>ADD TO SHOPPING LIST</th>
                    <th>FIND ONLINE</th>
                  </tr>
                </thead>
              
              </table>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}


export default FriendRegistry;
