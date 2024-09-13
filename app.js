import React from "react";
import ReactDOM from "react-dom/client";

// jsx => babel transpiles to react.createElement => js object => rendered to HTML element
const heading = (
  <h1 id="heading" className="head" tabIndex="2">
    Hello World from Heading
  </h1>
);

// you can use any js code or element using {} inside jsx
const Description = () => <h3>Here is Heading {heading}</h3>;

const number = 10000;

// react functional component:
const ReactComponent1 = () => (
  <div id="container">
    {/* with <Componnet /> */}
    <Description />
    {/* with <Component></Component> */}
    <Description></Description>
    {/* with calling component function */}
    {Description()}

    <h1 id="comp" className="comp" tabIndex="2">
      Hello World from reactComponent
    </h1>
    {/* you can even access varibles with {} as you can use any js code */}
    <h2>The value of number is {number}</h2>
  </div>
);


//or use { return jsx} or function instead of arrow function 
const ReactComponent2 = () => {
  return (
    <h1 id="heading" className="head" tabIndex="2">
      Hello World from reactComponent
    </h1>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ReactComponent1 />);
