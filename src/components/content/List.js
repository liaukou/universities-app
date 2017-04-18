import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Item from './Item';

function List(props) {
    const items = props.arr.map((data, index) =>
        <Item
            key={index}
            data={data}
        />
    );
    return (
        <ListGroup>
            {items}
        </ListGroup>
    );
}

export default List;
