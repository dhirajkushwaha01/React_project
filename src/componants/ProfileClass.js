import React from "react";
import Profile from "./Profile";
import react from "react";
import UserContext from "../utils/UserContext";

class ProfileClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userDetails: {
                name: "dummy name",
                avatar_url: "dummyurl"
            }
        }

    }


    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/dhirajkushwaha01");
        const resData = await data.json();
        // console.log(resData);
        this.setState({
            userDetails: resData
        });
    }


    componentDidUpdate() {
        // console.log('component did update');
    }
    componentWillUnmount() {
        // console.log('component will unmount');

    }


    render() {


        if (this.state.userDetails === null) {
            return <h1>Loading ...</h1>;
        }

        const { name, avatar_url } = this.state.userDetails;

        return (
            <div style={{
                "border": "1px solid black"
            }}>
                <h1>PROFILE DETAILS :-</h1>


                <UserContext.Consumer>
                    {(data) => (
                        <h1 className="font-bold text-lg">Name: {data.name}</h1>
                    )}
                </UserContext.Consumer>

                <h3>Address:{this.props.address}</h3>
                <h3>Email: {this.props.email}</h3>
                <img src={avatar_url} />


            </div>
        );
    }
}

export default ProfileClass;
