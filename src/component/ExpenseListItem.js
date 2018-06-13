import React from 'react';
import {Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral'; 
const ExpenseListItem = ({id,description, amount, createdAt }) => (
    <div>
        {description && <Link to={`/edit/${id}`}><h1>description: {description}</h1></Link>}
        {amount && <p>Amount: {numeral(amount/100).format('$0,0.00')}</p>}
        {createdAt && <p>Created at: {moment(createdAt).format('MMMM Do, YYYY')}</p>}
    </div>
);

export default ExpenseListItem;