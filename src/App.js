import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import Credits from "./components/Credits";
import axios from "axios";

const App = () => {
  const [accountBalance, setAccountBalance] = useState(14568.27);
  const [currentUser, setCurrentUser] = useState({
    userName: "Ambonique Thomas",
    memberSince: "07/21/1992",
  });
  const [credits, setCredits] = useState([]);
  const [debits, setDebits] = useState([]);

  const mockLogIn = (logInInfo) => {
    const newUser = { ...currentUser };
    newUser.userName = logInInfo.userName;
    setCurrentUser(newUser);
  };

  useEffect(() => {
    let linkToCreditAPI = "https://moj-api.herokuapp.com/credits";
    let linkToDebitsAPI = "https://moj-api.herokuapp.com/debits";
    fetchData(linkToCreditAPI, "credits");
    fetchData(linkToDebitsAPI, "debits");
  }, [credits, debits]);

  const fetchData = async (link, dataType) => {
    try {
      let response = await axios.get(link);
      console.log(response);
      if (dataType === "credits") setCredits(response.data);
      else setDebits(response.data);
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
        console.log(error.response.status);
      }
    }
  };

  let makeList = (dataType) => {
    let list = dataType.map((element, index) => {
      return (
        <div key={index}>
          <h4>{`Description: ${element.description}`}</h4>
          <h5>{`Amount: ${element.amount}`}</h5>
          <h5>{`Date: ${element.date}`}</h5>
          <p>---------------------------------------</p>
        </div>
      );
    });
    return list;
  };

  //  Function to be called by Credits component upon submitting form (onClick)
  //  Set to update credits array state
  const addCredit = (description, amount) => {
    let creditsCopy = credits;
  };

  //  TODO: Make addDebit function, pass it as props to Debits component
  //  Should be similar in format to addCredit, check on with JSON returned from Debits API link

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
      makeList={makeList}
      addCredit={addCredit}
    />
  );

  return (
    <Router>
      <div>
        <Route exact path="/" render={HomeComponent} />
        <Route exact path="/userProfile" render={UserProfileComponent} />
        <Route exact path="/login" render={LogInComponent} />
        <Route exact path="/credits" render={CreditComponent} />
      </div>
    </Router>
  );
};
export default App;
