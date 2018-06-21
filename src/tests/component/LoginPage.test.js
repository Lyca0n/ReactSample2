import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from '../../component/ExpenseDashboardPage';
import LoginForm from '../../component/LoginForm';

test('should render LoginPage correctly',()=>{
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});