import { FC } from "react";
import styled from "styled-components";

import oc from "open-color";

const Container = styled.div`
  display: flex;
  align-items: center;
  background: ${oc.white};
  height: 60px;
`;

const Logo = styled.div`
  width: 32px;
  height: 32px;
  background: ${oc.black};
  color: ${oc.white};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  font-weight: 600;
`;

const Typo = styled.div`
  font-weight: 600;
`;

const GNB: FC = () => {
  return (
    <Container>
      <Logo>Na.</Logo>
      <Typo>nayunhwan</Typo>
    </Container>
  );
};

export default GNB;
