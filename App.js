const element = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React"
);
console.log(element, "element");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);

//

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
        "div",
        { id: "child1" },
        [React.createElement("h1", {}, "Heading with H1 child1"),
        React.createElement("h2", {}, "Heading with H2")]
      ),
      React.createElement(
        "div",
        { id: "child2" },
        [React.createElement("h1", {}, "Heading with H1 child2"),
        React.createElement("h2", {}, "Heading with H2")]
      )
  ]
);
root.render(parent);
