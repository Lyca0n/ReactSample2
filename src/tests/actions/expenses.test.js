import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense,addExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);
const uid = 'testuid';
const defaultAuthState = {auth:{ uid }};

beforeEach((done)=>{
    const expensesData={};
    expenses.forEach(({id,description,note,amount,createdAt})=>{
        expensesData[id]={description,note,amount,createdAt};
    });
    database.ref(`users/${uid}/expenses`).set(expensesData).then(()=>done());
});

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});


test('should remove expense from database', (done)=>{
    const store =  createMockStore(defaultAuthState);
    const testId = expenses[0].id;
    store.dispatch(startRemoveExpense({ id: testId})).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'REMOVE_EXPENSE',
            id:testId
        });
        return database.ref(`users/${uid}/expenses/${testId}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toBeFalsy();
            
        done();  
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

test('should edit item in firebase', (done)=>{
    const store = createMockStore(defaultAuthState);
    const updates={
        description:'updated',
        amount: 0,
        note:'updated',
        createdAt: 0
    }
    const testId = expenses[0].id;
    store.dispatch(startEditExpense(testId,updates)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'EDIT_EXPENSE',
            id:testId,
            updates
        });
        return database.ref(`users/${uid}/expenses/${testId}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(updates);
        done();  
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

test('should add expense to database and store',(done)=>{
    const store = createMockStore(defaultAuthState);
    const expenseData={
        description: 'Mouse',
        amount: 3000,
        note:'this one is better',
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                id:expect.any(String),
                ...expenseData
            }
        });
        
       return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=>{
            expect(snapshot.val()).toEqual(expenseData);
             done();  
        });
});

test('should add expense with defaults to database store',(done)=>{
    const store = createMockStore(defaultAuthState);
    const expenseData={
            description:'',
            note:'',
            amount:0,
            createdAt:0
    };
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                id:expect.any(String),
                ...expenseData
            }
        });
        
       return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=>{
            expect(snapshot.val()).toEqual(expenseData);
             done();  
        });    
});

test('should setup set expenes action object with data', () => {
    const action =setExpenses(expenses);
    expect(action).toEqual({
        type:'SET_EXPENSES',
        expenses
    });
   
});

test('should fetch the expenses from firebase', (done)=>{
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
           type:'SET_EXPENSES',
           expenses
        });
        done();
    });
    
});
