import React from "react";
import { Link } from "react-router-dom";
class About extends React.Component{
    render(){
        return(
            <div>
                <h1>AboutPage</h1>
                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default About;
