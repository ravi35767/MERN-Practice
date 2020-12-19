import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Home extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <h1>Home Page</h1>
                <Footer/>
            </div>
        )
    }
}

export default Home;
