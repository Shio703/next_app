import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import msImage from "../../../public/fm.png";
import Link from "next/link";

function HtmlCss() {
  return (
    <main className={styles.main}>
      <h2 className={styles.mainTitle}>HTML & CSS</h2>
      <section className={styles.mainSec}>
        <div className={styles.imageWrapper}>
          <Image src={msImage} className={styles.msImage}></Image>
        </div>
        <div className={styles.textWrapper}>
          <h3>My 1nd module final project</h3>
          <p>
            Project "Fake Mess" is a clone of the Corporation Meta's
            Messenger.com's login page.
          </p>
          <span>
            <Link href="https://fakemessenger.netlify.app" target="_blank">
              see it in live from here
            </Link>
          </span>
        </div>
      </section>
    </main>
  );
}

export default HtmlCss;
