import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Typography from "@material-ui/core/Typography";
import "./BankCard.scss";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  subtitle: {
    fontSize: 30, 
    color: '#88f'
  },
  pos: {
    marginBottom: 12
  }
});

export default ({title, content, action, active}) => {
    const classes = useStyles();
    return (
      <Card
        className={`${classes.root} ${active} bank-card`}
        variant="outlined"
      >
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {title}
          </Typography>
          {content && 
            <Typography component="h2" className={classes.subtitle}>
              {content}
            </Typography>
          }
        </CardContent>
        {action && (
          <CardActions>
            <Button size="small" onClick={() => action()}>
              <ArrowForwardIcon />
            </Button>
          </CardActions>
        )}
      </Card>
    );
}