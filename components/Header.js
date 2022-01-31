import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>
        <span>Joel McMahon</span> Front-End Software Developer
      </h1>
      <p className={styles.description}>Welcome to My Portfolio</p>
    </div>
  );
};

export default Header;
