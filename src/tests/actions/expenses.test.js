import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

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
    const action = addExpense({
        description: 'test',
        note: 'test',
        amount: 1,
        createdAt: 1
    });
    expect(action).toEqual(
        {
            type:'ADD_EXPENSE',
            expense: {
                description: 'test',
                note: 'test',
                amount: 1,
                createdAt: 1,
                id:expect.any(String)
            }
        }
    );
});
test('Should setup add expense action object with default values ', () => {
    const action = addExpense();
    expect(action).toEqual(
        {
            type: 'ADD_EXPENSE',
            expense: {
                description: '',
                note: '',
                amount: 0,
                createdAt: 0,
                id:expect.any(String)
            }
        });
});