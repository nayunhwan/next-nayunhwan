import type { NextPage } from "next";

import Image from "next/image";
import styles from "../styles/Home.module.css";

import styled from "styled-components";

import GNB from "../components/GNB";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Education from "../containers/Education";
import Specialized from "../containers/Specialized";

import oc from "open-color";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 500px;

  & > h1 {
    font-size: 52px;
    font-weight: 900;
    margin-bottom: 0;
  }

  & > h2 {
    color: ${oc.gray[7]};
    font-weight: 600;
  }
`;

const Main = styled.main`
  width: 800px;
`;

const Button = styled.a`
  border: 2px solid ${oc.gray[4]};
  color: ${oc.gray[4]};
  background: none;
  padding: 8px 16px;
  border-radius: 4px;
  margin-top: 3rem;
  font-size: 1rem;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    border: 2px solid ${oc.black};
    color: ${oc.black};
    transition: 0.3s;
  }
`;

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <GNB />
      <Banner>
        <h1>Artistic programmer</h1>
        <h2>both develop & design.</h2>
        <Button
          href="https://nayunhwan.github.io/whoami/cv/Yunhwan_Na_CV.pdf"
          target="_blank"
        >
          Download CV
        </Button>
      </Banner>
      <Container>
        <Main>
          <Education />
          <Specialized />
        </Main>
      </Container>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
      <Footer />
      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
