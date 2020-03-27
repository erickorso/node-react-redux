import React, { useState, useEffect } from "react";
import "./Log.scss";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import {getHumanDate, formatMoney} from '../../libs/utils';
import BankCard from "../BankCard";

export default ({
  client: { name, lastName },
  loadLogService,
  allTransactions
}) => {
  const [loaded, setLoaded] = useState(false);

  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    if (!loaded) {
      loadLogService();
      setLoaded(true);
    }
  }, [allTransactions, loadLogService, loadLogService, setLoaded]);

  return (
    <main className="bank-transactions">
      <header className="bank-header">
        <BankCard
          title={`Client: ${name} ${lastName}`}
          content="List of transactions"
        />
      </header>
      <div className="bank-transactions-list">
        {allTransactions &&
          allTransactions.map((item, key) => (
            <ExpansionPanel
              expanded={expanded === `panel${key}`}
              onChange={handleChange(`panel${key}`)}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                className={`expansion-header ${item.type}`}
              >
                <h3>{item.import ? formatMoney(item.import) : "-------"}</h3>{" "}
                &nbsp;
                <h3>{getHumanDate(item.date)}</h3>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <List>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      {item.import ? <MonetizationOnIcon /> : <VpnKeyIcon />}
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        item.import ? `Import: ${formatMoney(item.import)}` : ""
                      }
                      secondary={
                        <>
                          <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                          >
                            Operation: {item.type} / {item.category}
                          </Typography>
                          {item.service && ` / ${item.service}`}
                          {item.countToTransfer &&
                            ` / Transfer to: ${item.countToTransfer}`}
                        </>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </List>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))}
      </div>
    </main>
  );
};
