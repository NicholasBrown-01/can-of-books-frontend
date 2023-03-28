import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import BookForm from './BookForm'

class BookModal extends React.Component {
  render() {
    return (

      <Modal
        show={this.props.showModal}
        onHide={this.props.handleCloseModal}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Add your Book</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <BookForm 
            handleBookSubmit={this.props.handleBookSubmit}
            />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleCloseModal}>Close</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    );
  }
}

export default BookModal;