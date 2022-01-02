import React, { Component } from 'react'
import SearchBar from './SearchBar'
import MainImg from './MainImg'
import Data from "../Data.json";


export default class Home extends Component {
    render() {
        return (
            <div className="home-main-container">
                <SearchBar placeholder="Enter a Major" data={Data} />

                {/* IMG is between 'Weite a Review' and 'Footer' */}
                {/* steps: - create a function - route to results.js, while also passing the selected a major as a prop */}
                <MainImg />
            </div>
        )
    }
}