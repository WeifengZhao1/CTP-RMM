import React from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles/Results.css';


/* Container */

    /*     Result:
              - School Name
              - Rate
              - show comment
              - Numbers of people reviews
    */

function Container() {
  return (


    <div className="result-container">

      <div className="bg-white">  </div>

      <div class="container ml-5 my-5">

        {/* 
          Row:
            Left: conditions
            Right: School
        */}
        <div class="row">

        {/* Left -- Conditions*/}
        <div class="col-sm col col-lg-4 border-right ">
          <h3 class="font-weight-bold mb-3" className="result-text">Sort</h3>
          <Condition /> 
        </div>

        {/* Right  -- School result */}
        <div class="col-sm ml-5 ">
          <h3 class="font-weight-bold mb-3" className="result-text">Search Result</h3>

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







/* Left Side ---------         Condition     */

const Condition = () => {
  return (
  
      /*     Sort section:
            - Most Rated
            - Most Common
            - Most Recent 
      */
      
      <div>

        

        <div class="form-check" className="result-text-sm">
       {/*    INPUT MISSING 'checked' at the end*/}
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  />
          <label class="form-check-label" for="flexRadioDefault2" className="result-text-space">
            Most Rated
          </label>
        </div>

        <div class="form-check" className="result-text-sm">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
          <label class="form-check-label" for="flexRadioDefault2" className="result-text-space">
            Most Common
          </label>
        </div>

        <div class="form-check" className="result-text-sm">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
          <label class="form-check-label" for="flexRadioDefault2" className="result-text-space">
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
      <div class="card-body" >
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