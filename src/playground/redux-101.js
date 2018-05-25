import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
        const incrementBy = typeof action.incrementBy==='number'?action.incrementBy:1;
            return {
                count: state.count + incrementBy
            };
            break;
        case 'DECREMENT':
        const decrementBy = typeof action.incrementBy==='number'?action.incrementBy:1;
            return {
                count: state.count-decrementBy
            };
        case 'RESET':
            return{
                count:0
            };
            break;
        default:
            return state;
    }
});

const unsubscribe =  store.subscribe(()=>{
    console.log(store.getState());
});

//increment count
store.dispatch({
    type: 'INCREMENT',
    incrementBy:5
});

store.dispatch({
    type: 'INCREMENT'
});
store.dispatch({
    type: 'RESET'
});
store.dispatch({
    type: 'DECREMENT',decrementBy:5
});

