import React from "react";

class SecondaryNav extends React.Component{
    render(){ 
        return(
            <div className="container-fluid w-100">
                    <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12 text-center">
                        <div className="row d-flex justify-content-center secondaryNav">
                            <div className="p-3">
                                <a href="#"><h3 className="">Collection</h3></a>
                            </div>
                            <div className="p-3">
                                <a href="#"><h3 className="">Lifestyle</h3></a>
                            </div>
                            <div className="p-3">
                                <a href="#"><h3 className="">About</h3></a>
                            </div>
                            <div className="p-3">
                                <a href="#"><h3 className="">Contact</h3></a>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default SecondaryNav;
