import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import UserProfile from './components/UserProfile';

class App extends Component {
  constructor() {
    super();
    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'Ambonique Thomas',
        memberSince: '07/21/1992',
      }
    }
  }
  
  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName;
    this.setState({currentUser: newUser});
  }
  
  render () {
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} 
      memberSince={this.state.currentUser.memberSince} />
      );
    const LogInComonent = () => (<Login user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    
    return (
    <Router>
      <div>
        <Route exact path="/" render={HomeComponent}/>
        <Route exact path="/userProfile" render={UserProfileComponent}/>
        <Route extact path="/login" render={LogInComonent}/>
      </div>
    </Router>
    );
  }
}

export default App;
