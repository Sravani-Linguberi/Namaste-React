
import React from "react";
class UserClass extends React.Component {
    
    constructor(props){
        super(); // super will calls the parent class constructor
    }

    render(){
        const {name, place} = this.props;
        return(
            <div className="user-card">
                <h3>name : {name} </h3>
                <h4>place: {place} </h4>
                <p>contact: sravanisrii</p>
            </div>
        )
    }
}

export default UserClass;