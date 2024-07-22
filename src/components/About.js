import User from "./User";
import UserClass from './UserClass';

const About = () => {
    return (
        <div>
            <h3>About Us Page</h3>
            <User name={'sravani'} place={'srikakulam(fun)'} />
            <UserClass  name={'sravani sri'} place={'srikakulam(class)'} />
        </div>
    )
}

export default About;