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
          {/* <Specialized /> */}
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
