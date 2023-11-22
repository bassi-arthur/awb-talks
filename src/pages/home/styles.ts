import { styled } from "styled-components";
import Link from "next/link";

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  height: calc(100vh - 5rem);

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 720px) {
    flex-direction: column;
    img {
      margin-top: 2.5rem;
      padding-bottom: 2rem;
    }
  }
`;

export const Hero = styled.section`
  max-width: 600px;

  > span {
    font-size: 1.5rem;
    font-weight: bold;
  }

  h1 {
    font-size: 4.5rem;
    line-height: 4.5rem;
    font-weight: 900;
    margin-top: 2.5rem;

    span {
      color: var(--cyan-500);
    }
  }
  p {
    font-size: 1.5rem;
    line-height: 2.5rem;
    margin-top: 1.5rem;

    span {
      color: var(--cyan-500);
      font-weight: bold;
    }
  }

  @media (max-width: 720px) {
  }
`;

export const RedirectButton = styled(Link)`
  margin-top: 2.5rem;
  height: 3rem;
  width: 16.5rem;
  border-radius: 3rem;
  background-color: var(--yellow-500);
  border: 0;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--gray-900);
  font-weight: bold;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  @media (max-width: 720px) {
    margin: 2.5rem auto;
  }
`;
