import React from "react";
import './movieTableRow.css';
class MovieTableRow extends React.Component{
    constructor(props){
        super(props)
        this.state={};
    }
    

    render(){
        let {sno, name, genre, rating} = this.props.data;
        return(
            <div className="movietable-row" style = {{fontWeight :this.props.header ? "bold" : {}}}>
                <div className="column">{sno+"."}</div>
                <div className="column">{name}</div>
                <div className="column">{genre}</div>
                <div className="column">{rating}</div>
            </div>
        );
    }
}

export default MovieTableRow;