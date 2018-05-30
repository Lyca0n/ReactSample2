import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';

const ExpenseList= (props)=>(
    <div>
        <h1>ExpenseList</h1>
        {props.expenses.map((expense)=>{
            return <ExpenseListItem key={expense.id} {...expense}/>
        })}
    </div>
);

//map function
const mapStateToProps =(state)=>{
    return {
        expenses: state.expenses
    };
};

//"connect()"" returns a function to recieve the component name
export default connect(mapStateToProps)(ExpenseList);
