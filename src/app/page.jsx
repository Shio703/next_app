"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataForPosts = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=8`
        );
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let postsData = await response.json();
        setData(postsData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDataForPosts();
  }, []);
  console.log(data);

  return (
    <main className={styles.main}>
      <div>
        <span className={styles.mySpan}>hola</span>
      </div>
      <center>ეს არის მთავარი გვერდი</center>
      <section className={styles.mainSec}>
        {/* <div className={styles.imageWrapper}>
          <Image
            src={"/me-sibereshi.jpg"}
            width={350}
            height={450}
            alt="Me Sibereshi"
            className={styles.img}
            priority
          />
        </div> */}
        <div className={styles.dataContainer}>
          {loading && (
            <div className="text-xl font-medium">Loading posts...</div>
          )}
          {error && <div className="text-red-700">{error}</div>}
          {data &&
            data.map((user,index) => {
              <p>{user}</p>
              console.log(user)
            })}
        </div>
      </section>
    </main>
  );
}
