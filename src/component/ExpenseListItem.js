import React from 'react';
import {Link } from 'react-router-dom';

const ExpenseListItem = ({id,description, amount, createdAt }) => (
    <div>
        {description && <Link to={`/edit/${id}`}><h1>description: {description}</h1></Link>}
        {amount && <p>Amount: {amount}</p>}
        {createdAt && <p>Created at: {createdAt}</p>}
    </div>
);

export default ExpenseListItem;