import Head from "next/head";
import React from "react";

const Meta = ({
  title = "Portfolio",
  keywords = "web development, front-end developer, coding, programming",
  description = "Joel McMahon Portfolio Site",
}) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

// Meta.defaultProps = {
//   title: "Portfolio",
//   keywords: "web development, front-end developer, coding, programming",
//   description: "Joel McMahon's Portfolio",
// };

export default Meta;
