import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../component/ExpenseListFilters';

let wrapper,setStartDate,setEndDate,sortByDate,sortByAmount,setTextFilter;

beforeEach(
    wrapper = shallow(<ExpenseListFilters setStartDate={setStartDate} setEndDate={setEndDate}/>)
);