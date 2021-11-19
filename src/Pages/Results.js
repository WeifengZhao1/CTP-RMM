import React from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'


/* Container */

    /*     Result:
              - School Name
              - Rate
              - show comment
              - Numbers of people reviews
    */

function Container() {
  return (


    <div>

      <Heading />

      <div class="container ml-5 my-5">

        {/* 
          Row:
            Left: conditions
            Right: School
        */}
        <div class="row">

        {/* Left -- Conditions*/}
        <div class="col-sm col col-lg-4 border-right ">
          <h3 class="font-weight-bold mb-3">Sort</h3>
          <Condition /> 
        </div>

        {/* Right  -- School result */}
        <div class="col-sm ml-5 ">
          <h3 class="font-weight-bold mb-3">Search Result</h3>
          <School 
            SchoolName={SchoolResult1.SchoolName} 
            Rate={SchoolResult1.Rate} 
            Review={SchoolResult1.Review} 
            Count={SchoolResult1.Count}
          />   

          <School 
            SchoolName={SchoolResult2.SchoolName} 
            Rate={SchoolResult2.Rate} 
            Review={SchoolResult2.Review} 
            Count={SchoolResult2.Count}
          />  

        </div>
      </div>
    </div>

  </div>
  );
}


/* This the the heading for every page */
const Heading = () => {
  return (
    <div class="header p-3 mb-2 bg-light text-dark">
        {/*  Container */}
          <div class="container">
            <div class="row">
        {/* First col */}
              <div class="col">
                <h1 class="display-7">Rate MY</h1>
                <h1 class="display-6">Major</h1>
              </div>
        {/*  Second col */}
              <div class="col col-lg-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                </svg>
              </div>
            </div>
          </div>
    </div>
  )
};




/* Left Side ---------         Condition     */

const Condition = () => {
  return (
  
      /*     Sort section:
            - Most Rated
            - Most Common
            - Most Recent 
      */
      
      <div>

        <div class="form-check">
       {/*    INPUT MISSING 'checked' at the end*/}
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  />
          <label class="form-check-label" for="flexRadioDefault2">
            Most Rated
          </label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
          <label class="form-check-label" for="flexRadioDefault2">
            Most Common
          </label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
          <label class="form-check-label" for="flexRadioDefault2">
            Most Recent
          </label>
        </div>

      </div>

  )
};




/* Right Side ---------         School Section     */

// Set up vars
const SchoolName = 'Hunter College' ;
const Rate = '4/5' ;
const Review = 'many resources, programs, and opportunities.' ;
const Count = '200 views this school' ;

const SchoolResult1 = {
  SchoolName: 'Hunter College',
  Rate: '4/5',
  Review: 'many resources, programs, and opportunities.',
  Count: '200 views this school'
}


const SchoolResult2 = {
  SchoolName: 'Brooklyn College',
  Rate: '4/5',
  Review: 'many resources, programs, and opportunities.',
  Count: '200 views this school'
}




const School = ({ SchoolName, Rate, Review, Count }) => {
  return (
    /* School Result */
    <div class="card mb-3">
      <div class="card-body">
          <div class="mx-3">
            <h5>{SchoolName}</h5>
            <div class="mt-1"><strong>{Rate}</strong></div>
          </div>
          <ul class="list-group list-group-flush mt-2">
            <li class="list-group-item">{Review}</li>
            <li class="list-group-item font-italic">{Count}</li>
          </ul>
      </div>
    </div>
  )
};






/* ReactDOM.render(<Header />, document.getElementById('root')); */
// ReactDOM.render(<Container />, document.getElementById('root'));
export default Container;
