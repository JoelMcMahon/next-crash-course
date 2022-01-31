import Head from "next/head";
import PostList from "../components/PostList";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
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
