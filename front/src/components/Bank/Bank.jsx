import React, { useEffect, useState } from "react";
import "./Bank.scss";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import BankCard from "../BankCard";
import BankIncomeOptions from "../BankIncomeOptions";
import BankOperations from "../BankOperations";
import BankNotifications from "../BankNotifications";
import { formatMoney } from "../../libs/utils";

export default ({
  client: { name, lastName, cash, credit, debt, password },
  transaction,
  setTransaction,
  saveLogService,
  lastTransaction,
  setCash,
  setCredit,
  updatePasword,
  clearTransaction
}) => {
  const [error, setError] = useState(null);
  const [importError, setImportError] = useState(false);
  const initialTransaction = {
    type: null,
    category: null,
    import: null,
    service: null,
    countToTransfer: null,
    newPassword: null
  };
  const counts = [
    {
      value: "23456789999786",
      label: "Erick Vargas / SRio"
    },
    {
      value: "98367768985",
      label: "Rodrigo Vargas / ICBC"
    }
  ];

  const services = [
    {
      value: "aysa",
      label: "AYSA"
    },
    {
      value: "metro-gas",
      label: "METROGAS"
    },
    {
      value: "agip",
      label: "AGIP"
    },
    {
      value: "itercable",
      label: "INTERCABLE"
    }
  ];

  useEffect(() => {
    if (lastTransaction && lastTransaction.type) {
      updateCash(lastTransaction);
      updateCredit(lastTransaction);
      setTimeout(() => {
        clearTransaction();
      }, 3000);
    }
  }, [lastTransaction, clearTransaction]);

  useEffect(() => {
    if (error && !importError) {
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }, [error, setTimeout]);

  const updateCash = lastTransaction => {
    if (lastTransaction && lastTransaction.type === "cash") {
      switch (lastTransaction.category) {
        case "extraction":
        case "service-payments":
        case "transfers":
          setCash(parseFloat(cash) - parseFloat(lastTransaction.import));
          break;
        case "pay-credit-card":
          setCash(parseFloat(cash) - parseFloat(lastTransaction.import));
          setCredit(parseFloat(debt) - parseFloat(lastTransaction.import));
          break;
        case "change-paswords":
          updatePasword(lastTransaction);
          break;
        default:
          break;
      }
    }
  };

  const updateCredit = () => {
    if (lastTransaction && lastTransaction.type === "credit") {
      switch (lastTransaction.category) {
        case "extraction":
        case "service-payments":
          setCredit(parseFloat(debt) + parseFloat(lastTransaction.import));
          break;
        case "change-paswords":
          updatePasword(lastTransaction);
        default:
          break;
      }
    }
  };

  const validExtractionImport = value => {
    if (parseFloat(cash) - parseFloat(transaction.import) < 0) {
      setError("Insufficient money");
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const validExtractionImportFromCredit = value => {
    if (
      parseFloat(credit) - parseFloat(transaction.import) - parseFloat(debt) <
      0
    ) {
      setError("Insufficient credit");
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const validServicePayment = transaction => {
    if (!transaction.service) {
      setError("Choose one service to pay");
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const validTransfer = transaction => {
    if (!transaction.transfers) {
      setError("Choose one count to transfer");
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const validPassword = transaction => {
    if (!transaction.newPassword || transaction.newPassword === "") {
      setError("Choose one pass");
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const resetValidation = () => {
    setError(null);
    return true;
  };

  const validTransaction = transaction => {
    if (transaction.type === "cash") {
      switch (transaction.category) {
        case "extraction":
          return validExtractionImport(transaction.import);
        case "service-payments":
          return validServicePayment(transaction);
        case "transfers":
          return validTransfer(transaction);
        case "change-paswords":
          return validPassword(transaction);
        default:
          return resetValidation();
      }
    } else if (transaction.type === "credit") {
      switch (transaction.category) {
        case "extraction":
          return validExtractionImportFromCredit(transaction.import);
        case "service-payments":
          return validServicePayment(transaction);
        case "change-paswords":
          return validPassword(transaction);
        default:
          return resetValidation();
      }
    } else {
      return resetValidation();
    }
  };

  const setOperationType = type =>
    setTransaction({ ...initialTransaction, type });
  const setCategory = category => setTransaction({ ...transaction, category });
  const setImport = value => {
    if (!isNaN(value) && parseFloat(value) !== 0) {
      setError(false);
      setImportError(false);
      setTransaction({ ...transaction, import: value });
    } else {
      setImportError(true);
      setError(true);
    }
  };
  const setService = value =>
    setTransaction({ ...transaction, service: value });
  const setTransfer = value =>
    setTransaction({ ...transaction, countToTransfer: value });
  const setNewPassword = newPassword =>
    setTransaction({ ...transaction, newPassword });

  const sendtransaction = () => {
    if (transaction && validTransaction(transaction)) {
      saveLogService(transaction);
    }
  };

  return (
    <main className="main-bank">
      <header className="bank-header">
        <BankCard
          title={`Client: ${name} ${lastName}`}
          content={`Shhh!!! secret: ${password}`}
        />
      </header>
      <section className="bank-stepper">
        <BankIncomeOptions
          setOperationType={setOperationType}
          cash={formatMoney(cash)}
          credit={formatMoney(credit)}
          debt={formatMoney(debt)}
          transaction={transaction}
        />
        <BankOperations setCategory={setCategory} transaction={transaction} />
        <div className="bank-step step-tree">
          {transaction.type && transaction.category && (
            <div className="operation-form">
              {transaction.category !== "change-paswords" && (
                <TextField
                  id="import"
                  label="Import"
                  defaultValue={transaction.import || ""}
                  variant="filled"
                  onChange={e => setImport(e.target.value)}
                  helperText={importError ? `Incorrect entry.` : ""}
                  error={importError}
                />
              )}
              {transaction.category === "service-payments" && (
                <TextField
                  id="service"
                  select
                  label="Select"
                  value={transaction.service || ""}
                  onChange={e => setService(e.target.value)}
                  helperText="Please select your service"
                  variant="filled"
                >
                  {services.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              )}
              {transaction.category === "transfers" && (
                <TextField
                  id="transfer"
                  select
                  label="Select"
                  value={transaction.countToTransfer || ""}
                  onChange={e => setTransfer(e.target.value)}
                  helperText="Please select a count"
                  variant="filled"
                >
                  {counts.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              )}
              {transaction.category === "change-paswords" && (
                <TextField
                  id="newPassword"
                  label="New Password"
                  defaultValue={transaction.newPassword || ""}
                  variant="filled"
                  onChange={e => setNewPassword(e.target.value)}
                />
              )}
              <Button
                variant="contained"
                color="primary"
                onClick={() => sendtransaction()}
                disabled={
                  lastTransaction ||
                  error ||
                  (!transaction.newPassword && !transaction.import)
                }
              >
                SEND
              </Button>
              <BankNotifications
                lastTransaction={lastTransaction}
                error={error}
              />
            </div>
          )}
        </div>
      </section>
    </main>
  );
};
