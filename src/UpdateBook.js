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
    }
    console.log(bookToUpdate);
    this.props.updateBook(bookToUpdate);
  }

  render() {
    return (
      <>
        <Form
        show={this.props.showForm} 
        onSubmit={this.handleUpdateSubmit}>
          <Form.Group controlId='title'>
            <Form.Label>Update Book Name</Form.Label>
            <Form.Control type="text" placeholder="Update a book title" defaultValue={this.props.books.title} />
          </Form.Group>

          <Form.Group controlId='description'>
            <Form.Label>Update Book Description</Form.Label>
            <Form.Control type="text" placeholder="Enter your description here" defaultValue={this.props.books.description} />
          </Form.Group>

          <Form.Group controlId='status'>
            <Form.Label>Have you read this book?</Form.Label>
            <Form.Control type="text" placeholder="'read' or 'not read'" defaultValue={this.props.books.status} />
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