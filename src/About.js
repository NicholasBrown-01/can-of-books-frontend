import { Component } from "react";
import Card from 'react-bootstrap/Card';

class Profile extends Component {

  render() {
    return (
      <section id="cards">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Nicholas Brown</Card.Title>
            <Card.Text>
              Nicholas is the CSS wizard while being a full time dad/farmer/dog breeder/husband.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Reece Renninger</Card.Title>
            <Card.Text>
              Reece is going to be probably become a backend dev because he has no styling capabilities.
            </Card.Text>

          </Card.Body>
        </Card>
      </section>
    )
  }
};

export default Profile;
