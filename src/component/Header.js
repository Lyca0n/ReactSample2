import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import {startLogout} from '../actions/auth';

export const Header = ({startLogout}) => (
    <header>
        <h1>Expensify</h1>
        <ul>
            <li>
                <NavLink activeClassName="is-active" to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
                <NavLink activeClassName="is-active" to="/create">Create Expenses</NavLink>
            </li>
            <li>
                <button onClick={startLogout}>Logout</button>
            </li>
        </ul>
    </header>
);

const mapDispatchToProps=(dispatch)=>({
    startLogout: ()=> dispatch(startLogout())
});

export default connect(undefined,mapDispatchToProps)(Header);