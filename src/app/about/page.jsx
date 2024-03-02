import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Me</h2>

        <h1 className={styles.title}>Very Good At Nothing Hahah</h1>

        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam rem blanditiis
          possimus ea recusandae maxime repellat placeat quas deserunt, nihil aperiam similique
          doloribus nemo. Veritatis enim molestias possimus expedita! Facilis!
        </p>

        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 k</h1>
            <p>years of experience</p>
          </div>

          <div className={styles.box}>
            <h1>10 k</h1>
            <p>years of experience</p>
          </div>

          <div className={styles.box}>
            <h1>10 k</h1>
            <p>years of experience</p>
          </div>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image
          src="https://cdn.pixabay.com/photo/2015/04/20/19/04/water-732025_1280.jpg"
          alt=""
          fill
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default AboutPage;
