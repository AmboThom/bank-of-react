import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import Credits from "./components/Credits";
import Debits from "./components/Debits";
import axios from "axios";

const App = () => {
  const [accountBalance, setAccountBalance] = useState(14568.27);
  const [currentUser, setCurrentUser] = useState({
    userName: "Ambonique Thomas",
    memberSince: "05/21/1992",
  });
  const [credits, setCredits] = useState([]);
  const [debits, setDebits] = useState([]);

  let linkToCreditAPI = "https://moj-api.herokuapp.com/credits";
  let linkToDebitsAPI = "https://moj-api.herokuapp.com/debits";

  const mockLogIn = (logInInfo) => {
    const newUser = { ...currentUser };
    newUser.userName = logInInfo.userName;
    setCurrentUser(newUser);
  };

  //  Note: Equivalent to usage of lifecycle methods for class-implemented components made for functional components
  //  Dependency list includes credits and debits arrays, will rerender components on those states change
  useEffect(() => {
    fetchData(linkToCreditAPI, "credits");
    fetchData(linkToDebitsAPI, "debits");
    getSum();
  }, [credits, debits]);

  //  Component to be called when component is mounted and updated (useEffect)
  const fetchData = async (link, dataType) => {
    try {
      let response = await axios.get(link);
      console.log(response);

      //  Conditions to prevent assigning data to wrong array & unnecessary calls to state setter functions
      if (dataType === "credits" && response.data.length !== credits.length) {
        setCredits(response.data);
      } 
      else {
        if (response.data.length !== debits.length) {
          setDebits(response.data);
        }
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
        console.log(error.response.status);
      }
    }
  };

  //  Function to be called by Credits component upon submitting form (onClick)
  //  Set to update credits array state
  const addItem = async (dataType, itemDescription, itemAmount) => {
    try {
      let link = dataType === "credits" ? linkToCreditAPI : linkToDebitsAPI;
      let response = await axios.post(link, {
        description: itemDescription,
        amount: itemAmount,
      });
      console.log(response);
      fetchData(link, dataType);
    }
    catch (error) {
      if (error.response) {
        console.log(error.response.message);
        console.log(error.response.status);
      }
    }
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
