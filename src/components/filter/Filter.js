import React, { Component } from 'react';
import { Well, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

// constants
import {
    FORM_NAME_ID,
    FORM_COUNTRY_ID,
    FORM_BUTTON_ID
} from '../../constants/App.Constants';

function Filter(props) {
    return (
        <Well bsSize="large">
            <Form inline>
                <FormGroup controlId={FORM_NAME_ID}>
                    <ControlLabel>University name</ControlLabel>
                    {' '}
                    <FormControl onKeyPress={props.handleClick} type="text" placeholder="University of Oxford" />
                </FormGroup>
                {' '}
                <FormGroup controlId={FORM_COUNTRY_ID}>
                    <ControlLabel>Country</ControlLabel>
                    {' '}
                    <FormControl onKeyPress={props.handleClick} type="text" placeholder="United Kingdom" />
                </FormGroup>
                {' '}
                <Button id={FORM_BUTTON_ID} onClick={props.handleClick}>
                    Find
                </Button>
            </Form>
        </Well>
    );
}

export default Filter;
