import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values',()=>{
    const state = filtersReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    });
});

test('should set sortBy to amount',()=>{
    const state  = filtersReducer(undefined, {type:'SORT_BY_AMOUNT'});
    console.log(state);
    expect(state.sortBy).toBe('amount');
});

test('should set sort by date',()=>{
    const currState={
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'        
    };
    const action ={type:'SORT_BY_DATE'};
    const state = filtersReducer(currState,action);
    expect(state.sortBy).toBe('date');
});

test('should set startDate filter',()=>{
    const startDate = moment();
    const action= {
        type:'SET_START_DATE',
        startDate
    };
    const state = filtersReducer(undefined, action);
    expect(action.startDate).toEqual(startDate);
}); 

test('should set endDate filter',()=>{
    const endDate = moment();
    const action= {
        type:'SET_END_DATE',
        endDate
    };
    const state = filtersReducer(undefined, action);
    expect(action.endDate).toEqual(endDate);
}); 