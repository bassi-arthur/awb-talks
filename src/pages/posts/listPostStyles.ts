import styled from "styled-components";

export const PostsContainer = styled.main`
  max-width: 1120px !important;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Post = styled.section`
  max-width: 720px;
  margin: 5rem auto 0;

  a {
    display: block;

    & + a {
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 1px solid var(--gray-300);
    }
    time {
      font-size: 1rem;
      display: flex;
      align-items: center;
      color: var(--gray-300);
    }

    strong {
      display: block;
      font-size: 1.5rem;
      margin-top: 1rem;
      line-height: 2rem;
      transition: color 0.2s;
    }

    p {
      color: var(--gray-300);
      margin: 0.5rem 0;
      line-height: 1.625rem;
    }

    &:hover strong {
      color: var(--yellow-500);
    }
  }

  @media (max-width: 720px) {
    margin: 2.5rem auto 0;
  }
`;

export const Chip = styled.span`
  border: 1px solid var(--gray-300);
  color: var(--gray-300);
  border-radius: 4px;
  padding: 0.2rem;
  font-size: 0.75rem;

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;
