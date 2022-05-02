import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: sticky;
  z-index: 999;
  top: 0;
  background-color: #fff;
  height: 80px;
  font-family: 'DM Sans', serif;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 3rem;

  display: flex;
  align-items: center;
`;

export const Text = styled.h1`
  flex: 1;
  color: #214db5;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 30px;
  flex: 1;
`;

export const Auth = styled.h3`
  font-size: 18px;
  font-weight: 300;

  &:nth-child(2) {
    background-color: teal;
    padding: 10px;
    color: #fff;
    border-radius: 10px;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: -30px;
  flex: 1;
`;

export const MenuLink = styled.li`
  list-style: none;
  font-size: 20px;
  margin-right: 30px;
  cursor: pointer;
`;
