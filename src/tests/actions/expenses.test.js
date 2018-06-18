import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('38ashs7sn', { id: '123abc', note: 'some note' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '38ashs7sn',
        updates: {
            id: '123abc',
            note: 'some note'
        }
    });
});

test('should setup add expense action object with provided values ', () => {
    const action = addExpense(expenses[1]);
    expect(action).toEqual(
        {
            type:'ADD_EXPENSE',
            expense: expenses[1]
        }
    );
});
