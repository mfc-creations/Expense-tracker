import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

function TransactionList() {
  const { transactions, getTransactions } = useContext(GlobalContext);
  useEffect(() => {
    getTransactions();
  }, []);
  return (
    <>
      <h3>History</h3>
      <ul id="list" class="list">
        {transactions.map(tr => (
          <Transaction key={tr.id} tr={tr} />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
