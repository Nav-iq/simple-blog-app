import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { revalidatePath } from "next/cache";
import { getPosts } from "@/lib/data";

//------------SEO----------------------
export const metadata = {
  title: "Blog",
  description: "blogging for fun",
};

//------------------------- fetch Posts through API-------------------------
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 3600 }, //-------refresh after every hour-------
  }); //------------can use ->cache: ""-----------

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};
//-------------------------------------------------------------------

const Blog = async () => {
  // //------------------------- fetch Posts through API-------------------------
  const posts = await getData();

  //------------------------- fetch Posts Without an API-------------------------
  // const posts = await getPosts();

  return (
    <div className={styles.container}>
      {/*------------------- showing posts here --------------------*/}
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          {/*-----passing post to postcards to show data in posts-------*/}
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default Blog;
