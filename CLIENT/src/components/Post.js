import "../Css/Post.css";
import { NavLink } from "react-router-dom";

const Post = ({post}) => {
  const PostImage = "http://localhost:3001/images/"
  return (
    <>
      <div className="post bg-teal-600 m-20 box-shadow-brown p-3 border-8 border-black rounded overflow-hidden">
        <img src={PostImage+post.photo} alt="not supported!"/> 
        <div className=" flex justify-between border-b-4 border-black">
          <span className="text-xl font-bold font-work p-2">{post.title}</span>
          <span className="text-xl p-2">{new Date(post.createdAt).toDateString()}</span>
        </div>
          <div className="postDescrp">
            <p className="mt-4 mb-5 p-2 tracking-wide leading-relaxed">
             {post.desc}
            </p>
          </div>
          <NavLink to={`/Blog/${post._id}`} className="float-right m-3 ">ReadMore&ensp;<i className="fa-solid fa-arrow-right-long"></i><i className="fa-solid fa-book-open-reader text-3xl"></i></NavLink>
        <span className="relative top-16 ml-2 font-rampart uppercase">Writer : {post.username}</span>
      </div>
    </>
  );
};

export default Post;
