import React, { Component } from 'react';
import { Row, Col, ListGroupItem } from 'react-bootstrap';

function Item(props) {
    return (
        <ListGroupItem>
            <Row className="show-grid">
                <Col xs={3} md={3}>{props.data.name}</Col>
                <Col xs={2} md={2}>{props.data.country}</Col>
                <Col xsHidden smHidden md={1}>{props.data.alpha_two_code}</Col>
                <Col xsHidden smHidden md={2}>{props.data.domain}</Col>
                <Col xs={3} md={3}>{<a href={ props.data.web_page }>{ props.data.web_page }</a>}</Col>
            </Row>
        </ListGroupItem>
    );
}

export default Item;
