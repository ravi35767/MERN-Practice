import React from "react";
import lifestyle from "../../assets/images/banner/lifestyle.jpg";

class Lifestyle extends React.Component{
    render(){ 
        return(
                    <div className="w-100 lifestyle imageWrapper">
                        <img src={lifestyle} id="" className="blockCategoryImage img-fluid w-100 h-100" alt="lifestyle"/>
                        <div class="centered text-light">
                            <h1 className="heading">LIFESTYLE</h1>
                            <h5 className="text-center">Ideas and Inspiration</h5>
                        </div>
                    </div>
                    
        )
    }
}

export default Lifestyle;
