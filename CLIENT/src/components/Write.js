import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../CONTEXT/Context";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const [error, setError] = useState(false);


  const upload = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("http://localhost:3001/api/upload", data);
      } catch (e) {
        console.log(e);
      }
    }
    try {
      const res = await axios.post("http://localhost:3001/api/posts", newPost);
      window.location.replace("/Blog/" + res.data._id);
    } catch (e) {
      setError(true);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center border">
        {file && (
          <img
            src={URL.createObjectURL(file)}
            className="mt-20 rounded-xl w-540"
            alt="p"
          ></img>
        )}
      
        <form>
          <label
            htmlFor="fileInput"
            className="relative top-2 right-4 cursor-pointer"
          >
            <i className="fa-sharp fa-solid fa-file-import text-4xl mt-8"></i>
          </label>
          <input
            className="hidden "
            type="file"
            id="fileInput"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          ></input>
          <input
            type="text"
            placeholder="Title"
            className="p-2 text-lg border border-black w-400 h-10 focus:outline-none"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
        </form>
        <form>
          <textarea
            className="writeTextArea font-work p-2 text-lg tracking-wide leading-6"
            placeholder="Write your own blog..."
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          ></textarea>
        </form>
        {error && (
          <div className="flex flex-col items-center">
            <p className="text-red-500">Something went wrong!!!&emsp;</p>
            <p>
              "May be you have already uploaded a blog...</p>
            <p> If YES,Go ahead and edit
              it for providing new content,Else wait and upload it
              later!!!"
            </p>
          </div>
        )}
        <button className="bg-teal-300 rounded-md p-2 m-4" onClick={upload}>
          Upload 
        </button>
      </div>
    </>
  );
};

export default Write;
