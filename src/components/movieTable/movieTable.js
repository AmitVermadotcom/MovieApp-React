import React from "react";
import './movieTable.css';
import MovieTableRow from "../movieTableRow/movieTableRow";
class MovieTable extends React.Component{
    constructor(props){
        super(props)
        this.state={};
    }

    render(){
        let header = {
            sno: "S. No",
            name: "Movie Name",
            genre: "Genre",
            rating: "Rating"
        }

        let data = this.props.data;
        let movie = [];
        for(let d of data){
            movie.push(<MovieTableRow key={d.sno} data={d}/>);
        }

        return(
            <div className="movietable">
                <MovieTableRow data={header} header={true}/>
                {movie}
            </div>
        );
    }
}

export default MovieTable;