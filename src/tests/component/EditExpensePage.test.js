import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../component/EditExpensePage';
import expenses from '../fixtures/expenses';


let startRemoveExpense,startEditExpense,history,wrapper;

beforeEach(()=>{
    history = {push: jest.fn()};
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    wrapper  = shallow(<EditExpensePage expense={expenses[0]} startRemoveExpense={startRemoveExpense} startEditExpense={startEditExpense} history={history} />);
});

test('Should render EditExpensePage',()=>{
    expect(wrapper).toMatchSnapshot();    
});

test('should handle startEditExpense',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenCalledWith('/');
    expect(startEditExpense).toBeCalledWith(expenses[0].id,expenses[0]);
});
test('should handle startRemoveExpense',()=>{
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenCalledWith('/');
    expect(startRemoveExpense).toBeCalledWith({id: expenses[0].id});
});