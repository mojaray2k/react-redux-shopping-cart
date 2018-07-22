"use strict"
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button, ButtonGroup, Col, Label, Panel, Row, Well} from 'react-bootstrap';

class Cart extends Component {
  renderEmpty(){
    return (<div></div>);
  }
  renderCart(){
    const cartItemsList = this.props.cart.map(function(item){
      return (
        <Panel key={item._id}>
          <Row>
            <Col xs={12} sm={4}>
              <Panel.Heading><h6>{item.title}</h6><span>    </span></Panel.Heading>              
            </Col>
            <Col xs={12} sm={2}>
              <Panel.Heading><h6>usd. {item.price}</h6></Panel.Heading>              
            </Col>
            <Col xs={12} sm={2}>
              <Panel.Heading><h6>qty. <Label bsStyle="success"></Label></h6></Panel.Heading>              
            </Col>
            <Col xs={6} sm={4}>
              <ButtonGroup style={{minWidth: '300px'}}>
                  <Button bsStyle="default" bsSize="small">-</Button>
                  <Button bsStyle="default" bsSize="small">+</Button>
                  <span>     </span>
                  <Button bsStyle="danger" bsSize="small">DELETE</Button>
              </ButtonGroup>  
            </Col>
          </Row>
        </Panel>
      )
    })
    return (
      <Panel bsStyle="primary">
        <Panel.Heading>Cart</Panel.Heading>
        <Panel.Body>{cartItemsList}</Panel.Body>              
      </Panel>
    )
  }
  render() {
    if(this.props.cart[0]){
      return this.renderCart();
    }else {
      return this.renderEmpty();
    }
  }
}

function mapStateToProps(state) {
    return { cart: state.cart.cart}
}

export default connect(mapStateToProps)(Cart)
