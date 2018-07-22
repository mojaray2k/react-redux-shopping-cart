"use strict"
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../../actions/booksActions';
import {bindActionCreators} from 'redux';
import {Grid, Col, Row} from 'react-bootstrap';
import BookItem from './bookItem';

class BooksList extends Component {
  componentDidMount() {
    this.props.getBooks();
  }
  render() {
    const booksList = this.props.books.map(function(book){
      return (
        <Col key={book.id} xs={12} sm={6} md={4}>
          <BookItem 
            id={book.id}
            title={book.title}
            description={book.description}
            price={book.price}
          />          
        </Col> 
      )
    })
    return (
      <Grid>
        <Row style={{marginTop: '15px'}}>
          {booksList}
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
