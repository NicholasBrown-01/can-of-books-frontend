import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class UpdateBookForm extends React.Component {
  render() {
    return (
      <>
        <Form onSubmit={this.handleBookSubmit}>
          <Form.Group controlId='title'>
            <Form.Label>Add Book Name</Form.Label>
            <Form.Control type="text" placeholder="Please add a book title" />
          </Form.Group>

          <Form.Group controlId='description'>
            <Form.Label>Book Description</Form.Label>
            <Form.Control type="text" placeholder="Enter your description here" />
          </Form.Group>

          <Form.Group controlId='status'>
            <Form.Label>Have you read this book?</Form.Label>
            <Form.Control type="text" placeholder="Please enter 'read' or 'not read'" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    )
  }
}

export default UpdateBookForm;