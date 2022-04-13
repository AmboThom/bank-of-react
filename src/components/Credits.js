import React from 'react';
import '../App.css';
import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom';

const Credits = (props) => {
    return (
        <div className="App">
            <h1>Credits</h1>
            <AccountBalance accountBalance={props.accountBalance} />
            <Link to="/"><button>Home</button></Link>
        </div>
    );
};

export default Credits;