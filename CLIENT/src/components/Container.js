import { NavLink } from "react-router-dom";

const Container = () => {
  return (
    <div className="flex flex-col w-100 justify-center items-center">
      <div className="z-10 OneContainer">
        <div className="one flex items-center w-80 h-500 p-4 ml-20 mt-20 border-8 rounded-md border-black box-shadow-brown">
          <img
            src="img\fitness.jpg"
            className="w-300 h-330 object-cover rounded-lg object-left img1"
            alt="IMG NOT SUPPORTED"
          />
          <div className="ml-10 p-2 one-para">
            <p className="text-4xl font-rampart first-letter:text-7xl -skew-x-12">BLOG.</p>
            <p className="font-moonDance text-3xl tracking-wide leading-10 para1">
              <br />
              Fitness is all about making your body stronger and healthier. Whether you're just starting out on your fitness journey or
              you're a seasoned pro, there's always room for improvement and new challenges to
              tackle.
              Take a look at others blog in which, they shared their perpective of how the fitness came in his/her
              life and How It made changes in his/her life.
            </p>
            <p className="relative top-10 left-72 w-30 text-2xl one-h1">So why wait? Check Out <i className="fa-solid fa-arrow-right-long"></i> <NavLink to="/Blog"><i className="fa-solid fa-book-open-reader text-3xl"></i></NavLink></p>
          </div>
        </div>
      </div>
      <div className="w-900 h-250 z-0 relative bottom-3 border-4 border-l-black border-b-black rounded-l-3xl rounded-b-xl rounded-r-none border-transparent left-b-one"></div>
      <div className="topRight border-transparent border-4 border-t-black border-r-black"></div>
        <div className="two bg-teal-500 flex items-center w-80 h-500 p-4 ml-48 border-8 rounded-md box-shadow-brown2 border-black">
          <img
            src="img\workout.jpg"
            className="w-300 h-330 object-cover rounded-lg object-right img2 order-2"
            alt="NOT SUPPORTED"
          />
          <div className=" flex flex-col ml-10 p-2 two-para">
            <p className="text-3xl mb-2 font-rampart first-letter:text-6xl -skew-x-12">WORKOUT PLANS.</p>
            <p className="font-moonDance text-3xl tracking-wide leading-10">
              <br></br>
              Offering workout plans through a website can be a great way to
              help people achieve their health and fitness goals.
              These plans are designed for use by individuals at a variety of
              fitness levels which includes mix of cardiovascular exercise, strength
              training, and flexibility work.
              Customers can access the workout plans & give workout suggestion to others through the website.
            </p>
          </div>
        </div>
      <div className="rightBottom border-transparent border-4 border-r-black border-b-black"></div>
      <div className="topLeft border-transparent border-4 border-t-black border-l-black"></div>
      <div className="z-10">
        <div className="three bg-teal-500 flex items-center w-80 h-500 text-xl p-4 ml-20 mr-20 mt-10 border-8 rounded-md box-shadow-brown border-black">
          <img
            src="img\diet.jpg"
            className="w-300 img3 h-330 object-cover rounded-lg object-left"
            alt="NOT SUPPORTED"
          />
          <div className="flex flex-col ml-10 p-2">
            <p className="text-3xl mb-2 font-rampart first-letter:text-6xl -skew-x-12">DIET GUIDE.</p>
            <p className="font-moonDance text-3xl tracking-wide leading-10">
              <br></br>
                A free diet guide on a website can be a valuable resource for
                people looking to improve their overall health. The guide will
                give tips & knowledge for planning diet by your weight levels.
                There will a doubt section,where you can shoot your doubts
                without any thought.
              By offering free diet guide,our website can help its visitors to make their own diet plans.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
