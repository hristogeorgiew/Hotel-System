import React, { Component } from 'react';
import FurnitureList from '../Common/FurnitureList';
import Paginator from '../Common/Paginator';
import {fetchPageAction, fetchSearchAction} from '../../actions/furnitureActions';
import { connect } from 'react-redux';


class HomePage extends Component {

    componentWillMount() {
        this.props.fetchPage(1);
    }

    render() {

        const { furniture } = this.props;

        return (
            <div className="container">
            <div className="row space-top">
                <div className="col-md-12">
                    <h1>Welcome to Furniture System</h1>
                    <p>Select furniture from the catalog to view details.</p>

                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" placeholder="Search" type="text" />
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>

            <FurnitureList furniture={furniture}/>
            <Paginator />
        </div>
        )
    }
}

function mapStateToprops (state){
    return {
        furniture: state.furniture
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchPage: (page) => dispatch(fetchPageAction(page))
    };
}
    

export default connect(mapStateToprops, mapDispatchToProps)(HomePage);