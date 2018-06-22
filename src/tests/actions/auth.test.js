import {login,logout} from '../../actions/auth';

test('test login action',()=>{
    const uid = '123';
    const action =  login(uid);
    expect(action).toEqual({
        type:'LOGIN',
        uid
    });
});

test('test logout action',()=>{
    const action =  logout();
    expect(action).toEqual({
        type:'LOGOUT'
    });
});