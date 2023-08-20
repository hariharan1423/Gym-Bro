import "./Diet.css";
import Bmi from "../components/Bmi";
import DietHead from "../components/DietHead";
import Footer from "../components/Footer";
import MaintenanceCalc from "../components/MaintenanceCalc";
import { useState } from "react";

const Diet = () => {
  const [weight, setWeight] = useState(null);
  const [level, setLevel] = useState("");
  const [cal, setCalo] = useState(null);

  const Thumbsup = () => {
    alert("Thanks for giving thumbsup,Go Ahead!!!");
  };


  return (
    <div>
      <DietHead></DietHead>
      <div className="container1">
        <div className="flex flex-col items-center mt-40">
          <p className="box-shadow rounded-md p-4 bg-white">
            Step 1: Calculate Your Weight Levels.
          </p>
          <Bmi
            level={level}
            setLevel={setLevel}
            weight={weight}
            setWeight={setWeight}
          />
        </div>
        <div className="rightBottom2"></div>
        <div className="topLeft2"></div>
        <div className="flex flex-col items-center">
          <p className="mb-8 p-4 box-shadow rounded z-10 relative bottom-7 bg-white">
            Step 2: Find Your Maintanance Calories.
          </p>
          <MaintenanceCalc
            level={level}
            weight={weight}
            cal={cal}
            setCalo={setCalo}
          />
        </div>
      </div>
      <div className="leftBottom2"></div>
      <div className="topRight2"></div>
      <div className="flex flex-col items-center">
        <p className="box-shadow rounded-md p-4 text-center w-96 bg-white z-100 relative bottom-7">
          Step 3: Balanced diet planning!
        </p>
        <div className="flex flex-col m-9">
          <div className="border-8 border-black rounded-lg w-600">
            <ul className="p-8 list-disc m-4 rounded-lg font-work">
              <li className="p-1">
                A balanced diet should include foods from all &nbsp;
                <b>Five major food groups </b>- fruits, vegetables, grains,
                protein, and dairy , which provides essential nutrients that the
                body needs for optimal health.
              </li>
              <li className="p-1">
                Choose <b>Whole foods over processed foods.</b>
              </li>
              <li className="p-1">
                <b>
                  Pay attention to portion sizes: Even healthy foods can lead to
                  weight gain if consumed in excess.
                </b>
              </li>
              <li className="p-1">
                <b>
                  Even though you trying to gain weight, you only have to eat a
                  little bit higher than your maintanance calories
                </b>
              </li>
              <li className="p-1">
                <b>Limit unhealthy fats and sugars</b>
              </li>
              <li className="p-1">
                <b>Stay hydrated:</b> Water is essential for good health and
                helps the body to function properly.
              </li>
            </ul>
          </div>
        </div>
        <div className="p-6 bg-black w-96 rounded-lg box-shadow border-8 mt-10 z-20">
          <p className="bg-black text-white">
            I assume that you are following & understanding my steps.<br></br>
            If Yes,Give me a thumbs up!
            <button className="border-2 ml-2 rounded" onClick={Thumbsup}>
              👍🏿
            </button>
            <br></br>
          </p>
          <br></br>
          <p className="bg-black  text-white">
            Else,Shoot your doubts down here without any fear!!
          </p>
          <br></br>
          <form className="flex flex-col p-2 bg-black text-white ">
            <span>Email:</span>
            <input
              className="pl-2 ml-3 mt-4 mb-5 border rounded "
              type="email"
              placeholder="abc@gmail.com"
              required
            ></input>
            <br></br>
            <textarea
              type="text"
              className="Feedback text-white bg-transparent border-4 h-200"
            ></textarea>
            <button className="submitFeed border rounded p-2 mt-2 w-20">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="straightLine"></div>
      <div className="flex flex-col items-center mb-20">
        <h3 className="w-500 h-12 ml-10 text-center box-shadow font-rampart font-bold p-2 relative bottom-8 border-4 rounded-lg border-black">
          Free Diet Plans.
        </h3>
        <div className=" w-500 h-100  flex flex-col border-8 rounded-lg ml-9 border-black ">
          <form className="m-8">
            <span className="p-2">Name:</span>
            <input
              className="pl-2 border rounded "
              placeholder="Name"
              required
            ></input>
            <br></br>
            <span className="p-2">Email:</span>
            <input
              className="pl-2 ml-3 mt-4 mb-5 border rounded "
              type="email"
              placeholder="abc@gmail.com"
              required
            ></input>
            <br></br>
            <span className="p-2">Age:</span>
            <input
              className="pl-2 ml-3 mt-4 mb-5 border rounded "
              type="number"
              placeholder="Age"
              required
            ></input>
            <br></br>
            <label className="p-2">Weight-Levels : </label>
            <input
              className="mb-4 rounded border-2 border-black h-8"
              type="text"
              placeholder="     ...."
            ></input>
            <br></br>
            <label className="p-2">Maintanance - Calories : </label>
            <input
              className="mb-4 rounded border-2 border-black h-8"
              type="number"
              placeholder="     ...."
            ></input>
            <br></br>
            <button className="p-2 w-100 text-center underline">SUBMIT</button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Diet;
