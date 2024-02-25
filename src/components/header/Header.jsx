"use client";
import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";

function Header() {
  const navLinks = [
    {
      id: 1,
      title: "HTML & CSS",
      url: "/htmlcss",
    },
    {
      id: 2,
      title: "JavaScript",
      url: "/javascript",
    },
    {
      id: 3,
      title: "JS To Do",
      url: "/jstodo",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
  ];

  const handleBurgerOpen = () => {
    // console.log("clicked");
    
  };

  return (
    <>
      <header className={styles.header}>
        <a href="/">
          <img
            src="https://icons.iconarchive.com/icons/justicon/free-simple-line/72/Development-Interface-Computer-Photo-Gear-Browser-icon.png"
            alt="Logo"
          />
        </a>
        <nav className={styles.navLinks}>
          {navLinks.map((link) => (
            <Link className={styles.navLink} href={link.url}>
              {link.title}
            </Link>
          ))}
        </nav>
        <Image
          onClick={handleBurgerOpen}
          src="/Bg-icon.png"
          width={40}
          height={40}
          className={styles.burgerMenuIcon}
        />
        {/* ბურგერ მენიუ იქნება აქ */}
      </header>

      <div className={styles.menu}>
        {navLinks.map((link) => (
          <li className={styles.menuLink}>
            <Link className={styles.menuLink} href={link.url}>
              {link.title}
            </Link>
          </li>
        ))}
      </div>
    </>
  );
}

export default Header;
