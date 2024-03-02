import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// ------------------SEO----------------------
export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  // -----if data through db-------
  // const post = await getPost(slug);
  // -----if data through api-------
  const post = await getData(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

//------------------------- fetch Posts Through api -------------------------
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};
//-------------------------------------------------------------------

const SinglePostPage = async ({ params }) => {
  // //----------using slug finding single post id ,title and desc-------------
  const { slug } = params;
  const post = await getData(slug);

  //------------------------- fetch Posts without api -------------------------
  // const { slug } = params;
  // const post = await getPost(slug);

  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post?.img} alt="" fill className={styles.img} />
        </div>
      )}

      <div className={styles.textContainer}>
        {/*------------- if there is title-------- */}
        <h1 className={styles.title}>{post.title}</h1>

        <div className={styles.detail}>
          {/* ----------------------- for getting user through userid ------------------------ */}
          {/* ----------------------- IF THERE IS POST CALL COMPONENT ------------------------ */}
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          {/* ----------------------- ------------------------------- ------------------------ */}

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {/*post?.createdAt.toSting().slice(4, 16)*/}date missing
            </span>
          </div>
        </div>

        <div className={styles.content}>{post?.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
