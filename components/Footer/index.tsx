import { FC } from "react";
import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  height: 300px;
`;

const Footer: FC = () => {
  const year = new Date().getFullYear();
  return <Container>{year} nayunhwan</Container>;
};

export default Footer;
