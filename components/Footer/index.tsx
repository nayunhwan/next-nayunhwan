import { FC } from "react";
import styled from "styled-components";
import oc from "open-color";

const Container = styled.footer`
  width: 100%;
  height: 300px;
  margin-top: 100px;
`;

const Logo = styled.div`
  width: 32px;
  height: 32px;
  background: ${oc.gray[4]};
  color: ${oc.white};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  font-weight: 600;
`;

const Footer: FC = () => {
  const year = new Date().getFullYear();
  return (
    <Container>
      {year} <Logo>Na.</Logo>nayunhwan
    </Container>
  );
};

export default Footer;
