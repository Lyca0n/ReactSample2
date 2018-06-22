import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from './../component/ExpenseDashboardPage';
import AddExpensePage from './../component/AddExpensePage';
import EditExpensePage from './../component/EditExpensePage';
import HelpPage from './../component/HelpPage';
import NotFoundPage from './../component/NotFoundPage';
import LoginPage from './../component/LoginPage';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter= ()=>(
    <Router history={history}>
        <div>
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;