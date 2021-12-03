import React, { useState } from 'react'
import '../Styles/SearchBar.css';
// import SearchIcon from '@mui/icons-material/Search';
import SearchIcon from "@mui/icons-material/Search";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Route, Router, Link, useHistory } from 'react-router-dom';
import searchIcon from "../img/mainpageimg/icons8-search-50.png";
import commentImage from "../img/mainpageimg/commentImage.png";

function SearchBar({ placeholder, data }) {
    
    const [filteredData, setFilteredData] = useState([]);
    const [val, setVal] = useState("");
    
    const history = useHistory();
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

    // We could pass this as a url params to get this const {major} = useParams();
    // Pass it as a prop to the component. you can get the prop value and pass it to the function to retrieve the majors

    const handleRouting = (e) => {
        if(e.key === "Enter") {

            history.push(`/results/${val}`);
        }
    }
          
    return (
        <div className="search">

            <div className="searchInputs-box">      
                <input type="text" className="searchInputs-input" value = {val} onInput={(e) => setVal(e.target.value)}  placeholder={placeholder} onKeyDown = {handleRouting} onChange = {handleFilter}/>
                {/* <SearchIcon /> */}
                
                <img src={ searchIcon } alt="MainImage" className="searchIcon"/>      
            </div>

                    
            {filteredData != 0 && (
                <div className="dataResult">
                    {filteredData.slice(0, 7).map((value, key) => {
                        return <a className="dataItem" href={value.link} rel="noreferrer">
                            <p>{value.major} </p>
                        </a>
                    })}
                </div>
            )}

            
            <img src={ commentImage } alt="commentImage" className="img-fluid mt-5"/>

            <div className="review-section">
                <p>Create The First Comment Now!</p>
                <button type="button" class="btn btn-light">
                    <Link to='WriteComment' className="link">Write A Review</Link>
                </button>
            </div>
        </div>
    )
}

export default SearchBar
