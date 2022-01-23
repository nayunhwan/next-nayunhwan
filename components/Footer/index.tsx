import { FC } from "react";
import styled from "styled-components";
import oc from "open-color";

import Logo from "../../components/Logo";

const Container = styled.footer`
  width: 100%;
  height: 300px;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Year = styled.div`
  color: ${oc.gray[4]};
  margin-bottom: 8px;
  font-size: 22px;
  font-weight: 600;
`;

const Footer: FC = () => {
  const year = new Date().getFullYear();
  return (
    <Container>
      <Year>© {year}</Year>
      <Logo color={oc.gray[4]} />
    </Container>
  );
};

export default Footer;
