import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

const UserProfile = (props) => {
    return (
        <div className='App'>
            <h1>User Profile</h1>
    
            <div>{`Username: ${props.userName}`}</div>
            <div>{`Member Since: ${props.memberSince}`}</div>
    
            <Link to="/"><button>Home</button></Link>
        </div>
    )
}


export default UserProfile;