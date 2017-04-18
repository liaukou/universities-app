import React, { Component } from 'react';
import Pagination from 'react-js-pagination';
import { Grid, Row, Col, Clearfix, PageHeader } from 'react-bootstrap';

import Filter from './components/filter/Filter';
import List from './components/content/List';
import { getData } from './services/App.Service';

// constants
import {
    ITEMS_PER_PAGE,
    PAGE_RANGE,
    FORM_NAME_ID,
    FORM_COUNTRY_ID,
    FORM_BUTTON_ID
} from './constants/App.Constants';

const data = [];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            country: '',
            dataToShow: [],
            activePage: 1
        };
    }

    setData() {
        const config = {
            name: this.state.name,
            country: this.state.country
        }
        getData(config).then((json) => {
            data = json;
            this.updateDataToShow();
        });
    }

    componentDidMount() {
        this.setData();
    }

    updateDataToShow() {
        const startIndex = (this.state.activePage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        const dataToShow = data.slice(startIndex, endIndex);
        const newState = { dataToShow: dataToShow };
        this.setState(newState);
    }

    handlePageChange(pageNumber) {
        const newState = {
            activePage: pageNumber,
        };
        const callback = this.updateDataToShow;
        this.setState(newState, callback);
    }

    handleClick(event) {
        if (event.target.id === FORM_BUTTON_ID || event.key === 'Enter' ) {
            const newState = {
                name: document.getElementById(FORM_NAME_ID).value,
                country: document.getElementById(FORM_COUNTRY_ID).value,
                activePage: 1,
                dataToShow: [],
            };
            const callback = this.setData;
            this.setState(newState, callback);
        }
    }

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <PageHeader>List of Universities</PageHeader>
                </Row>
                <Row className="show-grid">
                    <Filter handleClick={this.handleClick.bind(this)}/>
                </Row>
                 <Row className="show-grid">
                    <List arr={this.state.dataToShow} />
                </Row>
                <Row className="text-center">
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={ITEMS_PER_PAGE}
                        totalItemsCount={data.length}
                        pageRangeDisplayed={PAGE_RANGE}
                        onChange={this.handlePageChange.bind(this)}
                    />
                </Row>
            </Grid>
        );
    }
}

export default App;
