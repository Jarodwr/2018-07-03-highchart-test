import React from 'react';
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';

class AboutPage extends React.Component {
  render() {
    return (
      <Container fluid>
      <Row>
        <Col sm={false} lg={3}/>
        <Col sm={12} lg={6}>
          <h1 className="mt-1">About</h1>
          <h4>Technologies Used:</h4>
          <ListGroup>
            <ListGroupItem><h5>Laravel</h5></ListGroupItem>
            <ListGroupItem><h5>Reactjs</h5></ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
      </Container>
    );
  }
}

export default AboutPage;