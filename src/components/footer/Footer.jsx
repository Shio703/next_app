import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

function footer() {
  return (
    <footer>
      <div className={styles.footerDiv}>
        <Link className={styles.link} href="mailto:contact.shiotv@gmail.com">
          <Image src="/Gmail-icon.png" width={35} height={35} alt="G-logo" />
          Gmail
        </Link>
        <Link
          className={styles.link}
          href="https://www.instagram.com/shio_zhamurashvili"
          target="_blank"
        >
          <Image
            src="/Instagram-icon.png"
            width={35}
            height={35}
            alt="I-logo"
            className={styles.linkIcon}
          />
          Instagram
        </Link>
        <Link className={styles.link} href="facebook.com">
          <Image
            src="/Facebook-icon.png"
            width={35}
            height={35}
            alt="F-Logo"
            className={styles.linkIcon}
          />
          Facebook
        </Link>
        <Link className={styles.link} href="twitter.com">
          <Image
            src="/Twitter-icon.png"
            width={35}
            height={35}
            alt="X-Logo"
            className={styles.linkIcon}
          />
          Twitter
        </Link>
        <div className={styles.rightDiv}>@Created By Shio&lt;703/&gt;</div>
      </div>
      <div className={styles.bottomDiv}></div>
    </footer>
  );
}

export default footer;
