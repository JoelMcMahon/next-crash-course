import React from "react";
import styles from "../styles/PostList.module.css";
import PostCard from "./PostCard";

const Postlist = ({ posts }) => {
  return (
    <div className={styles.grid}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
        // <div>{post.id}</div>
      ))}
    </div>
  );
};

export default Postlist;
