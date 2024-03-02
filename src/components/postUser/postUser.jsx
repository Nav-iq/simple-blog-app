import Image from "next/image";
import styles from "./postuser.module.css";
import { getUser } from "@/lib/data";

// //------------------------- fetch user through userId -> with api -------------------------
// const getData = async (userId) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
//     cache: "no-store",
//   });
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };
// //-------------------------------------------------------------------

const PostUser = async ({ id }) => {
  // //------------------------- fetch user through userId -> with api -------------------------
  //   const user = await getData(userId);
  //------------------------- fetch user through userId -> without api -------------------------
  const user = await getUser(id);

  return (
    <div className={styles.container}>
      <Image
        src={user.img ? user.img : "/about.jpg"}
        alt=""
        height={50}
        width={50}
        className={styles.avatar}
      />

      <div className={styles.texts}>
        <span className={styles.title}>Auther</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
