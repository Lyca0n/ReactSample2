import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../component/ExpenseDashboardPage';
import ExpenseListItem from '../../component/ExpenseListItem';
import ExpenseListFilters from '../../component/ExpenseListFilters';

test('should render ExpenseDashboardPage correctly',()=>{
    const wrapper = shallow(<ExpenseDashboardPage />);
});