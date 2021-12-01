import React, {useState, useEffect} from 'react';
import axios from 'axios';
import School from "../Components/School";
import { Condition } from '../Pages/Results';

const baseURL = "http://localhost:5000";


function AllReviews() {
    const [reviews, setreviews]=useState([]);
    
    const getReviews =()=>{
        axios.get(`${baseURL}/getreviews`)
       .then(response =>{
         console.log(response.data);
         setreviews(response.data.data);
       })
       .catch(err=>{
         console.log(err);
       })
   }
   
    useEffect(() => {
        getReviews();
    }, [])
   
   
    return (
      <div className="result-container">
        <div className="bg-white"> </div>

        <div class="container ml-5 my-5">
          <div class="row">
            {/* Left -- Conditions*/}
            <div class="col-sm col col-lg-4 border-right ">
              <h3 class="font-weight-bold mb-3" className="result-text">
                Sort
              </h3>
              <Condition />
            </div>

            <div class="col-sm ml-5">
              <h3 class="font-weight-bold mb-3" className="result-text">
                Search Result
              </h3>

              {/* printing out reviews     */}
              {reviews
                .map((review, index) => (
                  <School
                    key={index}
                    SchoolName={review.school}
                    Rate={""}
                    Review={review.feedback}
                    Count={""}
                    name={review.name}
                    major={review.major}
                  />
                ))
                .reverse()}
            </div>
          </div>
        </div>
      </div>
    );
}

export default AllReviews
