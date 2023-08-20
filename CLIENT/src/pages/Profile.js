import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../CONTEXT/Context";
import "./Profile.css";

const Profile = () => {
  const [file, setFile] = useState(null);
  const [username, setName] = useState("");
  const [password, setPass] = useState("");
  const [email, setEmail] = useState("");


  const UserImage = "http://localhost:3001/images/";


  const [updateMode, setUpdateMode] = useState(false);

  const[updated,setUpdated] = useState(false);

  const { user ,dispatch } = useContext(Context);
 


  const update = async (e) => {


    e.preventDefault();
    //DISPATCHES AN ACTION CALLED UPDATE_START;
    dispatch({type:"UPDATE_START"});


    const updateUser = {
      userId: user._id,
      username,
      password,
      email,
    };


    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updateUser.profilePic = filename;
      try {
        await axios.post("http://localhost:3001/api/upload", data);
      } catch (e) {
        console.log(e);
      }
    }
    try {
      const res = await axios.put("http://localhost:3001/api/users/" + user._id, updateUser);
      setUpdated(true);
      dispatch({type:"UPDATE_SUCESS",payload:res.data});
      window.location.replace("/");
    } catch (e) {
      dispatch({type:"UPDATE_FAILURE"})
    }
  };
  return (
    <>
      <div className="flex flex-col items-center">
        <p className="text-4xl mr-6 font-rampart mt-10 first-letter:text-8xl -skew-x-12">
          PROFILE.
        </p>
      </div>


      {updateMode===false && <div className="flex justify-center">
        <img src={UserImage+user.profilePic} alt="profile" className="rounded-3xl profilepic"></img>
      </div>}


      {updateMode?

      //IF THE UPDATE MODE IS ON!!!!
      (<div className="flex flex-col items-center">
          <label
            htmlFor="fileInput"
            className="relative top-2 right-4 cursor-pointer"
          >
             {/**IF THE FILE IS UPLOADED THE SRC WILL THE URL OF THAT FILE!!*/}
            <img src={file? URL.createObjectURL(file) : UserImage+user.profilePic} alt="PROFILEPICTURE" className="profilepicUpload"></img>
          </label>
          <input
            className="hidden"
            type="file"
            id="fileInput"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          ></input>


        <p className="text-xl font-rampart mt-20">
        Username :- <input type="text" onChange={(e) => {
              setName(e.target.value);
            }} required></input>
        </p>


        <p className="text-xl font-rampart mt-5">
          Email :- <input type="email" className="ml-11" onChange={(e) => {
              setEmail(e.target.value);
            }} required></input>
        </p>


        <p className="text-xl font-rampart mt-5">
          Password :- <input type="password"onChange={(e) => {
              setPass(e.target.value);
            }} required></input>
        </p>


        <button
          className="bg-black text-white p-2 mt-10 rounded" onClick={update}>Update</button>
      </div>)
      
      :
      //ELSE PART OF THE UPDATE
      (
        <div className="flex flex-col items-center">
        <p className="text-xl font-rampart mt-20">
          Username - <span>{user.username}</span>
        </p>
        <p className="text-xl font-rampart mt-5">
          Email - <span>{user.email}</span>
        </p>
      </div>
      )
}
      <div className="flex justify-evenly items-center mt-8 gap-4">


      {updateMode?
      
      <span className="hidden"></span>:<button
          className="bg-black text-green-500 p-2 rounded"
          onClick={() => setUpdateMode(true)}
        >
          Update<i className="fa-solid fa-pen-to-square text-xl"></i>
        </button>}
      </div>
    
      {(updated && updateMode)?<div className="flex justify-center"><span className="text-green-500 text-xl">Successfully Updated!!!</span></div>:<span className="hidden"></span>}
    </>
  );
};

export default Profile;
