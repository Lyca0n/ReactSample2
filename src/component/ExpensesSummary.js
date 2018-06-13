import  React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({expenseCount, expenseTotal})=>{
    const expenseWord = expenseCount ===1? 'expense' :'expenses';
    const formatTotal = numeral(expenseTotal/100).format('$0,0.00');
    return (
    <div > 
        <h2>{'Viewing '+expenseCount+' '+expenseWord+' totalling '+ formatTotal }</h2>
    </div>
    );
};

const mapStateToProps=(state)=>{
    const vis =selectExpenses(state.expenses, state.filters);
    return{
        count: vis.length,
        total: selectExpensesTotal(vis)
    };
};
export default connect(mapStateToProps)(ExpensesSummary);