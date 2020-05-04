import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

function Transaction({ tr }) {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = tr.amount < 0 ? "-" : "+";
  return (
    <li className={tr.amount < 0 ? "minus" : "plus"}>
      {tr.text}{" "}
      <span>
        {sign}${numberWithCommas(Math.abs(tr.amount))}
      </span>
      <button onClick={() => deleteTransaction(tr._id)} className="delete-btn">
        x
      </button>
    </li>
  );
}

export default Transaction;
