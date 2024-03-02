import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>This is Website : My Web Home</h1>

        <p className={styles.desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae totam dolorem
          corrupti, quaerat voluptatum voluptate assumenda atque eum architecto sed magni.
        </p>

        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>

        <div className={styles.brand}>
          <Image
            src="https://cdn.pixabay.com/photo/2023/12/08/10/25/church-8437403_1280.jpg"
            alt=""
            fill
            className={styles.branding}
          />
        </div>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src="https://cdn.pixabay.com/photo/2023/03/29/19/32/man-7886201_1280.jpg"
          alt=""
          fill
          className={styles.heroImage}
        />
      </div>
    </div>
  );
};

export default Home;
