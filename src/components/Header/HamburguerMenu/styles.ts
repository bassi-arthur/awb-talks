import styled from "styled-components";

interface menuProps {
  open: boolean;
}

interface Props {
  pathname?: string;
}

export const HeaderContainer = styled.header`
  max-width: 1120px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuLabel = styled.label`
  margin-left: auto;
  height: 4rem;
  width: 4rem;
  cursor: pointer;
  z-index: 1000;
  text-align: center;
`;

export const Icon = styled.span<menuProps>`
  position: relative;
  background-color: ${(props) =>
    props.open ? "transparent" : "var(--gray-300)"};
  width: 2rem;
  height: 2px;
  display: inline-block;
  margin-top: 2rem;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: var(--gray-300);
    width: 2rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.open ? "0" : "-0.8rem")};
    transform: ${(props) => (props.open ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.open ? "0" : "0.8rem")};
    transform: ${(props) => (props.open ? "rotate(-135deg)" : "rotate(0)")};
  }
  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.open ? "0" : "-1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.open ? "0" : "1rem")};
  }
`;

export const MenuContainer = styled.nav<menuProps>`
  display: ${(props) => (props.open ? "flex" : "none")};
  background: var(--gray-900);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  margin-top: 5rem;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 2.5rem;
  font-size: 1.5rem;
  padding-top: 5rem;
`;

export const StyledLink = styled.div<Props>`
  display: inline-block;
  position: relative;
  padding: 0 0.5rem;
  height: 5rem;
  line-height: 5rem;
  color: var(--gray-300);

  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }

  & + a {
    margin-left: 2rem;
  }

  ${(props) =>
    props.pathname == "true" &&
    `   
    color: var(--white);
    font-weight: bold;
  
    &:after {
      content: "";
      height: 3px;
      border-radius: 3px 3px 0 0;
      width: 100%;
      position: absolute;
      bottom: 1px;
      left: 0;
      background: var(--yellow-500);
    }
  `}
`;
