import React from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item_description">
          <h2>{props.title}</h2>
          <div className="expense-item_price">{props.amount}rs.</div>
        </div>
      </Card>
    </li>
  );
};
export default ExpenseItem;
