import React from "react";
import Icons from "../partials/Icons";


class CatalogHeader extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid w-100 fixed-top">
                    <div className="row bg-dark text-light p-2" id="catalogheader">
                        <div className="col-3 d-flex">
                            <p className="my-auto">4.7 <Icons iconClass="fa fa-star" /><Icons iconClass="fa fa-star" /><Icons iconClass="fa fa-star" /><Icons iconClass="fa fa-star" /><Icons iconClass="fa fa-star" />    powered by Google</p>

                        </div>
                        <div className="col-3">
                        </div>
                        <div className="col-6 d-flex">
                            <p className="ml-3 my-auto">FIND US <Icons iconClass="fa fa-map-marker" /></p>
                            <p className="ml-3 my-auto">SEARCH <Icons iconClass="fa fa-search" /></p>
                            <p className="ml-3 my-auto">FAVOURITES <Icons iconClass="fa fa-heart" /></p>
                            <p className="ml-3 my-auto">CART <Icons iconClass="fa fa-shopping-cart" /></p>
                            <p className="ml-3 my-auto">MY ACCOUNT <Icons iconClass="fa fa-user-circle" /></p>


                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default CatalogHeader;