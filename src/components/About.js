import User from "./User";
import UserClass from './UserClass';
import React from "react";
import UserContext from '../utils/UserContext';

class About extends React.Component {
    constructor(){
        super();
        
        console.log("Parent Constructor")
    }

    componentDidMount() {
        console.log("parent CDM")
    }

    componentDidUpdate() {
        console.log("parent CDupdate")
    }

    render(){
        console.log("parent  Render")
        return (
            <div>
                <h3>About Us Page</h3>
                <User name={'sravani'} place={'srikakulam(fun)'} />

                {/* consuming context hook in class component */}
                <UserContext.Consumer>
                    {({ loggedInUser }) => (
                        <div className="font-bold">User Name : {loggedInUser}</div>
                    )}
                </UserContext.Consumer>

                <UserClass  name={'First'} place={'srikakulam(class)'} />
                
                {/* <UserClass  name={'Second'} place={'srikakulam(class)'} /> */}
            </div>
        )
    }
}

// const About = () => {
//     return (
//         <div>
//             <h3>About Us Page</h3>
//             <User name={'sravani'} place={'srikakulam(fun)'} />
//             <UserClass  name={'sravani sri'} place={'srikakulam(class)'} />
//         </div>
//     )
// }

export default About;