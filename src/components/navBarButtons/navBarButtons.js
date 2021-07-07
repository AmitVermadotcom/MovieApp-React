import React from "react";
import "./navBarButtons.css";
class NavBarButtons extends React.Component{
    constructor(props){
        super(props)
        this.state={};
    }

    render(){
        return(
            <div className="navBarButton">
                <div>{this.props.text}</div>
            </div>
        );
    }
}

export default NavBarButtons;