"use client";

import { addPost } from "@/lib/action";
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New Post</h1>
      <input type="hidden" value={userId} name="userId" />
      <input type="text" placeholder="title" name="title" />
      <input type="text" placeholder="slug" name="slug" />
      <input type="file" name="img" accept="image/*" />
      <textarea typeof="text" name="desc" cols="30" rows={10} placeholder="description"></textarea>
      <button>Add</button>
      {state?.error}
    </form>
  );
};

export default AdminPostForm;
