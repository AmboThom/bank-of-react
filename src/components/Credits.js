import React from "react";
import "../App.css";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";
import List from "./List";

const Credits = (props) => {
  return (
    <div className="App">
      <h1>Credits</h1>
      <h3>Credit History</h3>
      <List dataType={props.credits} />
      <AccountBalance accountBalance={props.accountBalance} />
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Credits;
