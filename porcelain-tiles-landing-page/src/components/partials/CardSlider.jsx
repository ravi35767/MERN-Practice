import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Card from "./Card";

class CardSlider extends React.Component {
    render() {
        return (

            <Carousel>

                <Carousel.Item>
                    <div className="container">
                        <div className="row mx-auto">
                            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                <Card />
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                <Card />
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                <Card />
                            </div>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="container">
                        <div className="row mx-auto">
                            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                <Card />
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                <Card />
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                <Card />
                            </div>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="container">
                        <div className="row mx-auto">
                            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                <Card />
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                <Card />
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                <Card />
                            </div>
                        </div>
                    </div>
                </Carousel.Item>

            </Carousel>

        )
    }
}

export default CardSlider;
