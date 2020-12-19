import React from 'react';
import shoeImage1 from "../images/shoes1.jpg"


class Catlog extends React.Component{
  render(){
    return (
      <div className="card">
      <img height="200" className="card-img-top" src={this.props.image} alt="Card image" />
      <div className="card-body">
      <h4 className="card-title">{this.props.name}</h4>
        <p className="card-text">{this.props.desc}</p>
        <a href="#" className="btn btn-primary">View Product</a>
      </div>
      </div>
      
    );
  }
}
export default Catlog;
