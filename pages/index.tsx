import type { NextPage } from "next";

import styles from "../styles/Home.module.css";

import styled from "styled-components";

import GNB from "../components/GNB";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Education from "../containers/Education";
import Specialized from "../containers/Specialized";
import Banner from "../containers/Banner";
import Work from "../containers/Work";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Main = styled.main`
  width: 800px;
`;

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <GNB />

      <Banner />
      <Container>
        <Main>
          <Education />
          <Specialized />
          <Work />
        </Main>
      </Container>
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
