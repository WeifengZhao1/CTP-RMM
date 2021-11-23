import React, { Component } from 'react'
import SearchBar from './SearchBar'
import MainImg from './MainImg'

export default class Home extends Component {
    render() {
        return (
            <div>
                <SearchBar/>

                {/* IMG is between 'Weite a Review' and 'Footer' */}
                <MainImg />
            </div>
        )
    }
}