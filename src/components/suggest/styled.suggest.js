import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'DM Sans', serif;
  width: 100%;
  margin: 3em 0;
`;

export const Wrapper = styled.div`
  padding: 0 5rem;
  width: 100%;
  height: 100%;
`;

export const TextBox = styled.div``;

export const Title = styled.h1``;

export const Box = styled.div`
  border: 1px solid rgba(131, 136, 143, 0.3);
  width: 100%;
  height: 300px;
  margin: 1rem auto;

  &:hover {
    background-color: rgba(131, 136, 143, 0.1);
  }
`;
