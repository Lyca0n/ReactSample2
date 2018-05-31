import React from 'react';
import moment from 'moment';

export default class ExpenseForm extends React.Component {
    state = {
        description: '', amount: '', note: ''
    };
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
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };
    render() {
        return (
            <div>
                <form>
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