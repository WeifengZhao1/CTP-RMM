import React, { Component } from 'react'
import SearchBar from './SearchBar'
import MainImg from './MainImg'
import Data from "../Data.json";


export default class Home extends Component {
    render() {
        return (
            <div>
                <SearchBar placeholder="Enter a Major" data={Data} />

                {/* IMG is between 'Weite a Review' and 'Footer' */}
                <MainImg />
            </div>
        )
    }
}