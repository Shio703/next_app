import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <span className={styles.mySpan}>hola</span>
      </div>
      <center>ეს არის მთავარი გვერდი</center>
      <section className={styles.mainSec}>
        <div className={styles.imageWrapper}>
          <Image
            src={"/me-sibereshi.jpg"}
            width={350}
            height={450}
            alt="Me Sibereshi"
            className={styles.img}
          />
        </div>
      </section>
    </main>
  );
}
