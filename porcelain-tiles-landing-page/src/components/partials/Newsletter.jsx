import React from "react";

class Newsletter extends React.Component{
    render(){
        return(
            <div className="container-fluid w-100">
                <div className="row border border-muted newsletter p-5 text-light">
                    <div className="col-md-7 col-sm-12 col-xs-12 text-center">
                            <span><h1 className="ml-5">Sign up with Newsletter</h1></span> 
                    </div>
                    <div className="col-md-5 col-sm-12 col-xs-12 d-flex">
                    <input type="text" className="form-control w-75 my-auto mr-2 newsletterTextbox" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsletter;
