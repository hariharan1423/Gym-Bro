import { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Context } from "../CONTEXT/Context";

const Nav = () => {
  const { user, dispatch } = useContext(Context);
  const [Show, setShow] = useState(false);
  const UserImage = "http://localhost:3001/images/";

  
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };


  //FOR HAMBURGER ICON.
  const handleClick = (e) => {
    setShow(!Show);
  };

  const clicks = (e) =>{
    handleClick();
    handleLogout();
  }
  return (
    <div className="flex justify-between items-center pt-6 pb-4 border-4 border-transparent border-b-black">
      <Link
        to="/"
        className="text-3xl font-bold font-moonDance ml-8 first-letter:text-6xl"
      >
        Gym Bro!
      </Link>
      <button className="flex flex-col navResButton" onClick={handleClick}>
        <span className="border-4 w-8 border-transparent border-b-black"></span>
        <span className="border-4 w-8 border-transparent border-b-black"></span>
        <span className="border-4 w-8 border-transparent border-b-black"></span>
      </button>
      <ul
        className={`text-2xl font-sans tracking-wider ${
          Show ? "navResStyle show" : "navResStyle"
        }`}
      >
        <li>
          <NavLink to="/Blog" onClick={handleClick}>
            BLOGS
          </NavLink>
        </li>
        <li>
          <NavLink to="/Workout" onClick={handleClick}>
            WORKOUT PLANS
          </NavLink>
        </li>
        <li>
          <NavLink to="/Diet" onClick={handleClick}>
            DIET
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" onClick={handleClick}>
            ABOUT
          </NavLink>
        </li>
        <li>
          {user ? (
            <NavLink to="/Profile" onClick={handleClick}>
              <img
                src={UserImage + user.profilePic}
                alt="profile"
                className="navPic"
              ></img>
            </NavLink>
          ) : (
            <NavLink to="/Profile" onClick={handleClick}>
              <i className="fa-regular fa-user text-xl"></i>
            </NavLink>
          )}
        </li>
        <li>
          {user ? (
            <NavLink to="/" onClick={clicks}>
              LOGOUT
            </NavLink>
          ) : (
            <NavLink to="/Signup" onClick={handleClick}>
              SIGNUP
            </NavLink>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Nav;
