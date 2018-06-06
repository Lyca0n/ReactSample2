import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment'; 

test('should set default state', () => {
    const state = expensesReducer(undefined, '@@INIT');
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add new expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense:{
            id:'7',
            note:'some note',
            description:'none',
            amount:200000,
            createdAt:moment()
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expense]);
});
test('should edit expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description: 'EDIT EXPENSE',
            note: 'EDIT EXPENSE',
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1]).toEqual({ ...expenses[1], ...action.updates });
});

test('should not edit expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: -1,
        updates: {
            description: 'EDIT EXPENSE',
            note: 'EDIT EXPENSE',
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
