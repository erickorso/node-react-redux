import React from 'react'
import BankCard from '../BankCard';
import "./BankOperations.scss";



export default ({ setCategory, transaction }) => {
  const category = [
    {
      title: "EXTRACTIONS",
      label: "extraction",
      action: () => setCategory("extraction"),
      type: ["cash", "credit"]
    },
    {
      title: "SERVICE PAYMENTS",
      label: "service-payments",
      action: () => setCategory("service-payments"),
      type: ["cash", "credit"]
    },
    {
      title: "PAY CREDIT CARD",
      label: "pay-credit-card",
      action: () => setCategory("pay-credit-card"),
      type: ["cash"]
    },
    {
      title: "TRANFERS",
      label: "transfers",
      action: () => setCategory("transfers"),
      type: ["cash"]
    },
    {
      title: "CHANGE PASSWORDS",
      label: "change-paswords",
      action: () => setCategory("change-paswords"),
      type: ["cash", "credit"]
    }
  ];
  return (
    <div className="bank-step step-two">
      {category
        .filter(cat =>
          cat.type.find(typeAllowed => typeAllowed === transaction.type)
        )
        .map((cat, key) => (
          <BankCard
            key={`cat${key}`}
            title={cat.title}
            action={cat.action}
            active={transaction.category === cat.label ? "active" : ""}
          />
        ))}
    </div>
  );
};