import React from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { setTextFilter, sortByDate, sortByAmount,setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
    state = {
        focused: null
    };
    onDatesChange=({startDate, endDate})=>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange=(focused)=>{
        this.setState(()=>({
            focused
        }));
    };    
    render() {

        return (<div>
            <input
                type="text"
                value={this.props.filters.text} onChange={(e) => {
                    props.dispatch(setTextFilter(e.target.value));
                }}
            />
            <select
                value={this.props.filters.sortBy} onChange={(e) => {
                    if (e.target.value === 'date') {
                        this.props.dispatch(sortByDate());
                    } else if (e.target.value === 'amount') {
                        this.props.dispatch(sortByAmount());
                    }
                    console.log(e.target.value);
                }}
            >
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            <DateRangePicker
                startDate={this.props.filters.startDate}
                startDateId='startDate'
                endDate={this.props.filters.endDate}
                endDateId='endDate'
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.focused}
                onFocusChange={this.onFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={(day)=>{false}}
            />
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);