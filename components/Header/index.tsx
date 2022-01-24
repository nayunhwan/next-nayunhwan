import Head from "next/head";

const Header = () => {
  return (
    <Head>
      <title>NAYUNHWAN :: Artistic programmer</title>
      <meta name="description" content="Yunhwan Na Personal page" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:image" content="/og.png" key="ogimage" />
    </Head>
  );
};

export default Header;
