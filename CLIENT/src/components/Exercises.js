import { NavLink } from "react-router-dom";

const Exercises = () => {
  return (
    <div className="flex flex-wrap justify-around">
      <div className="flex flex-col items-center h-500 w-500 mt-20 box-shadow-brown p-3 border-8 border-black rounded-xl translate-x-5">
        <img src="img/chestMain.jpeg" alt="not supported!" className="" />
        <div className="border-b-4 border-black">
          <span className="text-xl font-bold translate-x-36 font-work p-2">
            CHEST
          </span>
        </div>
        <p className="mt-4 mb-5 p-2 tracking-wide">
          Strong pectoral muscles can improve your posture. Good posture is
          important to help us function optimally in everyday life as well as
          while performing physical exercises. The correct form while exercising
          is crucial. Good posture plays an important role in getting your form
          right.
        </p>
        <span className="float-right m-3">Want some workouts?&ensp;</span>{" "}
        <NavLink to="/Chest">
          Click Here!!<i className="fa-sharp fa-solid fa-meteor"></i>
        </NavLink>
      </div>
      <div className="flex flex-col items-center h-500 w-500 mt-20 box-shadow-brown p-3 border-8 border-black rounded-xl translate-x-5">
        <img src="img/backMain.jpeg" alt="not supported!" className="" />
        <div className="border-b-4 border-black">
          <span className="text-xl font-bold translate-x-36 font-work p-2">
            BACK
          </span>
        </div>
        <p className="mt-4 mb-5 p-2 tracking-wide">
          Strong pectoral muscles can improve your posture. Good posture is
          important to help us function optimally in everyday life as well as
          while performing physical exercises. The correct form while exercising
          is crucial. Good posture plays an important role in getting your form
          right.
        </p>
        <span className="float-right m-3">Want some workouts?&ensp;</span>{" "}
        <NavLink to="">
          Click Here!!<i className="fa-sharp fa-solid fa-meteor"></i>
        </NavLink>
      </div>
      <div className="flex flex-col items-center h-500 w-500 mt-20 box-shadow-brown p-3 border-8 border-black rounded-xl translate-x-5">
        <img src="img/bicepsMain.jpeg" alt="not supported!" className="" />
        <div className="border-b-4 border-black">
          <span className="text-xl font-bold translate-x-36 font-work p-2">
            BICEPS
          </span>
        </div>
        <p className="mt-4 mb-5 p-2 tracking-wide">
          Strong pectoral muscles can improve your posture. Good posture is
          important to help us function optimally in everyday life as well as
          while performing physical exercises. The correct form while exercising
          is crucial. Good posture plays an important role in getting your form
          right.
        </p>
        <span className="float-right m-3">Want some workouts?&ensp;</span>{" "}
        <NavLink to="">
          Click Here!!<i className="fa-sharp fa-solid fa-meteor"></i>
        </NavLink>
      </div>
      <div className="flex flex-col items-center h-500 w-500 mt-20 box-shadow-brown p-3 border-8 border-black rounded-xl translate-x-5">
        <img src="img/triMain.jpeg" alt="not supported!" className="" />
        <div className="border-b-4 border-black">
          <span className="text-xl font-bold translate-x-36 font-work p-2">
            TRICEPS
          </span>
        </div>
        <p className="mt-4 mb-5 p-2 tracking-wide">
          Strong pectoral muscles can improve your posture. Good posture is
          important to help us function optimally in everyday life as well as
          while performing physical exercises. The correct form while exercising
          is crucial. Good posture plays an important role in getting your form
          right.
        </p>
        <span className="float-right m-3">Want some workouts?&ensp;</span>{" "}
        <NavLink to="">
          Click Here!!<i className="fa-sharp fa-solid fa-meteor"></i>
        </NavLink>
      </div>
      <div className="flex flex-col items-center h-500 w-500 mt-20 box-shadow-brown p-3 border-8 border-black rounded-xl translate-x-5">
        <img src="img/shouMain.jpeg" alt="not supported!" className="" />
        <div className="border-b-4 border-black">
          <span className="text-xl font-bold translate-x-36 font-work p-2">
            SHOULDER
          </span>
        </div>
        <p className="mt-4 mb-5 p-2 tracking-wide">
          Strong pectoral muscles can improve your posture. Good posture is
          important to help us function optimally in everyday life as well as
          while performing physical exercises. The correct form while exercising
          is crucial. Good posture plays an important role in getting your form
          right.
        </p>
        <span className="float-right m-3">Want some workouts?&ensp;</span>{" "}
        <NavLink to="">
          Click Here!!<i className="fa-sharp fa-solid fa-meteor"></i>
        </NavLink>
      </div>
      <div className="flex flex-col items-center h-500 w-500 mt-20 box-shadow-brown p-3 border-8 border-black rounded-xl translate-x-5">
        <img src="img/legMain.jpeg" alt="not supported!" className="" />
        <div className="border-b-4 border-black">
          <span className="text-xl font-bold translate-x-36 font-work p-2">
            LEGS
          </span>
        </div>
        <p className="mt-4 mb-5 p-2 tracking-wide">
          Strong pectoral muscles can improve your posture. Good posture is
          important to help us function optimally in everyday life as well as
          while performing physical exercises. The correct form while exercising
          is crucial. Good posture plays an important role in getting your form
          right.
        </p>
        <span className="float-right m-3">Want some workouts?&ensp;</span>
        <NavLink to="">
          Click Here!!<i className="fa-sharp fa-solid fa-meteor"></i>
        </NavLink>
      </div>
      <div className="flex flex-col items-center h-500 w-500 mt-20 box-shadow-brown p-3 border-8 border-black rounded-xl translate-x-5">
        <img src="img/absMain.jpeg" alt="not supported!" className="" />
        <div className="border-b-4 border-black">
          <span className="text-xl font-bold translate-x-36 font-work p-2">
            ABS
          </span>
        </div>
        <p className="mt-4 mb-5 p-2 tracking-wide">
          Strong pectoral muscles can improve your posture. Good posture is
          important to help us function optimally in everyday life as well as
          while performing physical exercises. The correct form while exercising
          is crucial. Good posture plays an important role in getting your form
          right.
        </p>
        <span className="float-right m-3">Want some workouts?&ensp;</span>
        <NavLink to="">
          Click Here!!<i className="fa-sharp fa-solid fa-meteor"></i>
        </NavLink>
      </div>


    </div>
  );
};

export default Exercises;
