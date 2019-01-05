import  React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import {Link} from 'react-router-dom';

export const ExpensesSummary = ({expenseCount, expenseTotal})=>{
    const expenseWord = expenseCount ===1? 'expense' :'expenses';
    const formatTotal = numeral(expenseTotal/100).format('$0,0.00');
    return (
    <div className="page-header"> 
        <div className="content-container"> 
            <h1 className="page-header__title">Viewing <span>{expenseCount} </span> {expenseWord} totalling  <span>{formatTotal}</span></h1>
            <div className="page-header__actions">
                <Link className="button" to="/create">Add Axpense</Link>
            </div>   
        </div>
    </div>
    );
};

const mapStateToProps=(state)=>{
    const vis =selectExpenses(state.expenses, state.filters);
    return{
        expenseCount: vis.length,
        expenseTotal: selectExpensesTotal(vis)
    };
};
export default connect(mapStateToProps)(ExpensesSummary);