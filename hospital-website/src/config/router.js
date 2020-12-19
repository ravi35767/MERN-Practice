import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import Services from "../pages/Services";
import Team from "../pages/Team";



class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact  path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/gallery" component={Gallery} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/team" component={Team} />
            </Router>
        )
    }
}

export default AppRouter;
