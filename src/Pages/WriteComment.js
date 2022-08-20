import React, {useState} from "react";
import "../Styles/WriteComment.css";
import axios from 'axios';


const baseURL='http://localhost:5000/';

function WriteComment() {
  //setters and getters
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [major, setMajor] = useState("");
  const [feedback, setFeedback] = useState("");
  const [err, setErr] = useState("");
  const [success,setSuccess]=useState(false);
  const [data,dataCollected]=useState([]);

  // this function handleClick will keep the user on the comment page if below functions are not true
  const handleClick = (ev) => {
    ev.preventDefault();
    formValidation();
   
  }
 
  //check if the form is has all correct options filled out
  const formValidation = () => {
    if(name === "" || school === "" || major === "" || feedback === "" || name.length < 1){
      setErr("Field can not be empty!");
      setSuccess(false);
      return;
    }else {
      addReview();
      clearForm();
      setSuccess(true);
    }
  }

  //this function reset the form and clears the data type in on the browser
  const clearForm = () => {
    if(err.length === 0) {
      setName("");
      setMajor("");
      setSchool("");
      setFeedback("");
    }

    else {
      return;
    }
    
  }
  
//add a review using post axios
  const addReview = () =>{
    const URL = `${baseURL}addreview`;
    axios.post(URL,{
      name:name,
      school: school,
      major: major,
      feedback: feedback
    })
    .then(response=>{
      console.log(response.data);
    })
    .catch(err=>{
      console.log(err);
    })
  }

  return (
    <div className="form-container">
      <form method="POST" className="form-section">
        <h1> Write A Comment </h1>
          {err && err}
          {!success ? "" :"review successfully submitted"}
          <div className="form-inputs">

            {/* Name */}
            <div className="field">  
            <label className='form-label'>Name</label> 
              <input onInput = {(e) => setName(e.target.value)} value={name} type="text" className="input-ele" name="name"/>
            </div>
            
            {/* School */}
            <div className="field">
              <label className='form-label'>School</label> 
              {/* <input onInput = {(e) => setSchool(e.target.value)} type="text" className="input-ele" name="school" placeholder="school"/> */}
              <select className="school-select" value={school} onChange={(e) => setSchool(e.target.value)}>
                <option>--Select School--</option>
                <option value="college-of-staten-island">College of Staten Island</option>
                <option value="queens-college">Queens College</option>
              </select>
            </div>
            
            {/* Major */}
            <div className="field">
              <label className='form-label'>Major</label>
              <select className="major-select" value={major} onChange={(e) => setMajor(e.target.value)}>
                <option>--Select Major--</option>
                <option value="nursing">Nursing</option>
                <option value="comp-science">Computer Science</option>
                <option value="history">History</option>
                <option value="biology">Biology</option>
                <option value="english">English</option>
                <option value="accounting">Accounting</option>

              </select>
              {/* <input onInput = {(e) => setMajor(e.target.value)} type="text" className="input-ele" name="major" placeholder="major"/> */}
            </div>
            
            {/* Review */}
            <div className="field">
              <textarea onInput = {(e) => setFeedback(e.target.value)} rows="3" cols="5" value ={feedback} className="text-area-review" maxLength="250" placeholder="Write your feedback" />
            </div>


            {/* Submit */}
            <div>
              <button type="submit" onClick={handleClick} className="field-btn" >Submit</button>  
            </div>

          </div>
      </form> 
        
    </div>
  );
}

export default WriteComment;