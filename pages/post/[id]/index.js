import React from "react";
import Link from "next/link";
import Meta from "../../../components/Meta";

const post = ({ post }) => {
  return (
    <div>
      <Meta title={post.title} descritpion={post.excerpt} />
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <br />
      <Link href="/">Go Back </Link>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const post = await res.json();
  return {
    props: { post },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  const ids = posts.map((post) => {
    return post.id;
  });
  const paths = ids.map((id) => {
    return { params: { id: id.toString() } };
  });
  return { paths, fallback: false };
};

export default post;
