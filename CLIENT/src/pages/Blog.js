import BlogHead from "../components/BlogHead";
import "./Blog.css";
import Posts from "../components/Posts";
import Write from "../components/Write";
import { useEffect, useState } from "react";
import axios from "axios";




const Blog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:3001/api/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <BlogHead></BlogHead>
      <p className="text-center m-6 font-work text-xl">
        Check our inspirational blogs down below OR else write a blog that can
        inspire others!
      </p>
      <Posts posts={posts}></Posts>
      <Write></Write>
    </div>
  );
};

export default Blog;
