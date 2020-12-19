import React from "react";
import bannerCatalogImage from "../../assets/images/banner/Catalog.jpg";
import bannerCatalogImageForDiscount from "../../assets/images/banner/20.png";
import marbleCatalogImage from "../../assets/images/banner/marble.png";

class CatalogBanner extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 px-0 col-lg-12" id="bannerBox">
                        <img id="banner" src={bannerCatalogImage} className="w-100 h-75 img-fluid" />
                        <div className="top-left mt-5" id="imageSize">
                            <button type="submit" className="btn btn-secondary rounded btn-sm" id="btnColor">New</button>
                            <h1 className="percentage">%</h1>
                            <img id="banner" src={bannerCatalogImageForDiscount} className="w-100 h-75 img-fluid" />

                        </div>
                        <div className="centered">
                            <h1 className="Catalogheading">TILES,TILES</h1>
                            <h1 className="Catalogheading">& MORE</h1>
                        </div>
                        <div className="container w-50 border border-muted" id="marbletextsaveprice">
                            <div className="row justify-content-center">
                        <p>Special Offer free shipping* Along with free samples on order. Save15%</p>
                        </div>
                        </div>
                        <div className="container w-75 " id="marbletext">
                            <div className="row justify-content-center border border-muted p-4">
                            <img id="banner" src={marbleCatalogImage} className="w-25 h-75 img-fluid" id="marbleImage"/>
                                <p className="ml-3 my-auto ">MARBLE</p>
                                <p className="ml-3 my-auto vl pl-2">WOOD</p>
                                <p className="ml-3 my-auto vl pl-2">CONCRETE</p>
                                <p className="ml-3 my-auto vl pl-2">METALIC</p>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                <div className="container justify-content-center" id="dottedborder">
                        <div className="row mb-5 pt-4">
                            <div className="col-md-4">
                                <p><b>Stock sales</b></p>
                                <p>Upto 77% Discount</p>
                            </div>
                            <div className="col-md-4">
                                <p><b>Order an architectural</b></p>
                                <p>sample Order directly on the product page or contactus</p>  
                            </div>
                            <div className="col-md-4">
                                <p><b>Shop now - pay at the end of October</b></p>
                                <p>Secure payment via Klarna</p>
                            </div>

                        </div>
                     </div>
            </div>
            
        )
    }
}

export default CatalogBanner;