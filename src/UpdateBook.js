import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class UpdateBookForm extends React.Component {
  
  handleUpdateSubmit = (event) => {
    event.preventDefault();

    let bookToUpdate = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value,
      _id: this.props.book._id,
      __v: this.props.book.__v
    }
    console.log(bookToUpdate);
    this.props.updateBook(bookToUpdate);
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleUpdateSubmit}>
          <Form.Group controlId='title'>
            <Form.Label>Add Book Name</Form.Label>
            <Form.Control type="text" placeholder="Please add a book title" defaultValue={this.props.books.title} />
          </Form.Group>

          <Form.Group controlId='description'>
            <Form.Label>Book Description</Form.Label>
            <Form.Control type="text" placeholder="Enter your description here" defaultValue={this.props.books.description} />
          </Form.Group>

          <Form.Group controlId='status'>
            <Form.Label>Have you read this book?</Form.Label>
            <Form.Control type="text" placeholder="Please enter 'read' or 'not read'" defaultValue={this.props.books.status} />
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