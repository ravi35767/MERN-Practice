import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Services extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid text-center mb-5">
                    <h2>SERVICES</h2>
                    <h4>What we offer</h4>
                    <br />
                    <div className="row ">
                        <div className="col-sm-3 border border-muted mx-auto">
                            <span className="glyphicon glyphicon-off" />
                            <h4>POWER</h4>
                            <p>Lorem ipsum dolor sit amet..</p>
                        </div>
                        <div className="col-sm-3 border border-muted mx-auto">
                            <span className="glyphicon glyphicon-heart" />
                            <h4>LOVE</h4>
                            <p>Lorem ipsum dolor sit amet..</p>
                        </div>
                        <div className="col-sm-3 border border-muted mx-auto">
                            <span className="glyphicon glyphicon-lock" />
                            <h4>JOB DONE</h4>
                            <p>Lorem ipsum dolor sit amet..</p>
                        </div>
                    </div>
                    <br /><br />
                    <div className="row">
                        <div className="col-sm-3 border border-muted mx-auto">
                            <span className="glyphicon glyphicon-leaf" />
                            <h4>GREEN</h4>
                            <p>Lorem ipsum dolor sit amet..</p>
                        </div>
                        <div className="col-sm-3 border border-muted mx-auto">
                            <span className="glyphicon glyphicon-certificate" />
                            <h4>CERTIFIED</h4>
                            <p>Lorem ipsum dolor sit amet..</p>
                        </div>
                        <div className="col-sm-3 border border-muted mx-auto">
                            <span className="glyphicon glyphicon-wrench" />
                            <h4>HARD WORK</h4>
                            <p>Lorem ipsum dolor sit amet..</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Services;
