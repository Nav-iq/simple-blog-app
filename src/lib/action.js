"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const addPost = async (prevState, formData) => {
  // const title = formData.get("title");
  // const desc = formData.get("desc");
  // const slug = formData.get("slug");

  //  ------------ in destructured form -----------
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  //-------------saving to db-------------------------
  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  //--------------delete from db-------------------------
  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("Deleted");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went Wrong!" };
  }
};

//------------- admin add and delete --------------------
export const addUser = async (prevState, formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  //-------------saving to db-------------------------
  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });

    await newUser.save();
    console.log("saved");
    revalidatePath("/admin"); //after saving go to admin
  } catch (error) {
    console.log(error);
    return { error: "Something went Wrong!" };
  }
};

//--------------delete from db-------------------------
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.deleteMany({ userId: id }); //post will alse be deleted
    await User.findByIdAndDelete(id);
    console.log("Deleted");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went Wrong!" };
  }
};

//----------------------github login---------------------
export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};
//----------------------github logout---------------------
export const handleLogout = async () => {
  "use server";
  await signOut();
};

// ------------------------Register new user-----------------------------
export const register = async (previousState, formData) => {
  const { username, email, password, img, passwordRepeat } = Object.fromEntries(formData);
  if (password !== passwordRepeat) {
    return { error: "password does not match" };
  }

  //---- saving to db------
  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exists" };
    }

    // -- encrpting password using bcrypt lib --
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    // console.log("saved");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went Wrong!" };
  }
};

//------------------------ loging in -----------------------
export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error);

    if (error.message.includes("CredentialsSignin")) {
      return { error: "invalid username or password" };
    }
    throw error;
  }
};
