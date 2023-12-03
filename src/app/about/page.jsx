import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
function About() {
  return (
    <main className={styles.main}>
      <h3>Little Info about me</h3>
      <section className={styles.profileSec}>
        <div>
          <Image
            src="/myLogo.png"
            width={250}
            height={240}
            className={styles.profilePic}
          ></Image>
        </div>
        <div className={styles.profileLinks}>
          <a
            href="https://www.instagram.com/shio_zhamurashvili/"
            target="_blank"
          >
            <Image src="/Instagram-icon.png" width={50} height={50}></Image>
          </a>
          <a
            href="https://www.youtube.com/channel/UCmykV5UurdztYgjm8vEM2Fw"
            target="_blank"
          >
            <Image src="/YT-Icon.png" width={50} height={50}></Image>
          </a>
          <a
            href="https://www.facebook.com/Shio.Zhamurashvili/"
            target="_blank"
          >
            <Image src="/Facebook-icon.png" width={50} height={50}></Image>
          </a>
        </div>
        <p className={styles.profileInfo}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos aliquam
          odit soluta modi et, repellendus consequatur assumenda dicta,
          distinctio velit in consequuntur placeat labore cum perspiciatis
          praesentium debitis? Saepe, similique!
        </p>
      </section>
    </main>
  );
}

export default About;
