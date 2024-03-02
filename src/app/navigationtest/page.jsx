"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

//--------------------- ((Client Side)) navigation in next js --------------------------
const NavigationTestPage = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("clicked");
    router.push("/");
    // router.forward();              for going forward page
    // router.back();                 for going back page
  };

  // ----------------------------- path ----------------------------
  const pathName = usePathname();
  // ----------------------------- Search querry path ----------------------------
  const searchParams = useSearchParams();
  const q = searchParams.get("q");

  console.log(q);

  return (
    <div>
      {/* <Link href="/" prefetch={false}>
        Click here
      </Link> */}
      <button onClick={handleClick}>Go Back</button>
    </div>
  );
};

export default NavigationTestPage;
