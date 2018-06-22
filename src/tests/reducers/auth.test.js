//reducer
import authReducer from '../../reducers/auth';

test('should return state after login action ',()=>{
    const action =  {
        type:'LOGIN',
        uid: '1111'
    };
    const state =  authReducer({},action);
    expect(state).toEqual({
            uid:expect.any(String)
        });
});

test('should return state after LOGOUT action ',()=>{
    const action =  {
        type:'LOGOUT'
    };
    const state =  authReducer({ uid:'anything' },action);
    expect(state).toEqual({});
});