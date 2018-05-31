import React from 'react';
import ReactDOM from 'react-dom';
import  {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
const expenseOne = store.dispatch(addExpense({ description: 'Water Bill', amount: '100' , createdAt:-200}));
const expensetwo = store.dispatch(addExpense({ description: 'Gas Bill', amount: '300' , createdAt:1000}));
 store.dispatch(addExpense({ description: 'Rent', amount: '109500' , createdAt:-5000}));
//store.dispatch(setTextFilter('Bill'));
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
const jsx =(
    <Provider store={store}>
        <AppRouter />
    </Provider>    
);
console.log(state);
ReactDOM.render(jsx, document.getElementById('app'));
