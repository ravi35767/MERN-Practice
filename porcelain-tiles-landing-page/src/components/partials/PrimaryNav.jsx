import React from "react";
import $ from 'jquery';

class PrimaryNav extends React.Component {
    closeCategoriesBox = () => {
        $(".bathroomCat").hide();
    }
    render() {
        return (
            <div className="container-fluid w-100">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12 text-center">
                        <div className="row d-flex justify-content-center primaryNav">
                            <div className="p-2 dropdown">
                                <a href="#" className="dropdown-toggle"><h6 className="">Bathroom</h6></a>
                                {/* Drop down menu when hover on categories */}
                                <div class="dropdown-menu bathroomCat">
                                    <div className="container">
                                        <span>Bathroom categories</span>
                                        <button onClick={this.closeCategoriesBox} class='btn btn-muted pull-right'>
                                            <b>x</b>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 dropdown ">
                                <a href="#" className="dropdown-toggle"><h6 className="">Kitchen</h6></a>
                                <div class="dropdown-menu kitchenCat">
                                    <div className="container">
                                        <span>Kitchen categories</span>
                                        <button class='btn btn-muted pull-right'>
                                            <b>x</b>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 dropdown">
                                <a href="#" className="dropdown-toggle"><h6 className="">Accessories</h6></a>
                                <div class="dropdown-menu accessoriesCat">
                                    <div className="container">
                                        <span>Accessories categories</span>
                                        <button class='btn btn-muted pull-right'>
                                            <b>x</b>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 dropdown">
                                <a href="#" class="dropdown-toggle "><h6 className="">Outlet/Offers</h6></a>
                                <div class="dropdown-menu outletCat">
                                    <div className="container">
                                        <span>Outlet/Offers categories</span>
                                        <button class='btn btn-muted pull-right'>
                                            <b>x</b>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2">
                                <a href="#"><h6 className="">Advanced Searches</h6></a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PrimaryNav;
