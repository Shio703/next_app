import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

function JsToDo() {
  return (
    <main className={styles.main}>
      <h2 className={styles.mainTitle}>JS To Do</h2>
      <section className={styles.mainSec}>
        <div className={styles.imageWrapper}>
          <Image
            src="/jstd.png"
            width={400}
            height={350}
            className={styles.msImage}
          ></Image>
        </div>
        <div className={styles.textWrapper}>
          <h3>Work for 3nd module</h3>
          <p>
          The project "JS TO DO" is a project for the 3rd module selection.
          </p>
          <span>
            <Link href="https://jstodobyshio.netlify.app" target="_blank">
              see it in live from here
            </Link>
          </span>
        </div>
      </section>
    </main>
  );
}

export default JsToDo;