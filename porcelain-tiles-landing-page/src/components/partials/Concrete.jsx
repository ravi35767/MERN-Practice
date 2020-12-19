import React from "react";
import concrete from "../../assets/images/banner/concrete.jpg";

class Concrete extends React.Component{
    render(){
        return(
                    <div className="w-100 h-100 imageWrapper">
                        <img src={concrete} className="img-fluid w-100 h-100 blockCategoryImage" alt="concrete"/>
                        <div class="centered text-light">
                            <h1 className="heading">CONCRETE</h1>
                        </div>
                    </div>
                    
        )
    }
}

export default Concrete;
