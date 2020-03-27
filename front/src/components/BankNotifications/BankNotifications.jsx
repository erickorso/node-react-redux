import React from 'react'
import './BankNotifications.scss'
import Snackbar from "@material-ui/core/Snackbar";

export default ({ lastTransaction, error }) => (
  <div>
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      open={lastTransaction}
      message={`SUCCESS:${JSON.stringify(lastTransaction)}`}
    />

    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      open={error}
      message={`ERROR: ${error}`}
    />
  </div>
);