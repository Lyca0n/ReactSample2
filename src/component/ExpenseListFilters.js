import React from 'react';
import { connect } from 'react-redux';
//import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount,setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
    state = {
        focused: null
    };
    onDatesChange=({startDate, endDate})=>{
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange=(focused)=>{
        this.setState(()=>({
            focused
        }));
    };  
    onTextChange= (e)=>{
        this.props.setTextFilter(e.target.value);
    };  
    onSortChange= (e) => {
        if (e.target.value === 'date') {
            this.props.sortByDate();
        } else if (e.target.value === 'amount') {
            this.props.sortByAmount();
        }
 
    };
    render() {
        return (<div>
            <input
                type="text"
                value={this.props.filters.text} onChange={this.onTextChange}
            />
            <select
                value={this.props.filters.sortBy} onChange={this.onSortChange}
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
const mapDispatchToProps=(dispatch)=>{
    return{
        setStartDate: (startDate)=>{
            dispatch(setStartDate(startDate))
        },
        setEndDate: (endDate)=>{
            dispatch(setEndDate(endDate))
        },
        sortByAmount:()=>{
            dispatch(sortByAmount)
        },
        sortByDate:()=>{
            dispatch(sortByDate)
        },
        setTextFilter:(text)=>{
            dispatch(setTextFilter(text));
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters);