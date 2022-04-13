import React, { Component, useState } from 'react';
import '../App.css';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
    const [user, setUser] = useState( {userName: '', password: ''});
    const [redirect, setRedirect] = useState(false);
    
    const handleChange = (e) => {
        const updatedUser = {...user};
        const inputField = e.target.name;
        const inputValue = e.target.value;
        updatedUser[inputField] = inputValue;

        setUser(updatedUser);
    }
        
    const handleSubmit = (e) => {
        e.preventDefault();
        props.mockLogIn(user);
        setRedirect({redirect: true});
    }

    if (redirect) {
        return (<Redirect to="/userProfile"/>)
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="userName">User Name </label> <br/>
                    <input 
                        type="text" 
                        name="userName" 
                        onChange={handleChange} 
                        value={user.userName}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password </label> <br/>
                    <input type="password" name="password" />
                </div>
                <br/>
                <button>Log In</button>
            </form>
        </div>
    )
};

export default Login;