import React from 'react';
import BookListComponent from '../components/BookListComponent';
import BookDetailsComponent from '../components/BookDetailsComponent';
import HomeScreen from './HomeScreen';
import AuthorScreen from './AuthorScreen';
let bookModule = require('../services/books.js');


class BookListInfoScreen extends React.Component {


  //TODO: Initialize Here
  books = bookModule.books;

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  handleButtonClick = (idx) => {
    const newBook = this.state.books[idx];
    this.setState({ book: newBook });
  }

  getInitialState = () => {
    const s = {
      books: this.books,
      book: this.books[0],
    }
    return s;
  }


  render = () => {
    return (
      // <div>
      //   <HomeScreen/>
      // </div>

      <div className='BookListInfoScreen'>
        <h1>Book List Info</h1>
        <div className='row'>
          <div className='col col-3'>
            <BookListComponent books={this.books} onButtonClick={this.handleButtonClick} />
          </div>
          <div className='col col-9'>
            <BookDetailsComponent book={this.state.book} />
          </div>
        </div>
      </div>

      // <div>
      //   <AuthorScreen/>
      // </div>
    );
  }
}

export default BookListInfoScreen;