import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

class UserProfile extends Component {
    render() {
        return (
            <div className='App'>
                <h1>User Profile</h1>

                <div>{`Username: ${this.props.userName}`}</div>
                <div>{`Member Since: ${this.props.memberSince}`}</div>

                <Link to="/"><button>Home</button></Link>
            </div>
        )
    }
}

export default UserProfile;