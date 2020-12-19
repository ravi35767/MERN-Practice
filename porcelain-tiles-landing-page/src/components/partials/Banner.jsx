import React from "react";
import bannerImage1 from "../../assets/images/banner/banner1.jpg"
import bannerImage2 from "../../assets/images/banner/banner2.jpg"
import bannerImage3 from "../../assets/images/banner/banner3.jpg"
import bannerImage4 from "../../assets/images/banner/banner4.jpg"
import bannerImage5 from "../../assets/images/banner/banner5.jpg"

import PrimaryNav from "./PrimaryNav";
import Sidemenu from "./Sidemenu";
import Carousel from 'react-bootstrap/Carousel';

class Banner extends React.Component {
    render() {
        return (
            <div className="">
                {/* <div className=""> */}
                    <div className="col-md-12 px-0 col-lg-12 col-sm-12" id="bannerBox">
                        {/* Banner Slider Test*/}
                        <Carousel>

                            <Carousel.Item>
                                <div className="bannerContainer"><img id="bannerImage" src={bannerImage1} className="mx-auto w-100 img-fluid" /></div>
                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                            <div className="bannerContainer"><img id="bannerImage" src={bannerImage2} className="mx-auto w-100 img-fluid" /></div>
                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                            <div className="bannerContainer"><img id="bannerImage" src={bannerImage3} className="mx-auto w-100 img-fluid" /></div>
                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                            <div className="bannerContainer"><img id="bannerImage" src={bannerImage4} className="mx-auto w-100 img-fluid" /></div>
                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                            <div className="bannerContainer"><img id="bannerImage" src={bannerImage5} className="mx-auto w-100 img-fluid" /></div>
                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>

                        </Carousel>
                        {/* End of banner slider */}

                        {/* Sidebar integration */}
                        <div className="container">
                            <div className="row">
                                <div className="text-center" id="outer-container">
                                    <Sidemenu />
                                    <div id="page-wrap">
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Side bar end */}
                        
                        {/* Company name */}
                        <div className="companyName d-flex">
                            <h2 className="heading text-light my-auto">KAKEL STORE</h2>
                            {/* Primary Navigation */}
                            <div className="primaryNavInBanner">
                                <PrimaryNav />
                            </div>
                        </div>
                        
                        {/* Banner Caption */}
                        <div class="centered">
                            <h1 className="heading">WE PROVIDE</h1>
                            <h1><b>ULTIMATE FLOORING</b></h1>
                            <h1 className="heading">AND PAVING SERVICES</h1>
                        </div>
                    </div>
                {/* </div> */}
            </div >
        )
    }
}

export default Banner;