import Links from "@/components/navbar/links/Links";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Sorry, The Page you are looking for Does not exists</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
