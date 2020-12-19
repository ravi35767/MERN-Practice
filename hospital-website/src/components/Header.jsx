import React from "react";
import { Link, NavLink } from "react-router-dom";
import bannerImage from "../images/banner.jpg";

class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid bg-primary w-100">
                    <div className="row">
                        <div className="col-11 mx-auto">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <Link to="/"><a className="navbar-brand text-light" href="#">Hospital</a></Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse navigation" id="navbarNav">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <Link to="/"><a className="nav-link text-light" href="#">Home <span className="sr-only">(current)</span></a></Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/about"><a className="nav-link text-light" href="#">About</a></Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/contact"><a className="nav-link text-light" href="#">Contact</a></Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/gallery"><a className="nav-link text-light" href="#">Gallery</a></Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/services"><a className="nav-link text-light" href="#">Services</a></Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/team"><a className="nav-link text-light" href="#">Team</a></Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <img alt="Banner Image" className="img-fluid mb-0 w-100" src={bannerImage} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
