import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import App2 from "./App2";
import "./index.css";

const root = document.createElement("div");
root.setAttribute("id", "root");
document.body.appendChild(root);

ReactDOM.render(<App />, document.getElementById("root"));