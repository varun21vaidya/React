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

  ### NPM and Folder Files:

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


## 3:

  ### JSX:

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

      JSX even sanitizes data and avoids cross site scripting
    
## 4:

  ### Config Driven UI:
      we can control UI based on Data like location, user data. ie showing different list for different locations or no list for certain locations.


  ### Props:

      properties that you pass to the component.
      just normal arguments to a function.
      like when you call the component <componentName arg1="akdjfn" arg2="avsdfjh" />
      arg1 and arg2 are props.
      react will take these properties and will wrap in object called props
      you can extract in component defination and use them.
      const Component = (props)=>{
        return (
          <h1>{props.arg1}</h1>
        )
      }
      we can pass any number of props
      instead of (props)=> your can also destructure them ({arg1, arg2})=>

      When you have container for cards, you need to loop over the data with inputs and call the card component.
      Instead of array, react suggests to use map, filter, reduce, as it promotes functional programming.

      ALWAYS GIVE UNIQUE KEY to each CARD/component template.

      Why unique key? 
      - If you dont give unique keys to each component template, react will rerender all cards/tmeplates everytime new one addded/removed, cz as there are no unique ids it doesn not know which card has just entered/removed. So give unique ids, so react will render only that card.

      Some put index as key, but react does not recommand that.
      - Potential issues with rendering performance, consistancy, espescially with dynamic lists.
      - When items are added / removed generally react depends on unique keys to identify components, now using the index as key would modify this order.
      - if list of items get reordered react might reuse wrong component as index is same.
      - react uses unique keys to preserve states, if items get reordered, states can get mixed up with index as key.

  ### Folder Structure:

      - React does not recommand any specific folder structure.
      - popular approaches can be
        - according to features: common files in 1 folder and each file saperated by feature.
        - grouping by file type: api files in 1 folder, css in one folder, components in 1 folder.
      - avoid too much nesting
      - dont overthink, restructure later if required
      - keep file name same as ComponentName.
      - same people keep it jsx or tsx.
      - for simlicity, keep saperate files for header, body, apis, for readablity of other developers.
      - whenere you have any mock data or hardcoded data keep it in saperate files. For constants use constant.js or utils.js
      
  ### Import Export:

      2 Types:
      1. Single File import export- Default export (for components)
        - when we export components in file.
        - const ComponentName = () ={}
        - export default ComponentName;
        - import ComponentName from 'path'
      
      2. Multiple Exports in one file - Named Export (for saperate constants or elements )
        - generally used to export each constant in util.js or some elements
        - export const constantName = 'sjfks';
        - import {constantName} from 'path'
        - HERE {} IS IMPORTANT FOR NAMED EXPORTS

      - you can have both a default export and named exports in the same module in JavaScript/React.

## 5:

  ### HOOKS:

      Now suppose you want to filter data on click of button, so apply  filter function on our data and
      and call it with onclick event on that button. But this would not reflect on UI.
      This is where react comes if your data changes, DOM should change, cz react is better at DOM manipulation.

      State Variable: 
      A react hook is just a normal javascript function provided by react with some special features.

      IMP HOOKS:
      1. useState()
      2. useEffect()

      80% time you will use useState() and 20% useEffect()

      You need to import them like Named Import.
      
      import {useState} from 'react';

  ### useState() Hook: 

      - Maintains state of variable
      - scope is inside the component

      - const [varName, setVarName] = useState(defaultState ie [], true)
      - const [hotelList, setHotelList] = useState([]);
      - varName: variableName
      - setVarName: you cannot modify varName directly, you need setVarName(value) to modify it.
      - useState([]) use state with default state
      - useState() returns and array thats why we are destructuring it with [varName, setVarName].

  ##### IMP:

      - This powerful hook keeps UI insync with that variable.
      - As soon as hotelList changes with setHotelList(newList), it will automatically refresh our component, this is called render.
      - Whenever state variable changes, react rerenders the component.
      - react will make DOM operations superfast.


  ### React Reconciliation Algorithm / React Fiber:

  #### Virtual DOM:
      Suppose we have container DOM which has 5 cards. Now the UI will change from 5 cards to 3 cards.
      React will create a virtual DOM of it. Its not actual DOM but representation of actual DOM, basically a react element.

      remember when you printed any compoenent, it gave an object?
      This is basically an react element.

      This React Virtual DOM is react element / JS object.

  #### Diff Algorithm:

      - This algorithm is used by react to find out the difference between two virtual doms.
      - So it finds out changes between updated virtual dom vs previous virtual dom.
      - ** Now this difference also finds changes and updates actual DOM on each render cycle.

  #### React Fiber:

      - A new algorithm came in React 16, the new way to update the DOM - react Fiber.
      - So similar to git diff, as it compares two files, this algorithm compares two objects.
      - If anything has changed, then it will update DOM.

      - Now comparing HTML nodes / elements is tough, but comparing objects is easy as javascript is fast with objects
      - So it keeps track of all HTML code as virtual DOM like object representation.

      Now when we click filter button, a new object is formed.
      It compares current and previous objects then it actually updates DOM.
    
  #### Increamental Rendering:

      - Ability to split rendering work into chunks and spread out into multiple frames.
    
  #### WHY REACT is FAST?
      Its doing efficient DOM Manipulation cz it has virtual DOM. 
      Now this concept was not new, but react took this and built core algo on top of it, and made it snappy
      by comparing 2 virtual DOMs and updating the actual DOM.

      So as soon as you call setHotelList, it starts its reconcilliation algorithm, and starts rerendering your page.
      Thats why you need saperate call function to update state, so when you call it react will find the div and update UI.

    
## 6:
  
  #### Fetching data from API:

      2 ways to show:

      1. As soon as our Page loads --> make API call --> wait for page around 500ms --> render whole page
      
      2. As soon as our Page loads --> we will render UI with skalaton (Shimmer UI)--> make API call --> rerender app with new Data

      In react we will always be using 2nd approach, why? react has one of the fastest render cycle speed.

  ### useEffect() Hook:

      Takes 2 arguments, 
      - call back function
      - dependancy array

      the call back function will be called after your component is rendered ie after finishing render cycle
      If you want to do something after rendering the component, use it with useEffect.

      useEffect(()=> {console.log("useeffect call")}, [])

      - Empty Dependency Array ([]): The effect will run only once after the initial render.

      - No Dependency Array: The effect will run after every render (including on every state or prop change).

      - Dependencies in the Array: The effect will run only when the specified dependencies change.
          - eg 
          const [count, setCount] = useState(0);
          useEffect(() => {
              console.log(`Effect runs when count changes: count is ${count}`);
          }, [count]); // Effect runs only when 'count' changes

      - the rest of the code first runs then after rendering is completed, callback inside useeffect will run

  #### Conditional Rendering:
      - rendering based on certain condition
      - if (loading) {return <ShimmerUI />}

  #### Why State Variable is used in first place?

      When you change any normal varible, react wont know the variable value has been changed.
      because React doesn't track regular variables.  and it wont upate UI accrodingly.
      But with state variable, when you modify it with setVaribleName, react will rerender that component and refresh specific component that will renrender DOM.
      YES IT WILL RE-RENDER WHOLE COMPONENT THAT STATE VARIABLE IS IN, ie REACT TRIGGERS RECONSCILLIATION CYCLE.

  #### but isnt it expensive to reload everything in component?

      It may sound expensive to re-render the whole component, but React uses an efficient reconciliation algorithm that minimizes performance costs.

        - Virtual DOM: React creates a virtual representation of the DOM (Virtual DOM). When the state changes, React compares the new virtual DOM with the previous version using a process called diffing.

        - Efficient Updates: React doesn't replace the entire DOM. Instead, it updates only the parts of the actual DOM that have changed. This makes updates faster and more efficient because React avoids unnecessary modifications to the DOM.

      So, while React triggers a re-render for the entire component where the state variable is used, React only updates the actual DOM where necessary. The virtual DOM comparison process ensures that only the specific parts that have changed are modified in the real DOM.

  #### How const changes state varibles?

      Now, suppose, we have const [btnName, setBtnName] = useState("login")
      and onclick of button, we want to change btnName to logout. with setBtnName("logout")

      But how are we modifying const variable?

      actually react is inserting new value in useState and rerendering component, it means its all new varible is being created,
      but as whole compoenent is recreated const doesnt give error, so whole new variable is created with updated value.


  #### Function Reference Issue:

      suppose you are toggling this button with onclick on toggleBtn function
      <button className='login-btn' onClick={toggleBtn()} >{loginBtn}</button>

      But this will give error: Too many re-renders. React Limits number of renders to prevent infinite loop.
      Why?

      cz inside toggleBtn we are using setBtnName(value), and if we call toggleBtn() immediately during the render phase,
      it will cause state to update striggering rerender, which will again call toggleBtn() thus entering in infinite loop

      The solution is to pass function reference instead of calling the function.
      so onClick={toggleBtn}

## 7:

  ### Hooks Tips:
      - Try to call hooks on top of components inside them.
      - and it doesnt make any sense using hooks outside compoenent, cz they are part of compoenet.
      - Dont User State Variables inside if else conditions, or for loops, or even functions.

  ### Router Pages:
      - use react-router-dom
      - import { createBrowserRouter} from "react-router-dom"; 
      - correct way to handle routings
      - const appRouter = createBrowserRouter([
        {
        path:"/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path:"/",
                element: <Body />
            },
            {
                path:"/restaurant/:resId",
                element: <RestaurantPage />
            }
          ]
        }])
      - render app router instead of applayout
      - root.render(<RouterProvider router={appRouter} />);

      - Error element is used to handle errors and show customized page
      - It uses error Hook, useRouteError.

      - now if you want to keep header in all routes so you need to put others in childeren
      - and use Outlet from react-router-dom 
      - const AppLayout = ()=>{
            return (
                <div className="app">
                <Header />
                <Outlet />
                </div>
            )
        }
      - Here Outlet will replace other compoenents according to path.
    
  #### Link:
      When you are in React and you want to route to some other page route, Never use anker tag, <a>, cz it will relode entire page.

      Use Link Componenet from react-router-dom.
      its similar to anker tag, but it wont reload page. Cz react keeps track of those links and keeps pages on single page, without reloading. 
      Thats why its single page application, cz its not reloading to saperate page.

      - so instead of <a href="/about" >About Us</a>
      - use <Link to="/about" >About Us</Link>

  #### Routing in Web Apps:

  1. Server Sie Routing: 
      When you have /about, in <a> it reloads whole page, sends network call to /about html page, fethes that html, and renders it on UI.

  2. Client Side Routing:
      We are not making any network calls cz all components are already loaded, we are not fetching page.

  #### Dynamic Route:

  Suppose when we click on any card, we want ot get info about that specific hotel card.
  and get detailed hotel info and menu, offers from it.
  so for that we need to implement, dynamic route for generic card template based on hotelId.
  like /restaurant/:hotelId

  To extract this id in component another hook is used.
  - useParams Hook
  - import { useParams } from "react-router-dom";
  - const { resId } = useParams();



