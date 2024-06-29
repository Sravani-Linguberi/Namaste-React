import React from "react";
import ReactDOM from "react-dom/client";

const myRoot = ReactDOM.createRoot(document.getElementById("root"));

// creating react element in traditional way
const text = React.createElement(
  "h1",
  { id: "text" },
  "This is a react core way of creating react Element (heading)"
);

// creating react element using JSX.
const elementText = <h1>This is jsx heading</h1>;

//rendering element at root 
myRoot.render(elementText);
