import React from "react";
import styles from "./header.module.css";
import Link from "next/link";

function Header() {
  const navLinks = [
    {
      id: 1,
      title: "HTML & CSS",
      url: "/htmlcss",
    },
    {
      id: 2,
      title: "Javascript",
      url: "/javascript",
    },
    {
      id: 3,
      title: "JS To Do",
      url: "/jstodo",
    },
  ];

  return (
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
       {/* testing commits */} 
       
        {/* <a href="https://fakemessenger.netlify.app/" target="_blank">
          HTML & CSS
        </a>
        <a href="https://fmjavascript.netlify.app" target="_blank">
          Javascript
        </a>
        <a href="https://jstodobyshio.netlify.app/" target="_blank">
          JS To Do
        </a> */}
      </nav>
    </header>
  );
}

export default Header;
