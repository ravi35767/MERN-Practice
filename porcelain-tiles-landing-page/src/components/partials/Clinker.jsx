import React from "react";
import clinkerImage from "../../assets/images/banner/clinker.jpg";

class Clinker extends React.Component{
    render(){
        return(
                    <div className="w-100 imageWrapper blackLayer">
                        <img src={clinkerImage} className="blockCategoryImage img-fluid w-100 h-100" alt="Clinker"/>
                        <div class="centered text-light clinker">
                            <h1 className="heading">Clinker</h1>
                            <h5 className="text-center">Ideas and Inspiration</h5>
                        </div>
                    </div>
                    
        )
    }
}

export default Clinker;
