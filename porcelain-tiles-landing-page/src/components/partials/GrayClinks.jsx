import React from "react";
import grayClinks from "../../assets/images/banner/grayClinks.jpg";

class GrayClinks extends React.Component{
    render(){
        return(
                   <div className="collection grayClinksMain h-100 w-100 text-center imageWrapper">
                       <img src={grayClinks} className="img-fluid w-100 h-100 blockCategoryImage" alt="Clinker"/>
                         <div class="centered text-light grayClinks">
                             <h2 className="heading">GRAY CLINKS</h2>
                             <h5>Ideas and Inspiration</h5>
                         </div>
                   </div>
        )
    }
}

export default GrayClinks;
