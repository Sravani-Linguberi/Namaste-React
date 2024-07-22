
import React from "react";
class UserClass extends React.Component {
    
    constructor(props){
        super(props); // super will calls the parent class constructor
        console.log(this.props); // we can access the props here
    }

    render(){
        console.log(this.props, "Class");
        return(
            <div className="user-card">
                <h3>name : {this.props.name} </h3>
                <h4>place: {this.props.place} </h4>
                <p>contact: sravanisrii</p>
            </div>
        )
    }
}

export default UserClass;