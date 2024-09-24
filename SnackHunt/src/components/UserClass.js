import React from "react";

class UserClass extends React.Component{

    constructor(props){
        
        // to recievev props in class based component
        super(props);

        // this basically alows accessing this.props in a contructor function 
        // infact super() calls the constructor of the parent class 
        
        // to maintain state, classes use 1 big object
        this.state = {
            count: 0,
            count2: 10,
            userInfo: {
                name: '',
                bio: '',
                avatar_url:''
            }


        }
        console.log(this.props.name , "child - component constructor");
    }

    // used for api calls, will load after rendering compoenent in mounting cycle
    async componentDidMount(){
        console.log(this.props.name , "child - component did mount");
        const data  = await fetch("https://api.github.com/users/varun21vaidya");
        const json = await data.json()
        console.log("got user data");
        this.setState({userInfo: json})
    }

    // will run after component rerenders and get updated set state
    componentDidUpdate(){

        console.log("child - component Did Update");
    }

    // will run just before compoenent will be removed / unmounting.
    componentWillUnmount(){
        console.log("child - component will unmount");
    }

    // here render() returns piece of JSX
    render(){
        // const {name, location} = this.props;
        const {name, bio,avatar_url} = this.state.userInfo;
        const {count, count2} = this.state;
        console.log(this.props.name , "user class render")
        return(
            <div>
                <h1>Welcome to React User Class</h1>
                <h3>I am {name} and {bio}</h3>
                <h3>The value of count is {count}</h3>
                <h3>The value of another count is {count2}</h3>

                {/* button to update count variable */}
                <button onClick={()=> {
                    this.setState({
                        count: this.state.count+1
                    })
                }}>Increase Count</button>

                <button onClick={()=>{
                    this.setState({
                        count: this.state.count-1
                    })
                }}>Decrease Count</button>

                <img src={avatar_url} alt="Profile Photo" width="200" height="200" /> 
            </div>
        )
    }
}

export default UserClass;