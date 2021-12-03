import React, {useState, useEffect} from 'react';
import axios from 'axios';
import School from "../Components/School";
import { Condition } from '../Pages/Results';
import "../Styles/Results.css";
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

        <div class="container m-0">
          <div class="row">
            {}
            <div class="col-sm col col-lg-4 border-right ">
              <h3 class="font-weight-bold mb-3" className="result-text">
               
              </h3>
              <Condition />
            </div>

            <div class="col-sm ml-5">
              <h3 class="font-weight-bold mb-3 m-0" className="result-text">
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
