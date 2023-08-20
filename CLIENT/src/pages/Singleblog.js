import "../Css/Singlepost.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../CONTEXT/Context";

const Single = () => {
  const location = useLocation();

  const path = location.pathname.split("/")[2]; //spliting the path by slash and getting the third element which is id.

  const [post, setPost] = useState({});

  const PostImage = "http://localhost:3001/images/";
  
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:3001/api/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };

    getPost();
  }, [path]);

  const handleDel = async () => {
    try {
      await axios.delete("http://localhost:3001/api/posts/" + path, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (e) {
      console.log(e);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put("http://localhost:3001/api/posts/" + path, {
        username: user.username,
        title: title,
        desc: desc,
      });
      setUpdate(false);
    } catch (e) {}
  };

  return (
    <div>
      <div className="mt-20 ml-20 mr-20">
        <div className="flex justify-center">
          {post.photo && (
            <img
              src={PostImage + post.photo}
              alt="."
              className="rounded-xl singlePostimg"
            ></img>
          )}
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-col mt-20 border-b-4 border-black">
            <div className="flex justify-between">
              <p className="text-xl font-bold font-rampart mb-10 first-letter:text-3xl">
                WRITER -&ensp;<span className="uppercase">{post.username}</span>
              </p>
              {update ? (
                <input
                  type="text"
                  value={title}
                  className="p-3 h-10 font-bold font-serif text-center text-white bg-red-500 skew-y-3 tracking-widest hover:opacity-100"
                  onChange={(e) => setTitle(e.target.value)}
                ></input>
              ) : (
                <span className="relative">
                  <span className="h-10 absolute -inset-2 -skew-y-3 bg-green-900"></span>
                  <span className="relative text-white font-bold font-serif text-2xl tracking-widest">
                    {post.title}
                  </span>
                </span>
              )}
              <p className="text-xl">
                {new Date(post.createdAt).toDateString()}
              </p>
            </div>
            {post.username === user.username && (
              <div className="flex justify-between mt-10">
                <button onClick={handleDel}>
                  <i className="mb-2 icon1 fa-solid fa-trash"></i>
                </button>
                <button onClick={() => setUpdate(true)}>
                  <i className="fa-solid fa-pen-to-square text-3xl"></i>
                </button>
              </div>
            )}
          </div>
          {update ? (
            <textarea
              className="h-500 mt-10 tracking-wide leading-7 bg-black text-red-500 font-work"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          ) : (
            <p className="text-center tracking-wide leading-7 mt-10  first-letter:ml-10 font-work">
              {post.desc}
            </p>
          )}
        </div>
        { update &&
        <button
          className="bg-white p-3 mt-3 rounded h-12 float-right"
          onClick={handleUpdate}
        >
          UPDATE
        </button>}
      </div>
    </div>
  );
};

export default Single;
