import React, { useState } from "react";
import "../App.css";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";
import List from "./List";
import Form from "./Form";

const Debits = (props) => {
  const [addDebit, setAddDebit] = useState(false);

  return (
    <div className="App">
      <h1>Debits</h1>
      <AccountBalance accountBalance={props.accountBalance} />
      <h3>Debit History</h3>
      <div className="list">
        <List dataType={props.debits} />
      </div>
      <button onClick={() => {setAddDebit(true)}}>Add Debit</button>
      {addDebit && <Form addItem={props.addItem} />}
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};
export default Debits;