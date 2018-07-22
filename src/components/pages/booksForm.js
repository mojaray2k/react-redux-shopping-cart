"use strict"
import React ,{Component}from 'react';
import {Button, ControlLabel, FormControl, FormGroup, Panel, Well} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {findDOMNode} from 'react-dom';
import { postBooks } from '../../actions/booksActions';

class  BooksForm extends Component{
  handleSubmit(){
    const book = [{
      title: findDOMNode(this.refs.title).value,
      description: findDOMNode(this.refs.description).value,
      price: findDOMNode(this.refs.price).value
    }]
    this.props.postBooks(book)
  }
  render(){
    return (
      <Well>
        <Panel>
          <FormGroup controlId="title">
            <Panel.Heading><ControlLabel>Title</ControlLabel></Panel.Heading>
            <Panel.Body>
              <FormControl 
                type="text"
                placeholder="Enter Title"
                ref="title"
              />
            </Panel.Body>
          </FormGroup>
          <FormGroup controlId="description">
            <Panel.Heading><ControlLabel>Description</ControlLabel></Panel.Heading>
            <Panel.Body>
              <FormControl 
                type="text"
                placeholder="Enter Description"
                ref="description"
              />
            </Panel.Body>
          </FormGroup>
          <FormGroup controlId="price">
            <Panel.Heading><ControlLabel>Price</ControlLabel></Panel.Heading>
            <Panel.Body>
              <FormControl 
                type="text"
                placeholder="Enter Price"
                ref="price"
              />
            </Panel.Body>
          </FormGroup>
          <Panel.Footer><Button bsStyle="primary" onClick={this.handleSubmit.bind(this)}>Save</Button></Panel.Footer>
        </Panel>
      </Well>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ postBooks }, dispatch);
}

export default connect(null, mapDispatchToProps)(BooksForm);
