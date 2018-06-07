import React from 'react';
import moment from 'moment';
//import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';



export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description: props.expense ? props.expense.description:'',
            amount:  props.expense ? (props.expense.amount/100).toString() :'',
            note: props.expense ? props.expense.note:'',
            createdAt: props.expense ? new moment(props.expense.createdAt) : new moment(),
            focused: false,
            error:''
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (! amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };
    onDateChange = (createdAt) => {
        if(createdAt)
        this.setState(() => ({ createdAt }));
    };
    onFocusChange = ({focused}) => {
        this.setState(() => ({ focused }))
    };
    onSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.amount || !this.state.description){
            this.setState(()=>({error : 'Provide descripton and amount'}));
        }else{
            this.setState(()=>({error : ''}));
            this.props.onSubmit({
                description:this.state.description,
                amount:parseFloat(this.state.amount,10)*100,
                createdAt: this.state.createdAt.valueOf(),
                note:this.state.note
            });
        }
    };
    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        } else {
            return (
                <div>
                    <div >{this.state.error && <p>{this.state.error}</p>}</div>
                    <form onSubmit={this.onSubmit}>
                        <input
                            type="text"
                            placeholder="Description"
                            autoFocus
                            value={this.state.description}
                            onChange={this.onDescriptionChange}
                        />
                        <input
                            value={this.state.amount}
                            onChange={this.onAmountChange}
                            type="number"
                            placeholder="Amount"
                        />
                        <SingleDatePicker
                            date={this.state.createdAt}
                            onDateChange={this.onDateChange}
                            focused={this.state.focused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={(day)=>{false}}
                        />
                        <textarea
                            value={this.note}
                            onChange={this.onNoteChange}
                            placeholder="add optional note"
                        >
                        </textarea>
                        <button>Add Expense</button>
                    </form>

                </div>
            );
        }
    }
}