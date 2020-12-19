import React from "react";
import CardImage from "../../assets/images/banner/coronavirus.jpg";
import Icons from "./Icons";

class Card extends React.Component {
    render() {
        return (
                        <div className="card border border-0">
                            <img className="card-img-top rounded" src={CardImage} alt="Card image cap" />
                            <div className="card-body">
                                <p className="card-text">Sold on the card title and make up the bulk of the card's content.</p>
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-lg-5 d-flex">
                                        <input type="button" id="addToCartBtn" value="ADD TO CART" className="btn btn-outline-secondary my-auto rounded-pill btn-sm" />
                                    </div>
                                    <div className="col-12 col-sm-12 col-lg-7 d-flex">
                                        <input type="text" className="my-auto form-control w-25" value="1" />
                                        <div className="btn-group-vertical" role="group" aria-label="Button group with nested dropdown">
                                            <button type="button" className="btn btn-muted">
                                                <Icons iconClass="fa fa-angle-up" />
                                            </button>
                                            <button type="button" className="btn btn-muted">
                                                <Icons iconClass="fa fa-angle-down" />
                                            </button>
                                        </div>
                                        <h5 className="my-auto">
                                            <Icons iconClass="fa fa-heart" />
                                            &nbsp; 
                                            <Icons iconClass="fa fa-shopping-cart" />
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
        )
    }
}

export default Card;
