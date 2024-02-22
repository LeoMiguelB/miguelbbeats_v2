import { getAllPost } from "../../../libs/actions";
import BlogCard from "./BlogCard";

const Posts = async () => {
  const posts = await getAllPost();

  console.log(posts);

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