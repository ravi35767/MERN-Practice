import React from 'react';
// import Header from "./components/partials/Header";
// import CatalogHeader from "./components/catalog/CatalogHeader";
import "./assets/css/visitor/style.css";
import Banner from "./components/partials/Banner";
import Card from "./components/partials/Card";
import Footer from "./components/partials/Footer";
import SecondaryNav from "./components/partials/SecondaryNav";
import PrimaryNav from "./components/partials/PrimaryNav";
import Newsletter from "./components/partials/Newsletter";
import Home from "./components/partials/Home";
import Sidemenu from "./components/partials/Sidemenu";
import CardSlider from "./components/partials/CardSlider";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Header/>
        <Banner/>
        <Navigation/> 
        <Card/>
        <Footer/> 
        <SecondaryNav/>
        <PrimaryNav/>
        <Newsletter/>*/}
        {/* <Catalog /> */}
        <Home/>
        {/* <CardSlider/> */}
        {/* <CardSliderTest/> */}
      </div>
    );
  }
}

export default App;
