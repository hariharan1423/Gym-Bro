import React, { useState } from "react";


const Bmi = ({ level, setLevel, weight, setWeight }) => {
  const [height, setHeight] = useState(null);

  const [bmi, setBmi] = useState(null);
  const[text,setText] = useState("");

  //SETTING VALUE TO HEIGHT
  const onSetHeight = (e) => {
    const value = e.target.value;
    setHeight(value);
  };

  //SETTING THE VALUE TO WEIGHT
  const onSetWeight = (e) => {
    const value = e.target.value;
    setWeight(value);
  };



const calcBmi = (e) => {
    // WEIGHT IN KG/HEIGHT IN METRE**2;
    const result = Math.round((weight / Math.pow(height / 100, 2))*100)/100;
    console.log(result);

    //SETTING THE BMI VALUE;;;
    setBmi(result);


    //LOCAL VARIABLES FOR LEVEL AND SUGGESTION TEXT;;
    let bmiLevel,Suggest = "";

    
    if (isNaN(result)) {
      alert("Please fill the form properly!");
    } else if (result < 18.5) {
      bmiLevel = "Underweight";
      Suggest ="To get free weight-gain diet-plans,Please follow the steps accordingly & fill the form below!!"
    } else if (result > 18.5 && result < 24.9) {
      bmiLevel = "NORMAL";
      Suggest ="To get free diet-plans for maintaining the current-weight,Please follow the steps accordingly & fill the form below!!"
    } else if (result > 25.0 && result < 29.9) {
      bmiLevel = "OVERWEIGHT";
      Suggest ="To get free weight-loss diet-plans,Please follow the steps accordingly & fill the form below!!"
    } else if (result >= 30.0) {
      bmiLevel = "OBESE";
      Suggest ="To get free weight-loss diet-plans,Please follow the steps accordingly & fill the form below!!"
    }
    setText(Suggest);
    setLevel(bmiLevel);
    e.preventDefault();
  };
  
  return (
  <div className="rounded-lg flex flex-col items-center mt-24 mr-24 ml-24 p-8 border-4 border-black">
      <p className="text-2xl mb-10">BMI CALCULATOR.</p>
      <form>
        <span className="metric">ENTER YOUR HEIGHT:</span>
        <input
          className="border-2 border-black rounded p-1 focus:outline-none bg-transparent"
          value={height}
          onChange={onSetHeight}
          placeholder="Height in cm"
          required 
        />
        <br />
        <br />
        <span className="metric">ENTER YOUR WEIGHT:</span>
        <input
          className="bg-transparent border-2 border-black rounded p-1 focus:outline-none"
          value={weight}
          onChange={onSetWeight}
          placeholder="Weight in kg"
          required
        />
        <br />
        <br />
        <button id="btn" onClick={calcBmi} type="submit">
          SUBMIT
        </button>
      </form>
      <div className="flex flex-col items-center">
        <div id="result">Your Current Bmi - {bmi}Kg/m2</div>
        <div className="weightLevel">Weight Level - {level}</div>
        <div className="weightLevel">Suggestions -{text}</div>
      </div>
    </div>
  );
};
export default Bmi;
