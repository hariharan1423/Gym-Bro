import React, { useContext, useRef ,useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../CONTEXT/Context";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [error,setError] = useState("");


  async function submit(e) {
    e.preventDefault();
    setError(false);

    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post("http://localhost:3001/api/auth/Login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
        email: emailRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (e) {
      dispatch({ type: "LOGIN_FAILURE" });
      setError(true);
    }
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center border-2 border-neutral-900 w-540 h-500 m-40">
        <p className="text-xl relative top-8">Login.</p>
        <form className="flex flex-col mb-20 mt-10 p-10 font-work">
          <input
            className="border-2 border-slate-900 rounded-xl p-2 m-4 shadow-xl"
            type="text"
            ref={userRef}
            placeholder="Username"
          ></input>
          <input
            className="border-2 border-slate-900 rounded-xl p-2 m-4 shadow-xl"
            type="email"
            ref={emailRef}
            placeholder="email"
          ></input>
          <input
            className="border-2 border-slate-900 rounded-xl p-2 m-4 shadow-2xl"
            type="password"
            ref={passwordRef}
            placeholder="Password"
          ></input>
          <button
            className="w-24 border-2 border-slate-900 rounded-xl p-2 m-4 shadow-xl disabled:cursor-not-allowed disabled:bg-black disabled:text-white"
            onClick={submit} disabled={isFetching}
          >
            Login
          </button>
          {error && <span className="text-center text-red-700">Something went wrong..please try again!</span>}
        </form>
        <br/>
        <span className="text-xl font-sans">
          In case of you don't have an account already, Try &nbsp;
          <Link to="/Signup" className="link">
            Signup
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
