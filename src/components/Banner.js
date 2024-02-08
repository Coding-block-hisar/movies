import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import avenger  from '../images/avenger.jpg'

export default class Banner extends Component {
  render() {
    return (
        <Card style={{ width: '18rem',border:'1px solid black' }}>
        <Card.Img variant="top" src={avenger} style={{width:'18rem'}}/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
  }
}
