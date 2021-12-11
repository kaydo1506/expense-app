// HIGHER ORDER COMPONENT (HOC) -> A component (HOC) that renders a component
// reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return (
        <div>
            <h1>Info</h1>
            <p>This info is: {props.info}</p>
        </div>
    );
};

// const withAdminWarning = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             {props.isAdmin && <p>This is provate info. Please dont share</p>}
//             <WrappedComponent {...props} />
//         </div>
//     );
// };
// const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>{props.isAuthenticated ? <WrappedComponent {...props} /> : <p>User isn't authenticated</p>}</div>
    );
};
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info='This is the detail' />, document.getElementById('app'));
// ReactDOM.render(<AdminInfo isAdmin={true} info='This is the detail' />, document.getElementById('app'));
