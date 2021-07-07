import React from "react";
import './sideBarButton.css';
class SideBarButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className="categories">
               {this.props.text}
            </div>
        );
    }
} 

export default SideBarButton;