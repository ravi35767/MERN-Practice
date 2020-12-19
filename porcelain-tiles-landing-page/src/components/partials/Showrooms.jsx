import React from "react";
import showrooms from "../../assets/images/banner/showrooms.jpg";

class Showrooms extends React.Component{
    render(){
        return(
                    <div className="w-100 h-50 imageWrapper">
                        <img src={showrooms} className="img-fluid w-100 h-100 blockCategoryImage" alt="showrooms"/>
                        <div class="centered text-light">
                            <h1 className="heading">SHOWROOMS</h1>
                            <h5 className="text-center">Space and time to create</h5>
                        </div>
                    </div>
                    
        )
    }
}

export default Showrooms;
