import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import Credits from "./components/Credits";
import Debits from "./components/Debits";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [accountBalance, setAccountBalance] = useState(14568.27);
  const [currentUser, setCurrentUser] = useState({
    userName: "Ambonique Thomas",
    memberSince: "05/21/1992",
  });
  const [credits, setCredits] = useState([]);
  const [debits, setDebits] = useState([]);
  const [useAPI, setUseAPI] = useState(true);

  const linkToCreditAPI = "https://moj-api.herokuapp.com/credits";
  const linkToDebitsAPI = "https://moj-api.herokuapp.com/debits";

  const mockLogIn = (logInInfo) => {
    const newUser = { ...currentUser };
    newUser.userName = logInInfo.userName;
    setCurrentUser(newUser);
  };

  //  Note: Equivalent to usage of lifecycle methods for class-implemented components made for functional components
  //  Dependency list includes credits and debits arrays, will rerender components on those states change
  useEffect(() => {
    //  This will wait until both async functions have been called before calling getSum
    if (useAPI) {
      Promise.all([fetchData()]).then(getSum());
    }
    }, [credits, debits]);

  //  Component to be called when component is mounted and updated (useEffect)
  const fetchData = async () => {
    try {
      let response = await axios.get(linkToCreditAPI);
      console.log(response);
      //  Conditions to prevent assigning data to wrong array & unnecessary calls to state setter functions
      if (response.data.length !== credits.length) {
        setCredits(response.data);
      } 
      let response2 = await axios.get(linkToDebitsAPI);
      console.log(response2);
        if (response2.data.length !== debits.length) {
          setDebits(response2.data);
        }
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
        console.log(error.response.status);
      }
    }
  };

  //  Function to be called by Credits and Debits component upon submitting form (onClick)
  //  Set to update credits and debits array state -- addCredits and addDebits as a single function
  const addItem = (dataType, itemDescription, itemAmount) => {
      setUseAPI(false);
      let response = {
        id: uuidv4(), //  Using uuid library to generate unique id
        description: itemDescription,
        amount: itemAmount,
        date: new Date().toString(), 
      };
      dataType.push(response);
      console.log(dataType);
      getSum();
  };

  // Called from useEffect, sets the accurate Account Balance of the user
  const getSum = () => {
    let creditsSum = 0;
    credits.forEach((element) => {creditsSum += element.amount});
    let debitsSum = 0;
    debits.forEach((element) => {debitsSum += element.amount});
    setAccountBalance((creditsSum - debitsSum).toFixed(2));
  };

  const HomeComponent = () => <Home accountBalance={accountBalance} />;
  const UserProfileComponent = () => (
    <UserProfile
      userName={currentUser.userName}
      memberSince={currentUser.memberSince}
    />
  );
  const LogInComponent = () => (
    <Login user={currentUser} mockLogIn={mockLogIn} />
  );
  const CreditComponent = () => (
    <Credits
      accountBalance={accountBalance}
      credits={credits}
      addItem={addItem}
    />
  );
  const DebitComponent = () => ( 
    <Debits 
      accountBalance={accountBalance}
      debits={debits}
      addItem={addItem}
    />
    );

  return (
    <Router>
      <div>
        <Route exact path="/" render={HomeComponent} />
        <Route exact path="/userProfile" render={UserProfileComponent} />
        <Route exact path="/login" render={LogInComponent} />
        <Route exact path="/credits" render={CreditComponent} />
        <Route exact path="/debits" render={DebitComponent} />
      </div>
    </Router>
  );
};
export default App;
