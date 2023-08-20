import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Diet from "../src/pages/Diet";
import Workout from "../src/pages/Workout";
import Blog from "../src/pages/Blog";
import Login from "../src/pages/Login";
import Signup from '../src/pages/Signup';
import Singleblog from "../src/pages/Singleblog";
import Profile from "../src/pages/Profile";
import { useContext } from "react";
import  { Context } from "./CONTEXT/Context";
import Nav from "./components/Nav";
import Chest from "./pages/Chest";

function App() {
  const { user } = useContext(Context);
  return (
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/Signup" element={user?<Home/>:<Signup/>}></Route>
          <Route path="/Login" element={user?<Home/>:<Login/>}></Route>
          <Route path="/About" element={user? <About /> : <Signup/>}></Route>
          <Route path="/Diet" element={user? <Diet /> : <Signup/>}></Route>
          <Route path="/Workout" element={user?<Workout />:<Signup/>}></Route>
          <Route path="/Blog" element={user?<Blog />:<Signup/>}></Route>
          <Route path="/Profile" element={user ? <Profile/>:<Signup/>}></Route>
          <Route path="/Blog/:BlogId" element={user ? <Singleblog/>:<Signup/>}></Route>
          <Route path="/Chest" element={user ? <Chest/>:<Signup/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}
export default App;
