import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
const NoMatch = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h1>404 You must be --- this tall to ride the hypertubes</h1>
          <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
          </h1>
          <a href="/">go back whence you came</a>
        </Jumbotron>
      </Col>
    </Row>
  </Container>
);

export default NoMatch;
