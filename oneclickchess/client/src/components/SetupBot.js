import React, { useState } from "react";
import { useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// import Button from "@mui/material/Button";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//     display: "flex",
//     justifyContent: "center",
//     //boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .2)",
//   },
//   customBorderRadius: {
//     borderRadius: 25,
//     margin: theme.spacing(1),
//     width: theme.spacing(112),
//     height: theme.spacing(72),
//   },

//   button: {
//     position: "absolute",
//     bottom: -50,
//     left: "40%",
//     width: "10%",
//   },
// }));

const SetupBot = () => {
  const location = useLocation();
  let bot = location.state.matchType.finalState;
  return (
    <div className="App">
      <h1>This is the {bot} page</h1>
    </div>
  );
};

export default SetupBot;
