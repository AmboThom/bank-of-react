import React, { useState } from "react";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../App.css";
import List from "./List";

const Debits = (props) => {
  const [addDebit, setAddDebit] = useState(false);
  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    props.addItem(props.debits, data.description, data.amount);
    setAddDebit(false);
  };

  const Form = () => {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <br />
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Item Description"
              variant="outlined"
              required={true}
            />
          )}
        />
        <br />
        <br />
        <Controller
          name="amount"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              type="number"
              label="Item Amount"
              variant="outlined"
              required={true}
            />
          )}
        />
        <br />
        <br />
        <Button
          variant="outlined"
          type="submit"
          sx={{
            color: "black",
            "&:hover": { color: "black" },
            borderRadius: 2,
          }}
        >
          Submit
        </Button>
      </form>
    );
  };

  return (
    <div className="App">
      <h1>Debits</h1>
      <AccountBalance accountBalance={props.accountBalance} />
      <h3>Debit History</h3>
      <div className="list">
        <List dataType={props.debits} />
      </div>
      <button
        onClick={() => {
          setAddDebit(true);
        }}
      >
        Add Debit
      </button>
      {addDebit && Form()}
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};
export default Debits;
