
import UserClass from "./UserClass";
import { useEffect } from "react";
import React from "react";
import UserContext from "../utils/UserContext";

// const About = ()=>{


//     useEffect(()=>{
//         const timer = setInterval(()=>{
//             console.log("parent interval calls in useEffect");
//         }, 1000);
//         console.log("parent use effect used")       

//         return ()=>{
//             clearInterval(timer);
//             console.log("parent use effect return")
//         }
//     }, [])

//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is About Page for Snack Hunt Website</h2>
//             <UserClass name={"child class"} location={"India"}/>
//         </div>
//     )
// }

class About extends React.Component{
    constructor (props){
        super(props)
        console.log("parent constructor");
    }

    componentDidMount(){
        this.timer = setInterval(()=> {console.log("parent Interval calls")}, 1000);
        console.log("parent compoenent did mount");
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("parent compoenent will unmount");
    }

    render(){
        console.log("parent render");
        return (
            <div>
                <h1>About</h1>
                <h2>This is About Page for Snack Hunt Website</h2>
                <UserContext.Consumer>
                    {({loggedInUser})=>
                        (<h1>The user is {loggedInUser}</h1>)
                        }
                </UserContext.Consumer>
                <UserClass name={"First "} location={"India"}/>
                {/* <UserClass name={"Second"} location={"US"}/>
                <UserClass name={"Third"} location={"Spain"}/> */}
            </div>
        )
    }
}

export default About;