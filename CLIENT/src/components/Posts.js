import Post from "./Post";
import "../Css/Posts.css";

function Posts({posts}){
  return (
    <div className="Posts border-b-2 border-b-black border-transparent">
      {posts.map( (p,i) => {
       return <Post key={i} post={p}></Post>
      })}
    </div>
  );
};

export default Posts;
