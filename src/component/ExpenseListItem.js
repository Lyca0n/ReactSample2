import React from 'react';

const ExpenseListItem =({description,amount,createdAt}})=>(
    <div>
        {props.description && <h1>description: {props.description}</h1>}
        {props.amount && <p>Amount: {props.amount}</p>}
        {props.createdAt && <p>Created at: {props.createdAt}</p>}
        
    </div>
);

export default ExpenseListItem;