import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as King } from "../images/King.svg";
import { ReactComponent as Queen } from "../images/Queen.svg";
import Button from "@mui/material/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    //background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    display: "flex",
    justifyContent: "center",

    //boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .2)",
  },
  customBorderRadius: {
    borderRadius: 25,
    margin: theme.spacing(1),
    width: theme.spacing(112),
    height: theme.spacing(72),
  },
  centerPieces: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    position: "absolute",
    bottom: -500,
    left: "40%",
    width: "10%",
  },
}));

const Test = () => {
  const classes = useStyles();
  const location = useLocation();
  //console.log(location);
  let name = location.state.username.value;
  return (
    <div className="App">
      <h1>Welcome to One Click Chess {name}</h1>

      <div className={classes.root}>
        <Paper className={classes.customBorderRadius}>
          <div className={classes.centerPieces}>
            <King className="king" />
            <Typography>Play vs. Bot</Typography>

            <Queen className="queen" />
            <Typography>Play vs. Friend</Typography>
          </div>
          <Button
            style={{
              backgroundColor: "#000000",
              color: "#ffffff",
              borderColor: "#ffffff",
              boxShadow: "0px 4px 10px lightgrey",
            }}
            className={classes.button}
            variant="outlined"
          >
            Next
          </Button>
        </Paper>
      </div>

      <Link to={"/"}>
        <h3>Click here to go back</h3>
      </Link>
    </div>
  );
};

export default Test;
