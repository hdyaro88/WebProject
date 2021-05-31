import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ContextProvider from "./Components/Context/ContextProvider";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(<BrowserRouter><ContextProvider><App /></ContextProvider></BrowserRouter>, document.getElementById("root"));
