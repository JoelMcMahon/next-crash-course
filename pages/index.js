import Head from "next/head";
import Meta from "../components/Meta";
import PostList from "../components/PostList";

export default function Home({ posts }) {
  return (
    <div>
      <Meta title="Home" />
      <h1>Welcome To NextJS</h1>
      <PostList posts={posts}></PostList>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const posts = await res.json();
  return {
    props: { posts },
  };
};
