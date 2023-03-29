import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

class UpdateBookForm extends React.Component {

  handleUpdateSubmit = (event) => {
    console.log('Am I firing?');
    event.preventDefault();

    let bookToUpdate = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value,
      _id: this.props.books._id
    }
    console.log(bookToUpdate);
    //Handler to update the database from BestBooks.js
    this.props.updateBook(bookToUpdate);
    // trying to close the form after handler runs
    this.setState({
      showForm: false
    })
  }

  render() {
    return (
      <Container>
        <Form
        
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
            Update
          </Button>
        </Form>
      </Container>
    )
  }
}

export default UpdateBookForm;