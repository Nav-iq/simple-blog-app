import Image from "next/image";
import styles from "./contact.module.css";

// -----------for seo---------------
export const metadata = {
  title: "Contact",
  description: "blogging for fun",
};

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="https://cdn.pixabay.com/photo/2023/11/02/15/58/flower-8360946_1280.jpg"
          alt=" "
          fill
          className={styles.img}
        />
      </div>

      <div className={styles.FormCOntainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (optional)" />
          <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
