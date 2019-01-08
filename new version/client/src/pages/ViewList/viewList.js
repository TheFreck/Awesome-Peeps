import React, { Component } from "react";
import Row from "../../components/Row";
import API from "../../utils/API";
import RegistryHeader from "../../components/RegistryHeader";
import UserList from "../../components/UserList";
import findOnlineBtn from "../../components/FindOnlineBtn";
import AddListBtn from "../../components/AddListBtn";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";

class Detail extends Component {

};

componentDidMount() {

};


//Render Components: Navbar, title, registry, etc. 
render() {
    return (
      <Nav />
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
          <Col size="s-12">
          {/* Static table headings*/}
            <h1>I'M A GREEDY BASTARD - HERE IS MY LIST</h1>
            <h4>ITEM</h4>
            <p>PRICE</p>
            <p>COMMENTS</p>
            <p>ADD TO SHOPPING LIST</p>
            <p>FIND ONLINE</p>
          </Col>
        </Row>
      </Container>

    );
}

