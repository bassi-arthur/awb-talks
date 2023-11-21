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
    height: 50%;
    border-radius: 100%;
    padding: 1rem;
    border: 10px solid var(--gray-850);
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
