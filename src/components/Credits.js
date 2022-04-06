import React, { Component } from 'react';
import '../App.css';
import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom';

class Credits extends Component {
    render() {
        return (
            <div className="App">
                <h1>Credits</h1>
                <AccountBalance accountBalance={this.props.accountBalance} />
                <Link to="/"><button>Home</button></Link>
            </div>
        );
    }
}

export default Credits;