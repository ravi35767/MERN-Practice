import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";


class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </Router>
        )
    }
}

export default AppRouter;
