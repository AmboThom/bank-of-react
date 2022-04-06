import React, { Component } from 'react';
import '../App.css'
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <h1>Bank of React</h1>
                <h4><em>What's in your JavaScript?</em></h4>
                
                <Link to="/userProfile"><button>User Profile</button></Link>
                <Link to="/login"><button>Login</button></Link>
                <Link to="/credits"><button>Credits</button></Link>
                <br/><br/>
                <AccountBalance accountBalance={this.props.accountBalance}/>
            </div>
        );
    }
}

export default Home;