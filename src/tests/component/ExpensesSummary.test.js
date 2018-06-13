import React  from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import {ExpensesSummary} from '../../component/ExpensesSummary';


test('Should render ExpensesSummary component correctly single expense',()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={9434}/>);
    expect(wrapper).toMatchSnapshot();
});
test('Should render ExpensesSummary component correctly multiple expense',()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={34} expenseTotal={9434}/>);
    expect(wrapper).toMatchSnapshot();
});
