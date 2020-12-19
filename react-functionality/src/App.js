import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Catlog from "./components/Catlogs";
import Footer from "./components/Footer";
import ShoesImage1 from "../src/images/shoes1.jpg";
import ShoesImage2 from "../src/images/shoes2.jpg";
import ShoesImage3 from "../src/images/shoes3.jpg";
import Test from "./components/Test";

class App extends React.Component{
  render(){
  let user = "Sheri";
    return(
      <div>
        <Header/>
        <div className="container mt-5 mb-5">
          <h1 className="mb-5 text-center">Product Catlogs</h1>
          <div className="row"> 
            <div className="col-md-4">
            <Catlog image={ShoesImage1} name="Nike" desc="This is description of shoes 1"/>
            </div>
            <div className="col-md-4">
            <Catlog image={ShoesImage2} name="Adidas" desc="This is description of shoes 2"/>
            </div>
            <div className="col-md-4">
            <Catlog image={ShoesImage3} name="Puma" desc="This is description of shoes 3"/>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default App;
