import React from "react";
import SideBarButton from "../sideBarButton/sideBarButton";
import "./sideBar.css" ;
class SideBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className="sideBar">
                    <SideBarButton text="All genres"/>
                    <SideBarButton text="Action Movies"/>
            </div>
        );
    }
} 

export default SideBar;