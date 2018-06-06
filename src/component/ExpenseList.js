import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList= (props)=>(
    <div>
        <h1>ExpenseList</h1>
        {props.expenses.length ===0 ? (   
            <p>No expenses</p>         
        ):(
            props.expenses.map((expense)=>{
                return <ExpenseListItem key={expense.id} {...expense}/>
            })
        )}
    </div>
);

//map function
const mapStateToProps =(state)=>{
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

//"connect()"" returns a function to recieve the component name
export default connect(mapStateToProps)(ExpenseList);
