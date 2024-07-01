import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

function JavaScript() {
  return (
    <main className={styles.main}>
      <h2 className={styles.mainTitle}>Javascript</h2>
      <section className={styles.mainSec}>
        <div className={styles.imageWrapper}>
          <Image
            src="/fmj.png"
            width={400}
            height={350}
            className={styles.msImage}
            alt="fm-img"
          ></Image>
        </div>
        <div className={styles.textWrapper}>
          <h3>My 2nd module final project</h3>
          <p>
            The "FMJavascript" project is an updated version of "Fake Mess". In
            this update, I added a single page called "Users" where you can view
            the user information fetched from the API with the help of fetch();.
          </p>
          <span>
            <Link href="https://fmjavascript.netlify.app" target="_blank">
              see it in live from here
            </Link>
          </span>
        </div>
      </section>
    </main>
  );
}

export default JavaScript;
