// Higher order component  - A component(HOC) that renders another component
// goal: to reuse code
// render hijacking
//prop manupulation
//abstract state

import React from 'react';
import ReactDom from 'react-dom';
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
);

const withAdminWarning=(WrappedComponent)=>{
    return (props) =>(
        <div>
            {props.isAdmin && <p>this is private info please do not share </p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const withAuth=(WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/>: <p>please  Authenticate</p>}
            
        </div>
    );
};
const AdminInfo = withAdminWarning(Info);
const AuthInfo = withAuth(Info);

ReactDom.render(<AuthInfo isAuthenticated={true} info="there are the details"/>, document.getElementById('app'));