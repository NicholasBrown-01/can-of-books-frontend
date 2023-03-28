import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class BookForm extends React.Component {
  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label>Add Book Name</Form.Label>
          <Form.Control type="text" placeholder="Please add a book title" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Book Description</Form.Label>
          <Form.Control type="password" placeholder="Enter your description here" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Have you read this book?</Form.Label>
          <Form.Control type="text" placeholder="Please enter 'read' or 'not read'" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default BookForm;