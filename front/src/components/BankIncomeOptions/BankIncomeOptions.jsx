import React from 'react'
import BankCard from '../BankCard';
import "./BankIncomeOptions.scss";

export default ({ setOperationType, cash, credit, debt, transaction }) => (
  <div className="bank-step step-one">
    <BankCard
      title="CASH"
      content={cash}
      action={() => setOperationType("cash")}
      active={transaction.type === "cash" ? "active" : ""}
    />
    <BankCard
      title="VISA"
      content={`Limmit: ${credit} Debt: ${debt}`}
      action={() => setOperationType("credit")}
      active={transaction.type === "credit" ? "active" : ""}
    />
  </div>
);