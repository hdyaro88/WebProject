import React , {Suspense} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./Components/Context/ContextProvider";
import { Provider } from "react-redux";
ReactDOM.render(<Provider store={store}> <Suspense fallback={<div>Loading..</div>}><App /></Suspense></Provider>, document.getElementById("root"));
