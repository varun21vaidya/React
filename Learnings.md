#Learnings:

## 1:

    <!-- these cdn links import all react methods and components and features -->
    <!-- first is core react where all main react funtionalities are included -->
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <!-- next is react dom which is used to build web version application (there are others as well like mobile. 3d-react etc.) -->
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>

    React.createElement does not create HTML element it creates object
    const root = ReactDOM.createRoot(document.getElementById("root"));

    // render is creating element by taking the object and converting it into heading tag and modify dom tree
    root.render(parent);

    // now here render will replace current dom tree inside root, so current structure in root will be replaced by parent
    // althogh it can only modify root and does not affect outside root.

## 2:

    npm: package manager

    npm init: start project

    package.json: configuration for npm

    bundler: bundles / packs your app to shift to production (eg. webpack, parcel)

    devDependancies: for development purpose (npm i -D package-name)

    normal dependancies: can be used for prod 

    ^: automatically upgrades minor versions 2.7.4 -> (recommanded)

    ~: automatically upgrades major versions 2.7.4 -> 2.8

    package-lock.json: 
    - locks record keeps track of exact version of package that is being installed to ensure consistancy across all environments for all dependancies and subdependancies.
    - It contains integrity hash to verify the current version machine should match to the deployed version of prod.

    node_modules: 
    - When all modules that are installed through npm, it fetched all codes and dependancies of each library into our system.
    - So this collection is all dependancies of libraries (Transitive Dependancies) 
    - Every Package in node_module has its own package.json

    npx parcel index.html : hosts on localhost:1234
    - npm : install the package
    - npx : execute the package
    - so basically parcel goes to source index, builds the development build, and hosts.

    Install React:
    - npm install react
    - npm install react-dom
    - add type="module" to script tag and import react and react-dom/client in app.js

    Parcel:
    - uses file-watching algorithm (in c++)
    - caches files and gives faster builds (in parcel- cache folder)
    - image optimization
    - for prod build minify files, bundle them, compress them.
    - uses consistant hasing
    - code splitting
    - uses differencial bundling (supports old browsers)
    - diagnostics and error suggestions
    - hosts on HTTPS (using --https)
    - can start in lazy mode (using --lazy)
    - Tree Shaking Algorithm to remove unused code
    - different bundles for dev and prod (npx parcel build index.html for prod)

    Dist:
    when you execute parcel, ut will bundle,minify and put in dist folder. When you change something, it will update dist and parcel-cache and show output from them.
    For production build if you have 10,20 html, css, js files, parcel will convert all of them into single html, css, js files and put it in dist.

    Support Old Browser Versions:
    - use browserlist dependancy in package.json (refer browserlist.dev)
    - This supports 80% users
    - "browserlist":["last 2 versions"]


##3:

    To redue complexity of reactelements to build HTML, JSX was created
    - JSX is not HTML in Javascript.
    - JSX is HTML-like syntax or XML-like.

    - so there is no difference between these as both return JS object 
    const heading = React.createElement("h1", {},"Hello World") and 
    const heading = (
      <h1 id="heading" className="head" tabIndex="2">
        Hello World
      </h1>
    );

    - JSX is not pure javascript so JS engine or browser wont understand it directly.
    - jsx => babel transpiles to react.createElement => js object => rendered to HTML element

    Babel: 
    - javascript compiler and transpiler
    - takes JSX => converts to code that JS engine Understands or React understands

    - Now JSX is not HTML either as it uses className and tabIndex like camelCase.

    - Write Multiline JSX with () simple bracket.

    React Component: 
    - class based component (old)
    - functional component (new)

    React Functional Component
    - just normal javascript function
    - Start with Capital Letter (must)
    - returns JSX code / React Element
    - can use arrow function or even function keyword like normal functions
    - *Cannot render it directly its component not element
    - Component Composition: using component inside another component
    - with <Componnet />
    - with <Component></Component>
    - with calling component function inside {}: {Description()}

    You can run any js code in {} inside JSX, any varibles, jsx elements, even logs.
    <h2>The value of number is {number}</h2>


