import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
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

  button: {
    position: "absolute",
    bottom: "-32rem",
    left: "40%",
    width: "10%",
  },
}));

const SetupBot = () => {
  const location = useLocation();
  const classes = useStyles();
  let user = location.state.username.name;
  const [selected, setSelected] = useState("");
  function handleClick() {
    setSelected("");
  }
  return (
    <div className="App">
      <h1>{user} Vs. Bot</h1>
      <div className={classes.root}>
        <Paper className={classes.customBorderRadius}>
          <Typography variant="h5" component="h3" style={{ marginTop: "35px" }}>
            Choose your level of difficulty
          </Typography>
          <div className="container">
            <span className="x" id="a" onClick={handleClick}>
              1
            </span>
            <span className="x" id="b">
              2
            </span>
            <span className="x" id="c">
              3
            </span>
            <span className="x" id="d">
              4
            </span>
            <span className="x" id="e">
              5
            </span>
            <span className="x" id="f">
              6
            </span>
            <span className="x" id="g">
              7
            </span>
            <span className="x" id="h">
              8
            </span>
          </div>
          <Link to={`/`} state={{ username: { user } }}>
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
          </Link>
          <Link to={"/createGame"} state={{ username: { user } }}>
            <ArrowBackIcon
              style={{
                position: "absolute",
                top: 120,
                left: 300,
                color: "black",
                height: "40px",
                width: "40px",
              }}
            />
          </Link>
        </Paper>
      </div>
    </div>
  );
};

export default SetupBot;
