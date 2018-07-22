"use strict"
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../../actions/booksActions';
import {bindActionCreators} from 'redux';
import {Grid, Col, Row, Button} from 'react-bootstrap';

class BooksList extends Component {
  componentDidMount() {
    this.props.getBooks();
  }
  render() {
    const booksList = this.props.books.map(function(book){
      return (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <h2>{book.description}</h2>
          <h2>{book.price}</h2>
          <Button bsStyle="primary">Buy Now</Button>
        </div>
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
