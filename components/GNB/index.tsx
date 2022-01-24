import { FC } from "react";
import styled from "styled-components";

import oc from "open-color";

import Logo from "../../components/Logo";

const Container = styled.div`
  display: flex;
  align-items: center;
  background: ${oc.white};
  height: 60px;
  justify-content: space-between;

  @media (max-width: 600px) {
    .typo {
      display: none;
    }
  }
`;

const Right = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: ${oc.gray[6]};
  transition: 0.3s;

  li:hover {
    color: ${oc.black};
    transition: 0.3s;
  }

  li + li {
    margin-left: 12px;
  }
`;

const items = [
  {
    icon: "xi-x xi-facebook",
    key: "facebook",
    href: "https://facebook.com/nayunhwan",
  },
  {
    icon: "xi-x xi-instagram",
    key: "instagram",
    href: "https://instagram.com/nayunhwan",
  },
  {
    icon: "xi-x xi-github",
    key: "github",
    href: "https://github.com/nayunhwan",
  },
  {
    icon: "xi-x xi-linkedin",
    key: "linkedin",
    href: "https://linkedin.com/in/nayunhwan",
  },
];

const GNB: FC = () => {
  return (
    <Container>
      <Logo />
      <Right>
        {items.map((item) => (
          <li key={item.key}>
            <a href={item.href}>
              <i className={item.icon} />
            </a>
          </li>
        ))}
      </Right>
    </Container>
  );
};

export default GNB;
