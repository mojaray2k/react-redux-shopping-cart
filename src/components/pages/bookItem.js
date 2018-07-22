"use strict"
import React from 'react';
import {Button, Col, Row, Well} from 'react-bootstrap';

const BookItem = (props) => {
  const {title, description, price} = props;
  return (
    <Well>
      <Row>
        <Col xs={12}>
          <h6>{title}</h6>
          <p>{description}</p>
          <h6>usd. {price}</h6>
          <Button bsStyle="primary">Buy Now</Button>
        </Col>
      </Row>
    </Well>
  )
}

export default BookItem;
