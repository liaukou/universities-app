import React  from 'react';
import { Row, Col, ListGroupItem } from 'react-bootstrap';

function Item(props) {
    const { name, country, alpha_two_code, domain, web_page } = props.data;
    return (
        <ListGroupItem>
            <Row className="show-grid">
                <Col xs={3} md={3}>{name}</Col>
                <Col xs={2} md={2}>{country}</Col>
                <Col xsHidden smHidden md={1}>{alpha_two_code}</Col>
                <Col xsHidden smHidden md={2}>{domain}</Col>
                <Col xs={3} md={3}>{<a href={web_page}>{web_page}</a>}</Col>
            </Row>
        </ListGroupItem>
    );
}

export default Item;
