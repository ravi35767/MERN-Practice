import React from "react";

class NewCollection extends React.Component{
    render(){
        return(
                   <div className="collection w-100 h-100 p-5 d-flex text-center imageWrapper">
                        <span className="my-auto newCollection"><h1 className="heading">New Collection </h1>
                        <h5 className="text-center">Ideas and Inspiration</h5></span>
                   </div>
        )
    }
}

export default NewCollection;
