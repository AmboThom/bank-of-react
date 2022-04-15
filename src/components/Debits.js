import React from "react";
import "../App.css";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";
import List from "./List";

const Debits = (props) => {
  return (
    <div className="App">
      <h1>Debits</h1>
      <h3>Debit History</h3>
      <List dataType={props.debits} />
      <AccountBalance accountBalance={props.accountBalance} />
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};
export default Debits;