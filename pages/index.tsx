import type { NextPage } from "next";

import Image from "next/image";
import styles from "../styles/Home.module.css";

import styled from "styled-components";

import GNB from "../components/GNB";
import Header from "../components/Header";
import Footer from "../components/Footer";

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

const Button = styled.button`
  border: 1px solid ${oc.black};
  background: none;
  padding: 8px 16px;
  border-radius: 4px;
  margin-top: 3rem;
  font-size: 1rem;
  font-weight: 600;
`;

const GridChild = styled.div<{ $bg?: string }>`
  background: ${(props) => props.$bg || "None"};
  height: 300px;
  border-radius: 24px;
  padding: 50px;
`;

const Education = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  row-gap: 1rem;

  & > ${GridChild}:nth-child(1) {
    grid-column: 1 / 3;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .left {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .right {
      flex: 2;

      & > span {
        font-weight: 600;
        color: ${oc.gray[6]};
      }

      & > h1 {
        margin-top: 0;
        font-weight: 900;
        color: ${oc.gray[8]};
        margin-bottom: 10px;
      }

      .period {
        color: ${oc.gray[7]};
      }
    }
  }

  & > ${GridChild}:nth-child(2) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: ${oc.white};
    text-align: center;

    & > h1 {
      margin-top: 8px;
      font-weight: 900;
    }
  }

  & > ${GridChild}:nth-child(3) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    & > h1 {
      margin-top: 8px;
      font-weight: 900;
    }
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
        <Button>Download CV</Button>
      </Banner>
      <Container>
        <Main>
          <Education>
            <GridChild $bg={oc.gray[0]}>
              <div className="container">
                <div className="left">
                  <Image
                    src="/hyu.png"
                    alt="Vercel Logo"
                    width="128"
                    height="128"
                  />
                </div>
                <div className="right">
                  <span>Studied at</span>
                  <h1>
                    Hanyang University
                    <br />
                    ERICA
                  </h1>
                  <div className="period">Mar, 2014 - Apr, 2021</div>
                </div>
              </div>
            </GridChild>
            <GridChild $bg={oc.gray[9]}>
              <div>Bachelor of Science</div>
              <h1>
                Computer
                <br />
                Science
              </h1>
              <span>
                1st major <br />
                <b>GPA 4.12</b>
              </span>
            </GridChild>
            <GridChild $bg={oc.orange[0]}>
              <div>Bachelor of Science</div>
              <h1>Design Engineering</h1>
              <span>
                2nd major
                <br />
                <b>GPA 3.86</b>
              </span>
            </GridChild>
          </Education>
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
