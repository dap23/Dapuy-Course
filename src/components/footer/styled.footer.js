import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 40vh;
  color: #fff;
  font-family: 'DM Sans', serif;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 3rem;
  background-color: #214db5;
`;

export const Top = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const LinkFooter = styled.ul`
  padding: 0;
  list-style: none;
`;

export const LinkList = styled.li`
  margin-bottom: 10px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Language = styled.div`
  display: flex;
  align-items: start;
  justify-content: end;
`;

export const LanguageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  width: 130px;
  height: 40px;
  cursor: pointer;
  &:hover {
    background-color: rgba(131, 136, 143, 0.1);
  }
`;

export const Bottom = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.h1`
  cursor: pointer;
`;

export const Date = styled.span``;
