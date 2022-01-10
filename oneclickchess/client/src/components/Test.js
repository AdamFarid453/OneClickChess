import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as King } from "../images/King.svg";
import { ReactComponent as Queen } from "../images/Queen.svg";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
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

  button: {
    position: "absolute",
    bottom: -50,
    left: "40%",
    width: "10%",
  },
}));

const Test = () => {
  const classes = useStyles();
  const location = useLocation();
  const [style, setStyle] = useState("botText");
  const [style2, setStyle2] = useState("friendText");
  const [finalState, setFinalState] = useState("");

  //console.log(location);
  function handleKing() {
    console.log("clicked on king");
    setStyle("botText2");
    setFinalState("bot");
  }
  function handleQueen() {
    console.log("clicked on queen");
    setStyle2("friendText2");
    setFinalState("friend");
  }
  function printState() {
    console.log(finalState);
  }

  let name = location.state.username.value;
  return (
    <div className="App">
      <h1>Welcome to One Click Chess {name}</h1>

      <div className={classes.root}>
        <Paper className={classes.customBorderRadius}>
          <div>
            <King className="king" className={style} onClick={handleKing} />
            <Typography style={{ marginTop: "20px" }}>Play vs. Bot</Typography>
          </div>

          <div>
            <Queen className="queen" className={style2} onClick={handleQueen} />
            <Typography style={{ marginTop: "20px" }}>
              Play vs. Friend
            </Typography>
          </div>
          <Link to={"/createGame/bot"} state={{ matchType: { finalState } }}>
            <Button
              style={{
                backgroundColor: "#000000",
                color: "#ffffff",
                borderColor: "#ffffff",
                boxShadow: "0px 4px 10px lightgrey",
              }}
              className={classes.button}
              variant="outlined"
              onClick={printState}
              disabled={finalState === ""}
            >
              Next
            </Button>
          </Link>
          <Link to={"/"}>
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

export default Test;
