
import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class Header extends Component {
    render() {

        const { loggedIn, onLogout } = this.props;

        return (
            <header>
                <div className="topnav">
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                {loggedIn && <NavLink to="/create" activeClassName="active">Create Hotel</NavLink>}
                {loggedIn && <a href="javascript:void(0)" onClick={onLogout}>Logout</a>}
                {!loggedIn && <NavLink to="/login" activeClassName="active">Login</NavLink>}
                {!loggedIn && <NavLink to="/register" activeClassName="active">Register</NavLink>}
                <NavLink exact to="/contact" activeClassName="active">Contact</NavLink>
                </div>
            </header>
        );
    }

}