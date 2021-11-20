import React from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import MainImage from "../img/mainpageimg/MainPage.png" ;


/* This is a img for Main page */

function MainImg(){
    return(
        <img src={ MainImage } alt="MainImage" className="img-fluid"/>

    );
}

export default MainImg;