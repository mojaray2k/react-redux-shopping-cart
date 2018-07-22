"use strict"
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../../actions/booksActions';
import {bindActionCreators} from 'redux';
import {Grid, Col, Row} from 'react-bootstrap';

// App Compnents
import BookItem from './bookItem';
import BooksForm from './booksForm';
import Cart from './cart';
class BooksList extends Component {
  componentDidMount() {
    this.props.getBooks();
  }
  render() {
    const booksList = this.props.books.map(function(book){
      return (        
          <BookItem 
            key={book._id}
            _id={book._id}
            title={book.title}
            description={book.description}
            price={book.price}
          />          
      )
    })
    return (
      <Grid> 
        <Row>
          <Cart />  
        </Row>      
        <Row style={{marginTop: '15px'}}>
          <Col xs={12} sm={6} md={6}>
            <BooksForm />
          </Col>
          <Col xs={12} sm={6} md={6}>
            {booksList}
          </Col>
        </Row>
      </Grid>
    )
  }
}
function mapStateToProps(state) {
    return { books: state.books.books}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
      getBooks: getBooks 
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
