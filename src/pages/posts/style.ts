import styled from "styled-components";

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;

  img {
    width: 100%;
  }
`;

export const PostContainer = styled.article`
  max-width: 720px;
  margin: 5rem auto 0;

  h1 {
    font-size: 3.5rem;
    font-weight: 900;
  }

  time {
    display: block;
    font-size: 1rem;
    color: var(--gray-300);
    margin-top: 1.5rem;
  }

  p {
    margin-top: 2rem;
    line-height: 2rem;
    font-size: 1.25rem;
    color: var(--gray-100);
  }

  p,
  ul {
    margin: 1.5rem 0;
  }

  ul {
    padding-left: 1.5rem;

    li {
      margin: 0.5rem 0;
    }
  }
  ::marker {
    color: var(--yellow-500);
  }

  pre {
    background: var(--gray-100);
    border-radius: 8px;
    padding: 0.5rem;
    color: var(--gray-800);
  }

  p.block-img {
    display: flex;
    justify-content: center;
  }

  p > img {
    max-height: 500px;
    object-fit: cover;
  }
`;
