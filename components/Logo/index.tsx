import { FC } from "react";
import styled from "styled-components";
import oc from "open-color";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Symbol = styled.div<{ $color: string }>`
  width: 32px;
  height: 32px;
  background: ${(props) => props.$color};
  color: ${oc.white};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  font-weight: 600;
  cursor: default;
`;

export const Typo = styled.div<{ $color: string }>`
  font-weight: 900;
  font-size: 20px;
  letter-spacing: 1px;
  color: ${(props) => props.$color};
  cursor: default;
`;

const Logo: FC<{ color?: string }> = ({ color = oc.black }) => {
  return (
    <Container>
      <Symbol className="symbol" $color={color}>
        Na.
      </Symbol>
      <Typo className="typo" $color={color}>
        NAYUNHWAN
      </Typo>
    </Container>
  );
};

export default Logo;
