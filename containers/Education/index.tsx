import Image from "next/image";
import styled from "styled-components";
import oc from "open-color";

import GridChild from "../../components/GridChild";

import HYU from "../../public/hyu.png";

const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.5rem;
  row-gap: 1.5rem;

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

const Education = () => {
  return (
    <Container>
      <GridChild $bg={oc.gray[0]}>
        <div className="container">
          <div className="left">
            <Image
              src={HYU}
              alt="Hanyang University Logo"
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
            <div className="period">Mar, 2014 - Aug, 2021</div>
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
    </Container>
  );
};

export default Education;
