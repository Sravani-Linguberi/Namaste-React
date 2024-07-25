
import React from "react";
import User from "./User";
class UserClass extends React.Component {
    
    constructor(props){
        super(props); // super will calls the parent class constructor
        this.state = {
            count : 0,
            text : "initial text"
        }

        console.log(this.props.name+" child Constructor")
    }

    componentDidMount() {
        console.log(this.props.name +" child CDM") 
    }

    componentDidUpdate() {
        console.log(this.props.name+"child CD update")
    }

    componentWillUnmount() {
        console.log(this.props.name, "componentWillUnmount")
    }


    render(){
        console.log(this.props.name+" child Render")
        const {name, place} = this.props;
        return(
            <div className="user-card">
                <h3>name : {name} </h3>
                <h4>place: {place} </h4>
                <p>contact: sravanisrii</p>
                <h3>{this.state.count}</h3>
                <button onClick={()=>{
                    this.setState({
                        count : this.state.count + 1,
                        text : "new text with current count value : "+ this.state.count
                    })
                }}>update Values</button>
                <h2>{this.state.text}</h2>
                {name === 'First' ? <>
                    <User num={'111'}/>
                </> : <><User num={'222'}/></>}
            </div>
        )
    }
}

export default UserClass;