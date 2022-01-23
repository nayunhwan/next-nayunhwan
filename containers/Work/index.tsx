import Image from "next/image";
import styled from "styled-components";
import GridChild from "../../components/GridChild";

import oc from "open-color";

const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1.5rem;
  row-gap: 1.5rem;

  & > ${GridChild}:nth-child(1) {
    grid-column: 1 / 3;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: ${oc.white};

    & > h1 {
      font-weight: 900;
      margin-bottom: 0;
    }
    & > .jobTitle {
      font-weight: 600;
    }
  }

  & > ${GridChild}:nth-child(2) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 20px;
    color: ${oc.pink[5]};
    line-height: 32px;

    & > .description {
      margin-top: 16px;
      font-weight: 400;
      text-align: center;
      font-size: 24px;

      & > b {
        font-size: 32px;
        font-weight: 900;
      }
    }
  }

  & > .naverlabs {
    grid-column: 1 / 3;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: ${oc.white};
  }

  & > .vingle {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${oc.white};

    & > .imgWrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & > .company {
      margin-top: 16px;
      font-weight: 600;
      font-size: 18px;
    }

    & > .jobTitle {
      text-align: center;
      margin-top: 4px;
    }
  }
`;

const FEConfChild = styled.a`
  grid-column: 1 / 4;
  height: 400px;
  background-image: url("/feconf.jpeg");
  background-size: cover;
  background-position-y: center;
  border-radius: 36px;
`;

const Work = () => {
  return (
    <Container>
      <GridChild $bg="#6b31d5">
        <span>Current</span>
        <div>
          <Image src="/sendbird.png" width={60} height={60} />
          <h1>Sendbird</h1>
        </div>

        <div className="jobTitle">Front-End Engineer</div>
      </GridChild>
      <GridChild $bg={oc.gray[0]}>
        <Image src="/unicorn.png" width={150} height={150} />
        <h1 className="description">
          <b>Unicorn</b>
          <br />
          Member
        </h1>
      </GridChild>
      <FEConfChild href="https://www.youtube.com/watch?v=kZO5PEypjVg" />
      <GridChild className="naverlabs" $bg={oc.black}>
        <div>
          <Image src="/naverlabs.png" width={150} height={150} />

          <div>
            <b>NAVER LABS</b>
          </div>
          <div>Front-End Engineer Intern</div>
        </div>
      </GridChild>
      <GridChild $bg="#5BC451">
        <Image src="/naver.png" width={150} height={150} />
        NaverLabs
      </GridChild>
      <GridChild className="vingle" $bg="#db3e46">
        <div className="imgWrapper">
          <Image src="/vingle.svg" width={125} height={125} />
        </div>
        <div className="company">Vingle</div>
        <div className="jobTitle">Front-End Engineer Intern</div>
      </GridChild>
      <GridChild className="vingle" $bg="#534794">
        <div className="imgWrapper">
          <Image src="/elice.png" width={125} height={125} />
        </div>
        <div className="company">Elice</div>
        <div className="jobTitle">Front-End Engineer Intern</div>
      </GridChild>
      <GridChild className="vingle" $bg="#7552f6">
        <div className="imgWrapper">
          <Image src="/additor.svg" width={125} height={125} />
        </div>
        <div className="company">Additor</div>
        <div className="jobTitle">Front-End Engineer Intern</div>
      </GridChild>
    </Container>
  );
};

export default Work;
