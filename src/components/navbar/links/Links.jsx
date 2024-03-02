"use client";

import { useState } from "react";
import styles from "./links.module.css";
import Navlink from "./navLink/navLink";
import Image from "next/image";
import { handleLogout } from "@/lib/action";
import { auth } from "@/lib/auth";

// ------------- array for navlinks -------------
const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = ({ session }) => {
  //--------------- responsiveness: show menu button on mobile ------------
  const [open, setOpen] = useState(false);

  //----------------- temporary data --------------------
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <Navlink item={link} key={link.title} />
        ))}

        {/*---------- to show login and logout when authenticated -----------*/}
        {session?.user ? (
          <>
            {session.user?.isAdmin && <Navlink item={{ title: "admin", path: "/admin" }} />}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <Navlink item={{ title: "login", path: "/login" }} />
        )}
      </div>
      {/*---------- responsiveness: show menu button on mobile -----------*/}
      <Image
        src="https://cdn.pixabay.com/photo/2012/04/01/18/44/circle-23965_1280.png"
        alt=""
        width={30}
        height={30}
        className={styles.menuButton}
        onClick={() => setOpen((menu) => !menu)}
      />

      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <Navlink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
