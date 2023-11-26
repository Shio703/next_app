import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

function footer() {
  return (
    <footer>
      <div className={styles.footerDiv}>
        <a className={styles.link} href="mailto:contact.shiotv@gmail.com">
          <Image src="/Gmail-icon.png" width={35} height={35} alt="G-logo" />
          {/* <img
            src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/256/Gmail-icon.png"
            width="35em"/> */}
          Gmail
        </a>
        <a
          className={styles.link}
          href="https://www.instagram.com/shio_zhamurashvili"
          target="_blank">
          <Image
            src="/Instagram-icon.png"
            width={35}
            height={35}
            alt="I-logo"/>
          {/* <img
            src="https://icons.iconarchive.com/icons/ionic/ionicons/256/logo-instagram-icon.png"
            width="35em"
          /> */}
          Instagram
        </a>
        <div className={styles.rightDiv}>@Created By Shio</div>
      </div>
      <div className={styles.bottomDiv}></div>
    </footer>
  );
}

export default footer;
