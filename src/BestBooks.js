import React from 'react';
import axios from 'axios';
// import Carousel from 'react-bootstrap/Carousel';

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

    console.log('App state>>>>', this.state);
    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length > 0 ? (
          <p></p>
        ) : (
          <h3>No Books Found</h3>
        )}
      </>
    )
  }
}

export default BestBooks;

// <Carousel>

//   <Carousel.Item>
//     <img
//       className="book-images"
//       src="./img/coming-soon.jpg"
//       alt="Coming Soon Picture"
//     />
//     <Carousel.Caption key={books._id}>
//       <h3>{books.title}</h3>
//       <p>{books.description}</p>
//       <p>{books.status}</p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>