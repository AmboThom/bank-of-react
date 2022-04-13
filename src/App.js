import React, { useState } from 'react';
import { 
  BrowserRouter as Router, 
  Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import Credits from './components/Credits'

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       accountBalance: 14568.27,
//       currentUser: {
//         userName: 'Ambonique Thomas',
//         memberSince: '07/21/1992',
//       }
//     }
//   }
  
//   mockLogIn = (logInInfo) => {
//     const newUser = {...this.state.currentUser}
//     newUser.userName = logInInfo.userName;
//     this.setState({currentUser: newUser});
//   }
  
//   render () {
//     const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
//     const UserProfileComponent = () => (
//       <UserProfile userName={this.state.currentUser.userName} 
//       memberSince={this.state.currentUser.memberSince} />
//       );
//     const LogInComponent = () => (<Login user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
//     const CreditComponent = () => (<Credits accountBalance={this.state.accountBalance} />);

//     return (
//     <Router>
//       <div>
//         <Route exact path="/" render={HomeComponent}/>
//         <Route exact path="/userProfile" render={UserProfileComponent}/>
//         <Route exact path="/login" render={LogInComponent}/>
//         <Route exact path="/credits" render={CreditComponent}/>
//       </div>
//     </Router>
//     );
//   }
// }


const App = () => {
  const [accountBalance, setAccountBalance] = useState(14568.27);
  const [currentUser, setCurrentUser] = useState({
    userName: 'Ambonique Thomas', 
    memberSince: '07/21/1992'
  });

  const mockLogIn = (logInInfo) => {
      const newUser = {...currentUser};
      newUser.userName = logInInfo.userName;
      setCurrentUser(newUser);
  };
  
  const HomeComponent = () => (<Home accountBalance={accountBalance}/>);
  const UserProfileComponent = () => (
    <UserProfile 
      userName={currentUser.userName} 
      memberSince={currentUser.memberSince} 
    />
  );
  const LogInComponent = () => (<Login user={currentUser} mockLogIn={mockLogIn} />)
  const CreditComponent = () => (<Credits accountBalance={accountBalance} />);

  return (
    <Router>
      <div>
        <Route exact path="/" render={HomeComponent}/>
        <Route exact path="/userProfile" render={UserProfileComponent}/>
        <Route exact path="/login" render={LogInComponent}/>
        <Route exact path="/credits" render={CreditComponent}/>
      </div>
    </Router>
  );

};
export default App;
