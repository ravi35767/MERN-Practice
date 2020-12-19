import React from "react";
import coronavirus from "../../assets/images/banner/coronavirus.jpg";

class Coronavirus extends React.Component {
    render() {
        return (
            <div className="w-100 h-auto">
                <img src={coronavirus} className="img-fluid w-100 h-100" alt="coronavirus" />
            </div>
        )
    }
}

export default Coronavirus;
