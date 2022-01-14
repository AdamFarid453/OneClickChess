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
    bottom: "-16rem",
    left: "40%",
    width: "10%",
  },
}));

const SetupBot = () => {
  const location = useLocation();
  const classes = useStyles();
  let user = location.state.username.name;
  const [selected, setSelected] = useState("");
  const [selected1, setSelected1] = useState("x");
  const [selected2, setSelected2] = useState("x");
  const [selected3, setSelected3] = useState("x");
  const [selected4, setSelected4] = useState("x");
  const [selected5, setSelected5] = useState("x");
  const [selected6, setSelected6] = useState("x");
  const [selected7, setSelected7] = useState("x");
  const [selected8, setSelected8] = useState("x");
  function handleClick() {
    setSelected("");
  }
  function selectOne() {
    setSelected1("a");
  }
  function selectTwo() {
    setSelected2("b");
  }
  function selectThree() {
    setSelected3("c");
  }
  function selectFour() {
    setSelected4("d");
  }
  function selectFive() {
    setSelected5("e");
  }
  function selectSix() {
    setSelected6("f");
  }
  function selectSeven() {
    setSelected7("g");
  }
  function selectEight() {
    setSelected8("h");
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
            <span className={selected1} onClick={selectOne}>
              1
            </span>
            <span className={selected2} onClick={selectTwo}>
              2
            </span>
            <span className={selected3} onClick={selectThree}>
              3
            </span>
            <span className={selected4} onClick={selectFour}>
              4
            </span>
            <span className={selected5} onClick={selectFive}>
              5
            </span>
            <span className={selected6} onClick={selectSix}>
              6
            </span>
            <span className={selected7} onClick={selectSeven}>
              7
            </span>
            <span className={selected8} onClick={selectEight}>
              8
            </span>
          </div>
          <div className="textBox">
            <Typography
              variant="h3"
              component="h3"
              style={{ marginTop: "100px" }}
            >
              Play as...
            </Typography>
            <span className="x">Black</span>
            <span className="x">?</span>
            <span className="x">White</span>
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
