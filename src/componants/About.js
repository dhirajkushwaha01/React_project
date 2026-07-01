import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import { Component } from "react"; 

// const About = () => {
//     return (
//         <div>

//             <Profile name="Dhiraj" address="Rohtas" email="dhiraj@gmail.com" />
//             <ProfileClass name="Sumit" address="America" email="kala@gmail.com" />

//         </div>
//     )
// };
// export default About;

class About extends Component {

    constructor() {
        super()

    }


    render() {
        return (
            <div className=" font-bold ">
                <ProfileClass  
                    name="DHIRAJ"
                    address="ROHTAS"
                    email="dhiraj@gmail.com"
                />

            </div>
        )

    }

};

export default About;



