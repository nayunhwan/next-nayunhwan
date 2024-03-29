import type { NextPage } from "next";

// import styles from "../styles/Home.module.css";

import styled, { ServerStyleSheet } from "styled-components";

import GNB from "../components/GNB";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Education from "../containers/Education";
import Specialized from "../containers/Specialized";
import Banner from "../containers/Banner";
import Work from "../containers/Work";

const Root = styled.div`
  padding: 0 2rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Main = styled.main`
  width: 800px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Home: NextPage = () => {
  return (
    // <div className={styles.container}>
    <Root>
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
    </Root>
  );
};

export default Home;
