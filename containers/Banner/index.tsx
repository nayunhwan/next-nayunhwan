import Image from "next/image";
import styled from "styled-components";
import Yunhwan from ".././public/yunhwan.png";
import oc from "open-color";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 700px;

  & > h1 {
    font-size: 52px;
    font-weight: 900;
    margin-top: 0;
    margin-bottom: 0;
  }

  & > h2 {
    color: ${oc.gray[7]};
    font-weight: 600;
  }
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

const CharacterContainer = styled.div`
  position: relative;
  margin-bottom: -25px;
`;

const ChatBubble = styled.div`
  position: absolute;
  top: 75px;
  right: -190px;
  background: ${oc.white};
  font-weight: 600;
  font-size: 24px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  border-radius: 8px;
  padding: 1rem 1rem;
`;

const Banner = () => {
  return (
    <Container>
      <CharacterContainer>
        <Image src="/yunhwan_head.png" alt="yunhwa3" width={300} height={300} />
        <ChatBubble>Hi, I'm Yunhwan</ChatBubble>
      </CharacterContainer>

      <h1>Artistic programmer</h1>
      <h2>both develop & design.</h2>
      <Button
        href="https://nayunhwan.github.io/whoami/cv/Yunhwan_Na_CV.pdf"
        target="_blank"
      >
        Download CV
      </Button>
    </Container>
  );
};

export default Banner;
