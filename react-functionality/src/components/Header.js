import React from 'react';
import mainImg from "../images/background.jpg";
import carImg from "../images/car.webp";
import Navigation from "./Navigation"
import BannerImage from "../images/banner.jpg"

class Header extends React.Component{
    render(){
        return(
            <div>
                <Navigation/>
                <img src={BannerImage} width="100%" height="450" alt="Banner Image" />
            </div>
        )
    }
}

export default Header;
