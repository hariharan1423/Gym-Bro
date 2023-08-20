import React, { useState } from "react";
import axios from "axios";
import { Link} from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username,setUserName] = useState("");
  const [error,setError]=useState("")
 

  //submit func.
  async function submit(e) {
    e.preventDefault();
    setError(false);
      try{
        const res = await axios.post("http://localhost:3001/api/auth/Signup", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/Login");
    }catch(e){
      setError(true);
    }
    }


  return (
    <div className="flex flex-col justify-center items-center">
    <div>
      <div className="flex flex-col items-center border-2 border-neutral-900 w-540 h-600 mt-16 mb-20">
        <p className="text-xl relative top-4">Sign-in.</p>
        <form className="w-400 flex flex-col p-4 font-work mt-20" action="POST">
           <input
            className="border-2 border-slate-900 rounded-xl p-2 m-4 shadow-xl"
            type="text"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder="Username"
          ></input>


          <input className="border-2 border-slate-900 rounded-xl p-2 m-4 shadow-xl"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="email"
          ></input>


          <input  className="border-2 border-slate-900 rounded-xl p-2 m-4 shadow-2xl"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          ></input>

          
        </form>
        {error && <span className="text-red-900">Something went wrong..please try again!</span>}
        <div className="flex flex-col">
        <button  className="w-24 border-2 border-slate-900 rounded-xl p-2 m-4 shadow-xl" onClick={submit}>SIGN-UP</button><p className="text-center"> OR</p>
       <Link to = "/Login"> <button  className="w-24 border-2 border-slate-900 rounded-xl p-2 m-4 shadow-xl">LOG-IN</button></Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Signup;
