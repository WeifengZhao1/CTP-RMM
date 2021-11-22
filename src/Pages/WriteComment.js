import React, {useState} from "react";
import "../Styles/WriteComment.css";
import school from "../img/mainpageimg/School_Outline.png";




function WriteComment() {
  //setters and getters
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [major, setMajor] = useState("");
  const [review, setReview] = useState("");
  const [err, setErr] = useState("");

  // this function handleClick will keep the user on the comment page if below functions are not true
  const handleClick = (ev) => {
    ev.preventDefault();
    formValidation();
    

  }

  //check if the form is has all correct options filled out
  const formValidation = () => {
    if(name === "" || school === "" || major === "" || review === "" || name.length < 1){
      setErr("Field can not be empty!");
      return;
    }else {
      
      clearForm();

    }
  }

  //this function reset the form and clears the data type in on the browser
  const clearForm = () => {
    if(err.length === 0) {
      setName("");
      setMajor("");
      setSchool("");
      setReview("");
    }

    else {
      return;
    }
  
  }


  return (
    <div className="form-container">
      <div class="row">
        <div class="column">
          <form method="POST" className="form-section">
            <h1> Write A Comment </h1>
              {err && err}
              <div className="form-inputs">
                <div className="field">
                <label className='form-label'>Name</label> 
                  <input onInput = {(e) => setName(e.target.value)} type="text" className="input-ele" name="name" placeholder="Name"/>
                </div>
                
                <div className="field">
                  <label className='form-label'>School</label> 
                  {/* <input onInput = {(e) => setSchool(e.target.value)} type="text" className="input-ele" name="school" placeholder="school"/> */}
                  <select className="school-select" onChange={(e) => setMajor(e.target.value)}>
                    <option>--Select School--</option>
                    <option value="college-of-staten-island">College of Staten Island</option>
                    <option value="queens-college">Queens College</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="field">
                  <label className='form-label'>Major </label>
                  <select className="major-select" onChange={(e) => setMajor(e.target.value)}>
                    <option>--Select Major--</option>
                    <option value="nursing">Nursing</option>
                    <option value="comp-science">Computer Science</option>
                    <option value="">Other</option>
                  </select>
                  {/* <input onInput = {(e) => setMajor(e.target.value)} type="text" className="input-ele" name="major" placeholder="major"/> */}
                </div>
                
                <div className="field">
                  <textarea onInput = {(e) => setReview(e.target.value)} rows="3" cols="5" className="text-area-review" maxLength="250" placeholder="Write your feedback" />
                </div>

                <div>
                  <button type="submit" onClick={handleClick} className="field-btn" >Submit</button>  
                </div>
              </div>
          </form> 
        </div>


        {/* <div class="column">
          <img src={ school } alt="MainImage" />
        </div> */}

      </div>     
    </div>
  );
}

export default WriteComment;
