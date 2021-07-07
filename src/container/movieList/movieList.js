import React from "react";
import MovieTable from "../../components/movieTable/movieTable";
import NavBar from "../../components/navBar/navBar";
import SideBar from "../../components/sideBar/sideBar";
import Pagination from "../../components/pagination/pagination";
import "./movieList.css" ;
class MovieList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search:"",
            pageNumber:1
        };
    }

    changeSearch = (e) => {
        this.setState({
            search : e.target.value,
            pageNumber:1
        })
    }

    changePage = (pageNumber) =>{
        this.setState({
            pageNumber: pageNumber
        })
    }

    render() {
        let data =[{
            sno: 1,
            name: "Avengers",
            genre: "Sci-Fi",
            rating: "Very Good"
        },
         {
            sno: 2,
            name: "Fast ans Furious",
            genre: "Action",
            rating: "Very Good"
        },
         {
            sno: 3,
            name: "Harry Potter",
            genre: "Wizadry",
            rating: "Very Good"
        },
        {
            sno: 4,
            name: "Doraemon",
            genre: "Sci-fi",
            rating: "Very Good"
        },
         {
            sno: 5,
            name: "Pokemon",
            genre: "Action",
            rating: "Very Good"
        },
        {
            sno: 6,
            name: "Shakitmaan",
            genre: "Action comedy",
            rating: "Very Good"
        },
        {
            sno: 7,
            name: "Shakalaka boom boom",
            genre: "Fiction comedy",
            rating: "Very Good"
        },
         {
            sno: 8,
            name: "BeyBlade",
            genre: "Action",
            rating: "Very Good"
        }];
        
        let filterdData = data.filter( (movie) => {
            let movieName = movie.name.toLocaleLowerCase();
            let searcVal = this.state.search.toLocaleLowerCase();
            return movieName.includes(searcVal);
        });

        let finalData = [];
        for(let i=(this.state.pageNumber-1)*5;i< this.state.pageNumber*5 && i < filterdData.length;i++){
            finalData.push(filterdData[i]);
        }

        return(
            <div className="main-container">
                   <NavBar />
                   <SideBar />
                   <div className="movie-table-container">
                   <input type="text" value = {this.state.search} placeholder="search" onChange={this.changeSearch} ></input>
                    <MovieTable data={finalData}/>
                    <Pagination pages={filterdData.length} changePage={this.changePage}/>
                </div>
            </div>
        );
    }
} 

export default MovieList;