import React from "react";

class Header extends React.Component{
    render(){
        return(
            <div>
                <b><u>{this.props.name}</u></b>
                {this.props.func("Hello world")}
                <h1>This is Header</h1>
            </div>
        )
    }
}

export default Header;
