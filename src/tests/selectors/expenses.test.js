import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

const testExpenses=[{
    id:'1',
    description:'Gum',
    note:'',
    amount:195,
    createdAt:0
},{
    id:'2',
    description:'Rent',
    note:'',
    amount:109500,
    createdAt:moment(0).subtract(4,'days').valueOf()
},{
    id:'3',
    description:'Credit Card',
    note:'',
    amount:4500,
    createdAt:moment(0).add(4,'days').valueOf()
}];
test('should filter by text value',()=>{
    const filters={
        text:'e',
        sortBy:'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(testExpenses,filters);
    expect(result).toEqual([testExpenses[2],testExpenses[1]])
});

test('should filter by startDate',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectExpenses(testExpenses,filters);
    expect(result).toEqual([testExpenses[2],testExpenses[0]]);
});
// should filter by endDate
test('should filter by endDate',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:  moment(0).add(2,'days')
    };
    const result = selectExpenses(testExpenses,filters);
    expect(result).toEqual([testExpenses[0],testExpenses[1]]);
});
// should filter by date
test('should filter by date',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:  undefined,
    };
    const result = selectExpenses(testExpenses,filters);
    expect(result).toEqual([testExpenses[2],testExpenses[0],testExpenses[1]]);
});

// should filter by amount
test('should filter by amount',()=>{
    const filters={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:  undefined
    };
    const result = selectExpenses(testExpenses,filters);
    expect(result).toEqual([testExpenses[1],testExpenses[2],testExpenses[0]]);
});

