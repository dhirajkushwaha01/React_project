import { useState } from "react"; 
import react from "react";

const Profile = (props) => {
    const { name, address, email } = props

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);



    return (
        <div style={{
            "border": "1px solid black"
        }}>
            <h1>Profile Functional Component</h1>
            <h3>Name:{name}</h3>
            <h3>Address:{address}</h3>
            <h3>Email:{email}</h3>
            <h1>count -{count}</h1>
            <button onClick={() => {
                setCount(count + 1); 
                 setCount2(count2 + 1);
            }}>Increment</button>
        </div>

    )

};
export default Profile;