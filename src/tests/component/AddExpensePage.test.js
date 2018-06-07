import React from 'react';
import {shallow } from 'enzyme';
import { AddExpensePage } from '../../component/AddExpensePage';
import expenses from '../fixtures/expenses';

let onSubmit,history,wrapper;
beforeEach(()=>{
    history = {push: jest.fn()};
    onSubmit = jest.fn();
    wrapper  = shallow(<AddExpensePage onSubmit={onSubmit} history={history}/>);
});

test('should render expense AddExpensePage correctly',()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit',()=>{;
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenCalledWith('/');
    expect(onSubmit).toBeCalledWith(expenses[0]);
});