import styled from "styled-components";

const GridChild = styled.div<{ $bg?: string }>`
  background: ${(props) => props.$bg || "None"};
  height: 300px;
  border-radius: 24px;
  padding: 50px;
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 20px 30px;
  }
`;

export default GridChild;
