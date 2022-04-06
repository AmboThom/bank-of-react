import React, { Component } from 'react';
import '../App.css'
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <h1>Bank of React</h1>
                <h4><em>What's in your JavaScript</em></h4>

                <Link to="/userProfile"><button>User Profile</button></Link>
                <br/>
                <Link to="/login"><button>Login</button></Link>

                <AccountBalance accountBalance={this.props.AccountBalance}/>
            </div>
        );
    }
}

export default Home;