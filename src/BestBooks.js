import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import BookModal from './BookModal.js';
import UpdateBook from './UpdateBook.js';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      errorMessage: '',
      showModal: false,
      showForm: false,
      books: []
    }
  }



  handleCloseModal = () => {
    this.setState({
      showModal: false
    });
  }

  handleOpenModal = () => {
    this.setState({
      showModal: true,

    })
  }
  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  handleBookLoading = async (event) => {

    try {
      let url = `${process.env.REACT_APP_SERVER_BOOKS}/books`;
      let bookDataFromAxios = await axios.get(url);
      this.setState({
        books: bookDataFromAxios.data,
        error: false
      });
      console.log('Book Data', bookDataFromAxios);

    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message
      })
    }

  };

  // Handler for Building Books from a Form as an object

  handleBookSubmit = (event) => {
    event.preventDefault();

    let bookObj = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value
    }
    console.log(bookObj);
    this.postBook(bookObj);
  }

  //**  Handler to Post These books to the database */

  postBook = async (bookObj) => {
    try {

      let url = `${process.env.REACT_APP_SERVER_BOOKS}/books`;
      let createdBook = await axios.post(url, bookObj);

      this.setState({
        books: [...this.state.books, createdBook.data],
        showModal: false
      });

    } catch (error) {
      console.log(error.message)
    }
  }

  //*** UPDATE B OOK IN THE STATE USING AXIOS TO HIT THE BACKEND */
  updateBook = async (bookObjToUpdate) => {
    try {
      let url = `${process.env.REACT_APP_SERVER_BOOKS}/books/${bookObjToUpdate._id}`;

      let updatedBook = await axios.put(url, bookObjToUpdate);

      // TODO: set state with return from axios
      let updatedBookArray = this.state.books.map(existingBook => {
        return existingBook._id === bookObjToUpdate._id ?
          updatedBook.data
          : existingBook
      });

      this.setState({
        books: updatedBookArray
      })

    } catch (error) {
      console.log(error.message);
    }
  }

  //*** DELETE BOOK  */
  deleteBook = async (id) => {
    try {
      //TODO: AXIOS IS GOING TO SEND AN ID OF THE BOOK TO DELETE
      let url = `${process.env.REACT_APP_SERVER_BOOKS}/books/${id}`;
      await axios.delete(url);

      // TODO: UPDATE STATE TO REMOVE THAT DELETED BOOK
      let updatedBooks = this.state.books.filter(book => book._id !== id); // if book id DOES NOT MATCH the one selected than add it 
      this.setState({
        books: updatedBooks
      });

    } catch (error) {
      console.log(error.response);
    }
  }

  //** REACT LIFECYCLE METHOD: As soon as APP is rendered, it will call the provided function */
  componentDidMount() {
    this.handleBookLoading();
  }

  render() {

    return (
      <>
        <h2>My Essential Lifelong Learning & Formation Shelf</h2>

        {this.state.books.length > 0 ? (
          <div>

            <Carousel >
              {this.state.books.map((book) => (
                <Carousel.Item
                  key={book._id}>
                  <img className="book-images" src={book.image} alt="" />
                  <img src="https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Coming Soon" />
                  <Carousel.Caption>
                    <h3>{book.title}</h3>
                    <p>{book.description}</p>
                    <p>{book.status}</p>
                    {/* Anonymous function added to button to allow for id to be fed into the deleteBook handler */}
                    <Button onClick={() => { this.deleteBook(book._id) }} variant="danger">DELETE</Button>
                    <Button onClick={() => { this.updateBook(book._id)}} variant="primary">Update Book Information</Button>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>

            <Button onClick={this.handleOpenModal} variant="success">ADD BOOK</Button>

            <UpdateBook
              showForm={this.state.showForm}
              books={this.state.books}
            />


            <BookModal
              showModal={this.state.showModal}
              handleCloseModal={this.handleCloseModal}
              handleBookSubmit={this.handleBookSubmit}
            />
          </div>
        ) : (
          <h3>No Books Found</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
