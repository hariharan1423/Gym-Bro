import Exercises from "../components/Exercises";
import WorkoutHead from "../components/WorkoutHead";
import "./Workout.css"

const Workout = () => {
  return (
  <>
    <WorkoutHead></WorkoutHead>
      <div className="m-7">
           <Exercises></Exercises>
      </div>
  </>
  );
};

export default Workout;
