import React from "react";
import styles from "./header.module.css";

function Header() {
  const navLinks = [
    {
      id: 1,
      title: "HTML & CSS",
    },
    {
      id: 2,
      title: "Javascript",
    },
    {
      id: 3,
      title: "JS To Do",
    },
  ];

  return (
    <header className={styles.header}>
      <a href="">
        <img
          src="https://icons.iconarchive.com/icons/justicon/free-simple-line/72/Development-Interface-Computer-Photo-Gear-Browser-icon.png"
          alt="Logo"
        />
      </a>
      <nav className={styles.navLinks}>
        {navLinks.map((link) => (
          <li>{link.title}</li>
        ))}

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
