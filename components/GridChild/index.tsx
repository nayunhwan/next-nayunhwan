import styled from "styled-components";

const GridChild = styled.div<{ $bg?: string }>`
  background: ${(props) => props.$bg || "None"};
  height: 300px;
  border-radius: 24px;
  padding: 50px;
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
  }

  @media (max-width: 600px) {
    height: fit-content;
  }
`;

export default GridChild;
