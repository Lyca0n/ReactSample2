import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from './../component/ExpenseDashboardPage';
import AddExpensePage from './../component/AddExpensePage';
import EditExpensePage from './../component/EditExpensePage';
import HelpPage from './../component/HelpPage';
import NotFoundPage from './../component/NotFoundPage';
import LoginPage from './../component/LoginPage';
import Header from './../component/Header';



const AppRouter= ()=>(
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route path="/dashboard" component={ExpenseDashboardPage} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter