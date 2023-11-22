import styled from "styled-components";
import Link from "next/link";

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  height: calc(100vh - 5rem);

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 25rem;
    width: 25rem;
    border-radius: 100%;
    padding: 1rem;
    border: 10px solid var(--gray-850);
  }

  @media (max-width: 720px) {
    flex-direction: column-reverse;
    height: calc(100vh + 25rem);
  }

  @media only screen and (max-width: 430px) {
    flex-direction: column-reverse;
    height: calc(100vh + 15rem);
    gap: 3rem;

    img {
      height: 20rem;
      width: 20rem;
    }
  }

  @media only screen and (max-width: 390px) {
    flex-direction: column-reverse;
    height: calc(100vh + 20rem);
    gap: 3rem;

    img {
      height: 18rem;
      width: 18rem;
    }
  }

  @media only screen and (max-width: 375px) {
    flex-direction: column-reverse;
    height: calc(100vh + 30rem);
    gap: 3rem;

    img {
      height: 18rem;
      width: 18rem;
    }
  }

  @media only screen and (max-width: 320px) {
    flex-direction: column-reverse;
    height: calc(100vh + 23rem);
    gap: 3rem;

    img {
      height: 18rem;
      width: 18rem;
    }
  }

  @media only screen and (max-width: 280px) {
    flex-direction: column-reverse;
    height: calc(100vh + 32rem);
    gap: 3rem;
    background: blue;

    img {
      height: 18rem;
      width: 18rem;
    }
  }
`;

export const Hero = styled.section`
  max-width: 600px;

  > span {
    font-size: 1.5rem;
    font-weight: bold;
    background: var(--yellow-500);
    padding: 0.5rem;
    border-radius: 16px 16px 16px 0px;
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
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
`;

export const IconButton = styled(Link)`
  font-size: 1.5rem;
  border: 1px solid transparent;
  padding: 0.25rem;
  border-radius: 8px;
  transition: border 0.2s;

  &:hover {
    color: var(--white);
    border: 1px solid var(--gray-300);
  }
`;
