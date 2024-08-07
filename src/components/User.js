// import React from "react";
import { useEffect } from "react";

// class User extends React.Component {
//     constructor(props){
//         super(props);
        
//         console.log(this.props.num +"GrandChild Constructor")
//     }

//     componentDidMount() {
//         console.log(this.props.num +"GrandChild CDM")
//     }

//     render() {
//         console.log(this.props.num +"GrandChild Render")
//         return (
//             <div className="user-card">
//                 <h1>GrandChild</h1>
//             </div>
//         )
//     }
// }


// funtional base comp
const User = ({name, place}) => {
    
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("timer in useEffect")
        },1000)

        return () =>{ // this return will call when we unmounting this component.
            clearInterval(timer)
        }
    },[])

    return (
        <div className="user-card">
            <h3>name : {name}</h3>
            <h4>place: {place} </h4>
            <p>contact: sravanisrii</p>
        </div>
    )
}

export default User;