import React, { Component } from "react";
import UserList from "../../components/UserList"
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";


class Friends extends Component {
  state = {
   //Set state for buttons that will be generated
   FriendButtons = []
  };

  componentDidMount() {
    this.getFriends();
  }

  //Fetch user information from the API 
  getFriends = () => {
    API.getFriends()
      .then(res =>
        this.setState({ savedItems: res.data})
      )
      .catch(err => console.log(err));
  };

  selectUser = (event) => {
    // console.log("This is data-id", event.target.getAttribute("data-id"))
    console.log("This is uuid value", event.target.value)
    // console.log("This is uuid name", event.target.name)
    // console.log(this.state.user.login.uuid)
    API.updateUser({
        "login.uuid": event.target.value
      })
      .then(res =>
        {console.log("Create: ", res)
          this.setState({ shareWithOthers: res.data }) }
      )
      .catch(err => console.log(err));
  };
//Need onclick event 

//Render components: Navbar, title, friends buttons, container?
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="s-12">
            <Jumbotron>
              <h1>Greedy Bastard List</h1>
              <p>Logo Goes Here</p>
            </Jumbotron>
          </Col>
        </Row>

        <Row>
          <Col size="s12">
            <h2 class="center-align">WHICH GREEDY BASTARD DO YOU WANT TO BUY FOR?</h2>
          </Col>
        </Row>
{/* Render User Buttons */}
        <Row>
        <UserList />
          {/* <Col size="s12">
            <button data-uuid={{uuid}} class="waves-effect waves-light btn-large red seeGifts">{{name}}</button>
          </Col> */}
        </Row> 
      </Container>

    );
  }
}

{/* <div class="container">
  <div class="row">
    <div class="col-12">
    </div>
  </div>

  <div class="row">
    <div class="col s12">
      <h2 class="center-align">WHICH GREEDY BASTARD DO YOU WANT TO BUY FOR?</h2>
      <br>
      <div class="row">
        <div class="col s12 center-align">
          {{#each user}}
          <button data-uuid={{uuid}} class="waves-effect waves-light btn-large red seeGifts">{{name}}</button>
          {{/each}}
        </div>
      </div>
    </div>
  </div>
</div>
</div> */}
export default Friends;