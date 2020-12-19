import React from "react";


class Icons extends React.Component{
    render(){
        return(
            <>
            <i className={`ml-1 ${this.props.iconClass}`} >{console.log(this.props.iconClass)}</i>
            </>
        )
    }
}

export default Icons;