import React from "react";
import styles from "../styles/PostList.module.css";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <Link href={`/post/${encodeURIComponent(post.id)}`}>
      <a className={styles.card}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </a>
    </Link>
  );
};

export default PostCard;
