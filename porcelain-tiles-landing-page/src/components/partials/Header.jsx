import React from "react";
import Icons from "./Icons";
import $ from 'jquery';
import sampleTitle from "../../assets/images/banner/sample-tile.jpg"
import truckIcon from "../../assets/images/logosAndIcons/truckIcon.png"

class Header extends React.Component {

    showFav = () => {
        $(".favourites").slideToggle(400);
    }
    closeFav = () => {
        $(".favourites").slideUp(400);
    }
    showSearch = () => {
        $(".searchBox").slideToggle(400);
    }
    closeSearch = () => {
        $(".searchBox").slideUp(400);
    }
    showlanguageAndCountry = () => {
        $(".languageAndCountry").slideToggle(400);
    }
   closelanguageAndCountry = () => {
        $(".languageAndCountry").slideUp(400);
    }
    render() {
        return (
            <div>
                <div className="fixed-top">
                    <div className="row bg-dark text-light p-2" id="header">
                        <div className="col-md-4  d-flex ">
                            <p className="my-auto mx-auto">5.0 <Icons iconClass="fa fa-star" /><Icons iconClass="fa fa-star" /><Icons iconClass="fa fa-star" /><Icons iconClass="fa fa-star" /><Icons iconClass="fa fa-star" />    powered by Google</p>
                        </div>
                        <div className="col-md-4 d-flex">
                            <p className="my-auto mx-auto">Fast Delivery <img src={truckIcon} height="23" width="65" /></p>
                        </div>
                        <div className="col-md-4 d-flex text-right">
                            <span className="mx-auto">
                                <a href="#" onClick={() => this.showlanguageAndCountry()} className="ml-3 my-auto"><Icons iconClass="fa fa-globe" /></a>
                                <a href="#" onClick={() => this.showSearch()} className="ml-3 my-auto"><Icons iconClass="fa fa-search" /></a>
                                <a href="#" onClick={() => this.showFav()} className="ml-3 my-auto"><Icons iconClass="fa fa-heart" /></a>
                                <a href="#" className="ml-3 my-auto"><Icons iconClass="fa fa-shopping-cart" /></a>
                                <a href="#" className="ml-3 my-auto"><Icons iconClass="fa fa-user-circle" /></a>
                            </span>
                        </div>
                    </div>
                </div>
                {/* Language and Country section */}
                <div className="languageAndCountry text-light pr-2">
                    <div className="container mt-5 p-3">
                        <h5 className="text-center">Language and Country</h5>
                        <form>
                            <div class="form-group">
                                <label className="text-left">Delivery to</label>
                                <select className="form-control">
                                    <option>USA</option>
                                    <option>Canada</option>
                                    <option>Germany</option>
                                    <option>China</option>
                                    <option>UAE</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label className="text-left">Language</label>
                                <select className="form-control">
                                    <option>English</option>
                                    <option>German</option>
                                    <option>French</option>
                                    <option>Chinese</option>
                                    <option>Arabic</option>
                                </select>
                            </div>
                        </form>
                        <button className="btn btn-primary btn-sm ">Confirm</button>
                        <button onClick={() => this.closelanguageAndCountry()} className="btn btn-secondary ml-2 btn-sm ">Close</button>
                    </div>
                    </div>
                    {/* Favourites section */}
                    <div className="favourites text-center text-light pr-2">
                        <div className="mt-5 p-3">
                            <h5><Icons iconClass="fa fa-heart" />&nbsp; FAVOURITES</h5>
                            {/* <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error obcaecati tempore quisquam quae, suscipit aliquam accusamus eveniet similique dolores sequi laboriosam facilis ipsa, </p> */}
                            <input type="button" value="Clear all" className="btn btn-dark btn-sm" />
                            <table className="mx-auto mt-2 mb-2 table table-borderless text-light">
                                <tbody>
                                    <tr>
                                        <td className="align-middle"><img src={sampleTitle} height="45" width="45" /></td>
                                        <td className="align-middle"><small >Magnificia - Black Demer - Polished</small></td>
                                        <td className="align-middle"><button className="btn btn-dark btn-sm"><Icons iconClass="fa fa-trash" /></button></td>
                                    </tr>
                                    <tr >
                                        <td className="align-middle"><img src={sampleTitle} height="45" width="45" /></td>
                                        <td className="align-middle"><small >Magnificia - Black Demer - Polished</small></td>
                                        <td className="align-middle"><button className="btn btn-dark btn-sm"><Icons iconClass="fa fa-trash" /></button></td>
                                    </tr>
                                </tbody>
                            </table>
                            <button onClick={() => this.closeFav()} className="ml-3 btn btn-secondary btn-sm"><Icons iconClass="fa fa-close" />&nbsp;Close</button>
                        </div>
                    </div>
                    {/* Search section */}
                    <div className="searchBox text-center text-light pr-2">
                        <div className="container text-center p-3 mt-5">
                            <h5><Icons iconClass="fa fa-search" />&nbsp;&nbsp; SEARCH</h5>
                            <form>
                                <div class="input-group">
                                    <input type="text" class="p-2 form-control bg-dark border border-0" placeholder="Enter Search" />
                                    <div class="input-group-append">
                                        <button class="btn btn-dark" type="button">
                                            <i class="fa fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <div className="form-group mt-3">
                                <button onClick={() => this.closeSearch()} className="btn btn-secondary btn-sm"><Icons iconClass="fa fa-close" />&nbsp; Close</button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Header;