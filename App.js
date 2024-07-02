import React from "react";
import ReactDOM from "react-dom/client";

const myRoot = ReactDOM.createRoot(document.getElementById("root"));

// creating react element in traditional way
const text = React.createElement(
  "h1",
  { id: "text" },
  "This is a react core way of creating react Element (heading)"
);

const headerElement = React.createElement("div",{},
  [React.createElement("h1",{className:"title"},"H1 heading in c1"),
  React.createElement("h2",{className:"title"},"H2 heading in c2 "), 
  React.createElement("h3",{className:"ttile"},"H3 heading in c3")])


  const headerElementJsx = () =>{
    return <div>
      <h1>H1 in jsx</h1>
      <h2>H2 in jsx</h2>
      <h3>H3 in jsx</h3>
    </div>
  }
// creating react element using JSX with multiple lines
const elementText = (
  <div>
    <h1>This is jsx heading</h1>
    <h2>This is head 2</h2>
  </div>
);

// rendeting word and title funtional comp inside Heading component
// renders react element using {} // we can write any js code inside this curly brackets
const HeadingComponent = () => {
  return <div id="container">
    {headerElement}
    {headerElementJsx()}
    {text}
    <Title />
    <Word />
    <h1 className="head"> heading in funtional Component</h1>
  </div>
}

const Word = function (){
  return (
    <div>
      word in function
    </div>
  )
}
const Title = () => (
  <h2>title of the page</h2>
)

//rendering jsx at root
myRoot.render(<HeadingComponent/>);
