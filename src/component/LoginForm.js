import React from 'react';

export default class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            error:''
        };
    }

    onUsernameChange = (e) => {
        const username = e.target.value;
        this.setState(() => ({ username }));
    };
    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    };

    onSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.username || !this.state.password){
            this.setState(()=>({error : 'Provide descripton and amount'}));
        }else{
            this.setState(()=>({error : ''}));
            this.props.startLogin({});
        }
    };
    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        } else {
            return (
                <div>
                    <div >{this.state.error && <p>{this.state.error}</p>}</div>
                    <form onSubmit={this.onSubmit}>
                        <input
                            type="text"
                            placeholder="Username"
                            autoFocus
                            value={this.state.username}
                            onChange={this.onUsernameChange}
                        />
                        <input
                            value={this.state.password}
                            onChange={this.onPasswordChange}
                            type="password"
                            placeholder="Password"
                        />
                        <button>Login</button>
                    </form>

                </div>
            );
        }
    }
}