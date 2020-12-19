import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Navigation from "./Sidemenu";
import Card from "./Card";
import Footer from "./Footer";
import SecondaryNav from "./SecondaryNav";
import Newsletter from "./Newsletter";
import Clinker from "./Clinker";
import MarbleClinks from "./MarbleClinks";
import NewCollection from "./NewCollection";
import GrayClinks from "./GrayClinks";
import Lifestyle from "./Lifestyle";
import Concrete from "./Concrete";
import Showrooms from "./Showrooms";
import Contact from "./Contact";
import Coronavirus from "./Coronavirus";
import CardSlider from "./CardSlider";

class Home extends React.Component {
    render() {
        return (
            <div className="container-fluid w-100">
                {/* Header */}
                <Header />

                {/* Banner Image */}
                <div className="row">
                    <Banner />
                </div>

                {/* Secondary Navigation */}
                <div className="row">
                    <SecondaryNav />
                </div>

                <CardSlider/>

                {/* Clinker, New collection and Gray clinks */}
                <div className="row mt-2">
                    <div className="col-md-5 col-sm-12 px-0 py-0">
                        <a href="#"><Clinker /></a>
                    </div>
                    <div className="col-md-7 col-sm-12 px-0">
                        <a href="#"><MarbleClinks /></a>
                        <div className="container-fluid w-100 newcolleAndGrayClinks">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-12 px-0">
                                    <NewCollection />
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12 px-0">
                                    <a href="#"><GrayClinks /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="mt-5 cardSlider2">
                    <CardSlider/>
                </div>

                {/* Newsletter */}
                <div className="row mt-3 mb-5">
                    <Newsletter />
                </div>

                {/* Lifestyle and Concrete block */}
                <div className="row" id="lifestyleAndConcrete">
                    <div className="col-md-6 px-0 lifestyleAndConcrete">
                        <a href="#"><Lifestyle /></a>
                    </div>
                    <div className="col-md-6 px-0 lifestyleAndConcrete">
                        <a href="#"><Concrete /></a>
                    </div>
                </div>

                {/* Showrooms and contact */}
                <div className="row align-items-start showroomsAndContact">
                    <div className="col-md-6 px-0">
                       <a href="#"><Showrooms/></a>
                    </div>
                    <div className="col-md-6 px-0">
                        <a href="#"><Contact/></a>
                    </div>
                </div>

                {/* Coronavirus and Note */}
                <div className="row align-items-start">
                    <div className="col-md-6 px-0 coronavirus">
                       <Coronavirus/>
                    </div>
                    <div className="col-md-6 px-0">
                        <div className="importantUpdateNoteDiv">
                            <h6 className="mb-4">IMPORTANT UPDATE / 12 JUNE 2020</h6>
                            <h2 className="heading">Showrooms open by appointment!</h2>
                            <p>
                                Our showrooms are open and to ensure the health and safety
                                of both our staff and clients, we are operating stricktly 
                                by appointment only.
                            </p>
                            <input type="button" value="READ MORE" className="btn btn-light readMoreBtn" />
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="row">
                    <Footer />
                </div>
            </div>

        )
    }
}

export default Home;
