import React from 'react';

const LoginPage = ({ history }) => {
    const onSubmit = () => {
        history.push('/dashboard');
    };
    return (
        <div>
            <button onClick={onSubmit}>Login</button>
        </div>
    );
};

export default LoginPage;
