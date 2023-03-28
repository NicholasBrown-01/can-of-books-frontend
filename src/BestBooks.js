import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      errorMessage: '',
      books: []
    }
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
            <Carousel>
              {this.state.books.map((book) => (
                <Carousel.Item
                key={book._id}>
                  <img className="book-images" src={book.image} alt="" />
                <img src="https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Coming Soon" />
                  <Carousel.Caption>
                    <h3>{book.title}</h3>
                    <p>{book.description}</p>
                    <p>{book.status}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        ) : (
          <h3>No Books Found</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
