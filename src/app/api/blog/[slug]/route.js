import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

// fetching data so we use Get
export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch post");
  }
};

// --------------deleting from db-----------
export const DELETE = async (request, { params }) => {
  const { slug } = params;
  try {
    connectToDb();
    await Post.deleteOne({ slug });
    return NextResponse.json("post deleted");
  } catch (error) {
    console.log(error);
    throw new Error("failed to Delete post");
  }
};
