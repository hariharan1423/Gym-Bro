import { useState } from "react";



export default function MaintanceCalc({ level, weight,cal,setCalo}) {
    const [act,setActivity]=useState("")
    const [descrp,setDescrp]=useState("")


    const calculate = (e) =>{
        let result1=null;

        if(act===" "){
            alert("Select one option!")
        }
        else if(act==="No-Activity"){
          //EACH ACTIVITY HAS DIFFERENT VALUE TO BE MULTIPLIED WITH , TO CALCULATE MAINTENCE CALORIES. FOR NO-ACT -1.3 , FOR LIGHT - 1.5
            result1=((weight*22)*1.3);
        }else if(act==="3-6 Days(Lightly Active-Student)"){
            result1=((weight*22)*1.5)
        }
        else if(act==="3-6 Days(Active-Adult)"){
            result1=((weight*22)*1.7)
        }
        else if(act==="3-6 Days(Very Active)"){
            result1=((weight*22)*1.9)
            console.log()
        }
        setCalo(result1);
        e.preventDefault();
    }


    const calc = (e) =>{
      let suggest = " ";
      if (level==="Underweight") {
        suggest ="Be in slight calorie-surplus(around 300+ from your maintenance calories) by increasing your daily-intake of food,you will see results weekly but slowly.";
      } else if (level==="NORMAL") {
        suggest ="You can start your weight-gain by increasing your daily-intake of food weekly(around 300+ calories from maintenance calories) to look bulked.OR You can start your weight-loss by decreasing your daily-intake of food (around 300- calories from maintenance calories) to look shredded."
      } else if (level=== "OVERWEIGHT") {
        suggest ="Be in calorie-deficit(around 300- from your maintenance calories) by decreasing your daily-intake of food ,you will see results weekly but slowly...STAY MOTIVATED & CONSISTENT";
      } else if (level==="OBESE") {
        suggest ="Be in calorie-deficit(around 300- from your maintenance calories) by decreasing your daily-intake of food ,you will see results weekly but slowly...BE PAITENT & DISCIPLINE.";
      }
      setDescrp(suggest);
      e.preventDefault();
    }



  return (
    <div className="rounded-lg flex flex-col items-center mt-20 mr-24 ml-24 p-8 border-4 border-black">
      <p className="text-2xl mb-10">Maintanance Calories Calculator.</p>
      <form>
        <br />
        <br />
        <span className="metric">Select your activity levels :</span>
        <select className="w-24 bg-transparent" onChange={(e)=>{
            setActivity(e.target.value)
        }}>
          <option selected disabled hidden>
            Select
          </option>
          <option>No-Activity</option>
          <option>3-6 Days(Lightly Active-Student)</option>
          <option>3-6 Days(Active-Adult)</option>
          <option>3-6 Days(Very Active)</option>
        </select>
        <br />
        <br />
        <button id="btn" type="submit" onClick={calculate} >
          SUBMIT
        </button><br></br>
        <button id="btn" type="submit" onClick={calc} >
          GUIDE
        </button>
      </form>
      <div className="border-4 w-96 h-96 p-6">
          <div className=" w-88 h-24 ">
             <h1 className="text-center relative top-7">Diet Planning for <span className="underline">{level}</span></h1>
             <h1 className="text-center relative top-7">Your Maintenance Calories - <span className="underline">{cal}  Approx.</span></h1>
            </div>
          <div className=" w-88 h-60 m-2 ">
             <ul className="text-center relative top-7 list-disc"><li>{descrp}</li></ul>
         </div> 
      </div>
    </div>
  );
}
