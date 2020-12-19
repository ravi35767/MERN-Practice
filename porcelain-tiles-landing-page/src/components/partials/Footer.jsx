import React from "react";
import Icons from "./Icons";
import VisaImage from "../../assets/images/footerImages/visa.png";
import Sweedbank from "../../assets/images/footerImages/sweedbank.png";
import SEB from "../../assets/images/footerImages/SEB.png";



class Footer extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid w-100 mainFooter">
                    <div className="row text-light p-3">
                        <div className="col-md-3">
                            <table class="table table-borderless text-light">
                                <tbody>
                                    <tr>
                                        <td>Home</td>
                                        <td>Tiling & Construction</td>
                                    </tr>
                                    <tr>
                                        <td>Clinker</td>
                                        <td>Tools and Machines</td>
                                    </tr>
                                    <tr>
                                        <td>Tiles</td>
                                        <td>Marble Sink</td>
                                    </tr>
                                    <tr>
                                        <td>Mosaic</td>
                                        <td>Collections</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-3 footerForm">
                            <form>
                                <div className="form-group">
                                    <small><label htmlFor="exampleInputEmail1">CATEGORY</label></small>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <small><label htmlFor="exampleInputPassword1">FIRST NAME</label></small>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <small><label htmlFor="exampleInputPassword1">LAST NAME</label></small>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <small><label htmlFor="exampleInputPassword1">EMAIL</label></small>
                                    <input type="email" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <small><label htmlFor="exampleInputPassword1">MESSAGE</label></small>
                                    <textarea className="form-control" rows="4"></textarea>
                                </div>

                                <div className="form-group text-center">
                                    <button type="submit" className="btn btn-secondary rounded btn-sm">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="text-center mt-4">
                                <h6 className="font-weight-bold mb-4">CONNECT WITH US</h6>
                                <div className="socialIcons">
                                <span><Icons iconClass="fa fa-twitter"/></span> &nbsp;
                                <span><Icons iconClass="fa fa-facebook"/></span>&nbsp;
                                <span><Icons iconClass="fa fa-instagram"/></span>&nbsp;
                                <span><Icons iconClass="fa fa-youtube-square"/></span>&nbsp;
                                </div>
                            </div>
                            <div className="mt-4 ml-5 contactIcons">
                                <h5 className=""> <span className="rectangle"><Icons iconClass="fa fa-phone"/></span> &nbsp; +xx xxx xxxxxx</h5>
                                <h5 className=""> <span className="rectangle"><Icons iconClass="fa fa-envelope"/></span> &nbsp; info@example.com</h5>
                                <h5 className=""> <span className="rectangle"><Icons iconClass="fa fa-whatsapp"/></span> &nbsp; +xx xxx xxxxxx</h5>    
                            </div>
                        </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-md-4"> 
                                            <img src={VisaImage} className="w-100 h-75 img-fluid"/>
                                     </div>
                                    <div className="col-md-4 d-flex">
                                        <img src={Sweedbank} className="my-auto w-100 h-25 img-fluid"/>
                                    </div>
                                    <div className="col-md-4 d-flex">
                                        <img src={SEB} className="my-auto w-100 h-25 img-fluid"/>
                                    </div>
                                </div>
                                <div className="row"></div>
                                <div className="row"></div>
                                <div className="row"></div>
                                <div className="row"></div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Footer;