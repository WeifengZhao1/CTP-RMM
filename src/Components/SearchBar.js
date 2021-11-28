import React, { useState } from 'react'
import '../Styles/SearchBar.css';
// import SearchIcon from '@mui/icons-material/Search';
import SearchIcon from "@material-ui/icons/Search";
import { keys } from '@material-ui/core/styles/createBreakpoints';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Route, Router, Link } from 'react-router-dom';

function SearchBar({ placeholder, data }) {

    const [filteredData, setFilteredData] = useState([]);
    const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter = data.filter((value) => {
            return value.major.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilteredData([])
        }
        else {
            setFilteredData(newFilter);
        }
    }

    return (
        <div className="search">

            <div className="searchInputs">
                <input type="text" placeholder={placeholder} onChange={handleFilter} />
                <div className="searchIcon">
                    {/* <SearchIcon /> */}
                </div>
            </div>

            {filteredData != 0 && (
                <div className="dataResult">
                    {filteredData.slice(0, 7).map((value, key) => {
                        return <a className="dataItem" href={value.link} target="_blank" rel="noreferrer">
                            <p>{value.major} </p>
                        </a>
                    })}
                </div>
            )}

            <p><span class="word-span">Create</span> The First Comment Now !</p>
            <Button WriteReview="outline-success" className="review-btn">
                <Link to='WriteComment' className="link">Write A Review</Link>
            </Button>
        </div>
    )
}

export default SearchBar
