import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <ul>
            <li>
                <NavLink activeClassName="is-active" to="/">Home</NavLink>
            </li>
            <li>
                <NavLink activeClassName="is-active" to="/create">Create Expenses</NavLink>
            </li>
            <li>
                <NavLink  activeClassName="is-active" to="/help">Help</NavLink>
            </li>            
        </ul>
    </header>
);

export default Header;