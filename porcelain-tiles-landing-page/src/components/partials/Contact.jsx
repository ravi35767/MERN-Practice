import React from "react";
import contact from "../../assets/images/banner/contact.jpg";

class Contact extends React.Component{
    render(){
        return(
                    <div className="w-100 h-50 imageWrapper">
                        <img src={contact} className="img-fluid w-100 h-100 blockCategoryImage" alt="contact"/>
                        <div class="centered text-light">
                            <span className="">
                                <h1 className="heading">CONTACT</h1>
                                <h5 className="text-center">Knowledge and expertise</h5>
                            </span>
                        </div>
                    </div>
                    
        )
    }
}

export default Contact;
