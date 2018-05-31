import React from 'react';
import {connect} from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem =({dispatch, id, description,amount,createdAt})=>(
    <div>
        {description && <h1>description: {description}</h1>}
        {amount && <p>Amount: {amount}</p>}
        {createdAt && <p>Created at: {createdAt}</p>}  
        <button onClick={(e)=>{
            dispatch(removeExpense({id}));
        }}>Remove Expense</button>      
    </div>
);

export default connect()(ExpenseListItem);