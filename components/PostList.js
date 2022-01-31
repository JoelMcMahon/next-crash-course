import React from "react";
import styles from "../styles/PostList.module.css";

const Postlist = ({ posts }) => {
  return (
    <div className={styles.grid}>
      {posts.map((post) => (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      ))}
    </div>
  );
};

export default Postlist;
