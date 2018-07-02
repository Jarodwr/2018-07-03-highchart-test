import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Jumbotron, Button} from 'reactstrap';

class HomePage extends React.Component {
  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>Interview Test</h1>
          <p>Click the button to go to the stats page.</p>
          <Button color="primary" size="lg" tag={Link} to={"stats"}>Stats</Button>
        </Jumbotron>
      </Container>
    );
  }
}

export default HomePage;