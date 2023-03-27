import React from 'react';
import axios from 'axios';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  handleBookLoading = async (event) => {
    // componentDidMount() {

      try {
        let url = `${process.env.REACT_APP_SERVER_BOOKS}/books`;
        let bookDataFromAxios = await axios.get(url);
        
        this.setState({
          books: bookDataFromAxios.data,
          error: false
        });

      } catch (error) {
        this.setState({
          error: true,
          errorMessage: error.message
        })
      }
    
  };


  render() {

    console.log('App state', this.state)
    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
