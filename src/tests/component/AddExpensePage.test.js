import React from 'react';
import {shallow } from 'enzyme';
import { AddExpensePage } from '../../component/AddExpensePage';
import expenses from '../fixtures/expenses';


let startAddExpense,history,wrapper;
beforeEach(()=>{
    history = {push: jest.fn()};
    startAddExpense = jest.fn();
    wrapper  = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history}/>);
});

test('should render expense AddExpensePage correctly',()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenCalledWith('/');
    expect(startAddExpense).toBeCalledWith(expenses[0]);
});