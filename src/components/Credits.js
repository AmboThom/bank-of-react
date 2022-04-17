import React, { useState } from "react";
import "../App.css";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";
import List from "./List";

const Credits = (props) => {
  const [addCredit, setAddCredit] = useState(false);

  return (
    <div className="App">
      <h1>Credits</h1>
      <AccountBalance accountBalance={props.accountBalance} />
      <h3>Credit History</h3>
      <div className="list">
        <List dataType={props.credits} />
      </div>
      <button onClick={() => {setAddCredit(true)}}>Add Credit</button>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Credits;
