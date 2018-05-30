import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


//PURE FUNCTION 
//ADD_EXPENSE
const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
} = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
//SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
});
//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
});
//SET_START_DATE
const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});
const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});
//SET_END_DATE

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return { ...state, text: action.text };
        case 'SORT_BY_DATE':
            return { ...state, sortBy: action.sortBy };
        case 'SORT_BY_AMOUNT':
            return { ...state, sortBy: action.sortBy };
        case 'SET_START_DATE':
            return { ...state, startDate: action.startDate };
        case 'SET_END_DATE':
            return { ...state, endDate: action.endDate };
        default:
            return state;
    }
};

//get visible expenses
const getVisibleExpenses = (expenses,{text, sortBy, startDate, endDate})=>{
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !=='number' || expense.createdAt >= startDate;
        const endDatematch= typeof endDate !=='number' || expense.createdAt >= endDate;
        const textMatch =expense.description.toLowerCase().includes( text.toLowerCase()) ;        
        return startDateMatch && endDatematch && textMatch;        
    }).sort((a,b)=>{
        if(sortBy ==='date'){
            return a.createdAt < b.createdAt ? 1 : -1 ;
        }else if(sortBy ==='amount'){
            return a.amount < b.amount ? 1:-1;
        }
    });

};

//store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(state);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: '100' , createdAt:-200}));
const expensetwo = store.dispatch(addExpense({ description: 'Coffee', amount: '300' , createdAt:-1000}));
/*
console.log(expenseOne);

store.dispatch(removeExpense({ id: expenseOne.expense.id }));
store.dispatch(editExpense(expensetwo.expense.id, { amount: 500 }));
store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());*/
store.dispatch(sortByAmount());
//store.dispatch(sortByDate());
/*
store.dispatch(setStartDate(-1200));
store.dispatch(setEndDate(1250));*/
//store.dispatch(setTextFilter('rent'));
const demoState = {
    expenses: [{
        id: 'pasdiasdm',
        description: 'January Rent',
        note: 'this is a note',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',//date or amount
        startDate: undefined,
        endDate: undefined
    }
};
