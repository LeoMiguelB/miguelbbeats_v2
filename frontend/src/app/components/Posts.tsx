import { getAllPost } from "../../actions/db";
import BlogCard from "./BlogCard";

const Posts = async () => {
  const posts = await getAllPost();

  return (
    <>
      {
        posts.map((p, index) => 
          <BlogCard p={p} key={index} />
        )
      }
    </>
  )
}

export default Posts;