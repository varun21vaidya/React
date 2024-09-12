// const heading  = React.createElement("h1", {id: "heading", alt:"header"}, "Hello World from React");
// const root =  ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am H1 Tag"),
    React.createElement("h2", {}, "I am H2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", {}, "I am H3 Tag"),
    React.createElement("h4", {}, "I am H4 Tag"),
  ]),
]);
console.log("parent", parent); // -->object
// ie React.createElement does not create HTML element it creates object
const root = ReactDOM.createRoot(document.getElementById("root"));

// render is creating element by taking the object and converting it into heading tag and modify dom tree
root.render(parent);

// now here render will replace current dom tree inside root, so current structure in root will be replaced by parent
// althogh it can only modify root and does not affect outside root.
