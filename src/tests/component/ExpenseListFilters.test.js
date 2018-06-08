import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../component/ExpenseListFilters';
import {filters ,altFilters} from '../fixtures/filters';
import { wrap } from 'module';
import moment from 'moment';

let wrapper,setStartDate,setEndDate,sortByDate,sortByAmount,setTextFilter;

beforeEach(()=>{
    setEndDate = jest.fn();
    setStartDate = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setTextFilter = jest.fn();    
    wrapper = shallow(<ExpenseListFilters 
        setStartDate={setStartDate} 
        setEndDate={setEndDate} 
        sortByAmount ={sortByAmount}
        sortByDate ={sortByDate}
        setTextFilter ={setTextFilter}
        filters
    />);
});

test('should render ExpenseListFilters',()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data',()=>{
    wrapper.setProps({
        filters:altFilters
    }); 
    expect(wrapper).toMatchSnapshot();
});

test('should hange text change',()=>{
    const value = 'testdata';
    wrapper.find('input').simulate('change',{
        target:{value}
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date',()=>{
    const value ='date';
    wrapper.setProps({
        filters:altFilters
    }); 
    wrapper.find('select').simulate('change',{
        target:{value}
    });
    expect(sortByDate).toHaveBeenCalled();

});

test('should sort by amount',()=>{
    const value ='amount';
    wrapper.setProps({
        filters:altFilters
    }); 
    wrapper.find('select').simulate('change',{
        target:{value}
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes',()=>{
    const startDate =  moment(0).add(4,'years');
    const endDate= moment(0).add(8,'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle focus change',()=>{
    wrapper.find('DateRangePicker').prop('onFocusChange')('startDate');
    expect(wrapper.state('focused')).toBe('startDate');
});