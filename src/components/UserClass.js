
import React from "react";
import User from "./User";
class UserClass extends React.Component {
    
    constructor(props){
        super(props); // super will calls the parent class constructor
        this.state = {
            details : {}
        }

        console.log(" child Constructor")
    }

    async componentDidMount() {
        const res = await fetch("https://api.github.com/users/sravani-linguberi");
        const data = await res.json();
        this.setState({
            details: data
        });

        this.timer = setInterval(()=>{
            console.log("timer is counting")
        }, 1000)
    }

    componentDidUpdate() {
        console.log("child CD update")
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log( "componentWillUnmount")
    }


    render(){
        const {name, company, avatar_url} = this.state.details;
        return(
            <div className="user-card">
                <h3>name : {name} </h3>
                <h4>company: {company} </h4>
                <img src={avatar_url} /> 
                <p>contact: sravanisrii</p>
            </div>
        )
    }
}

export default UserClass;