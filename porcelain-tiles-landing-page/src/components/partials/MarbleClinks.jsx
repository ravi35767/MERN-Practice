import React from "react";
import marbleClinks from "../../assets/images/banner/marbleClinks.jpg";

class MarbleClinks extends React.Component {
    render() {
        return (
            <div className="collection w-100 h-50 text-center imageWrapper marbleClinksMain">
                <img src={marbleClinks} className="img-fluid w-100 h-100 blockCategoryImage" alt="Clinker" />
                <div class="marbleClinks text-light categoryName">
                    <h1 className="heading">MARBLE CLINKS</h1>
                    <h5 className="text-center">Ideas and Inspiration</h5>
                </div>
            </div>

        )
    }
}

export default MarbleClinks;
