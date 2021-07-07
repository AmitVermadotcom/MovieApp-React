import React from "react";
import NavBarButtons from "../navBarButtons/navBarButtons";
import './navBar.css';
class NavBar extends React.Component{
    constructor(props){
        super(props)
        this.state={};
    }

    render(){
        return(
            <div className="navBar">
                <img src="https://tse4.mm.bing.net/th?id=OIP.U8_J0ak47rB8XA1uUhvyZAHaHa&pid=Api&P=0&w=300&h=300" alt="logo"/>
                <NavBarButtons className="navButton" text="Home"/>
                <NavBarButtons className="navButton" text="Movies"/>
                <NavBarButtons className="navButton" text="About Us"/>
            </div>
        );
    }
}

export default NavBar;