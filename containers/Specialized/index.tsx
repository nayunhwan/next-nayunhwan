import Image from "next/image";
import styled from "styled-components";

import oc from "open-color";

import REACT from "../../public/react.png";
import REDUX from "../../public/redux.png";
import TS from "../../public/ts.svg";
import SCSS from "../../public/scss.png";

const items = [
  { key: "react", src: REACT, alt: "react", width: 50, height: 50 },
  { key: "ts", src: TS, alt: "TypeScript", width: 48, height: 48 },
  { key: "redux", src: REDUX, alt: "redux", width: 48, height: 48 },
  { key: "scss", src: SCSS, alt: "Scss", width: 64, height: 48 },
];

const Container = styled.div`
  display: flex;
  height: 300px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > h1 {
    margin-bottom: 2rem;
  }
`;

const ItemList = styled.div`
  display: flex;
`;

const Item = styled.div`
  & + & {
    margin-left: 32px;
  }
`;

const Specialized = () => {
  return (
    <Container>
      <h1>Speicalized in</h1>

      <ItemList>
        {items.map((item) => (
          <Item key={item.key}>
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
            />
          </Item>
        ))}
      </ItemList>
    </Container>
  );
};

export default Specialized;
