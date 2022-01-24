import Image from "next/image";
import styled from "styled-components";
import GridChild from "../../components/GridChild";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(duration);
dayjs.extend(relativeTime);

import oc from "open-color";

const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1.5rem;
  row-gap: 1.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  & > .sendbird {
    grid-column: 1 / 3;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: ${oc.white};

    @media (max-width: 600px) {
      grid-column: 1;
    }

    h1 {
      font-weight: 900;
      margin-bottom: 0;
      margin-top: 8px;
    }

    .jobTitle {
      margin-bottom: 8px;
      font-weight: 600;
    }
  }

  & > .unicorn {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 20px;
    color: ${oc.pink[5]};
    line-height: 28px;

    & > .imgWrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & > .description {
      margin-top: 16px;
      text-align: center;
      font-size: 18px;

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

    @media (max-width: 600px) {
      grid-column: 1;
    }

    .jobTitle {
      margin-top: 32px;
      margin-bottom: 8px;
      font-weight: 600;
    }
  }

  & > .naver {
    color: ${oc.white};
    text-align: center;
  }

  & > .short {
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
      font-weight: 900;
      margin-top: 16px;
      font-size: 22px;
    }

    & > .jobTitle {
      text-align: center;
      margin-top: 4px;
    }

    & > .period {
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
  transition: 0.3s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
    transition: 0.3s;
  }

  @media (max-width: 600px) {
    grid-column: 1;

    height: 200px;
    border-radius: 24px;
  }
`;

const months =
  dayjs().diff(dayjs("2019-04-01").format("YYYY-MM-DD"), "months") + 1;

console.log(Math.floor(months / 12), "yrs", months % 12, "mos");

const Work = () => {
  return (
    <Container>
      <GridChild className="sendbird" $bg="#6b31d5">
        <div>
          <Image src="/sendbird.png" width={60} height={60} />
          <h1>Sendbird</h1>
          <div className="jobTitle">Front-End Engineer</div>
          <div>
            Apr, 2019 - Current
            <div>
              {`${Math.floor(months / 12)} yrs `}
              {months % 12 > 0 && `${months % 12} mos`}
            </div>
          </div>
        </div>
      </GridChild>
      <GridChild className="unicorn" $bg={oc.gray[1]}>
        <div className="imgWrapper">
          <Image src="/unicorn.png" width={150} height={150} />
        </div>
        <h1 className="description">
          <b>Unicorn</b>
          <br />
          Member <br />
        </h1>
      </GridChild>
      <FEConfChild href="https://www.youtube.com/watch?v=kZO5PEypjVg" />
      <GridChild className="naverlabs" $bg={oc.black}>
        <div>
          <Image
            src="/naverlabs2.png"
            width={220}
            height={52}
            alt="NAVER LABS"
          />
          <div className="jobTitle">Front-End Engineer Intern</div>
          <div>
            Jun, 2018 - Mar, 2019
            <div>10 mos</div>
          </div>
        </div>
      </GridChild>
      <GridChild className="naver" $bg="#00D05D">
        <h1>NAVER HACKDAY</h1>
        <div>
          <b>OUTSTANDING</b>
          <br />
          Participant
        </div>
      </GridChild>
      <GridChild className="short" $bg="#db3e46">
        <div className="imgWrapper">
          <Image src="/vingle.svg" width={125} height={125} alt="vingle" />
        </div>
        <div className="company">Vingle</div>
        <div className="jobTitle">Front-End Engineer Intern</div>
        <div className="period">2 mos</div>
      </GridChild>
      <GridChild className="short" $bg="#564699">
        <div className="imgWrapper">
          <Image src="/elice.png" width={125} height={125} alt="elice" />
        </div>
        <div className="company">Elice</div>
        <div className="jobTitle">Front-End Engineer Intern</div>
        <div className="period">2 mos</div>
      </GridChild>
      <GridChild className="short" $bg="#7552f6">
        <div className="imgWrapper">
          <Image src="/additor.svg" width={125} height={125} alt="additor" />
        </div>
        <div className="company">Additor</div>
        <div className="jobTitle">Front-End Engineer Intern</div>
        <div className="period">2 mos</div>
      </GridChild>
    </Container>
  );
};

export default Work;
