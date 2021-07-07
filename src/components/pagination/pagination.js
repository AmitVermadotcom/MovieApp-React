import React from "react";
import "./pagination.css" ;
class Pagination extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        let pagesNumber = Math.ceil(this.props.pages/5);
        console.log(pagesNumber);
        let paginationButton = [];
        for(let i=0;i<pagesNumber;i++){
            paginationButton.push(<div className="pagination-button" onClick = { () => {
                this.props.changePage(i+1);
            }}>{i+1}</div>);
        }

        return(
            <div className="pagination">
                    {paginationButton}
            </div>
        );
    }
} 

export default Pagination;