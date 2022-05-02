import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'DM Sans', serif;
  width: 100%;
`;

export const Wrapper = styled.div`
  padding: 0 5rem;
  width: 100%;
  height: 100%;
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.h1`
  flex: 1;
`;

export const SubText = styled.span`
  flex: 1;
  justify-content: end;
  display: flex;
  align-items: center;
  font-size: 17px;
  color: blue;
  padding-bottom: 3px;
  border-bottom: 2px solid blue;
`;

export const Box = styled.div`
  width: 418px;
  height: 150px;
  display: flex;
  border: 1px solid rgba(131, 136, 143, 0.3);
  cursor: pointer;

  &:hover {
    background-color: rgba(131, 136, 143, 0.1);
  }
`;

export const Image = styled.img`
  margin-right: 20px;
`;

export const TextContainer = styled.div`
  padding: 10px;
  align-items: start;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const BoxTitle = styled.p`
  color: gray;
  font-size: 15px;
  margin-bottom: 10px;
`;

export const BoxSubTitle = styled.h3`
  font-size: 18px;
`;

export const Details = styled.p`
  display: flex;
  font-size: 12px;
  position: absolute;
  bottom: 20px;
  color: gray;
`;

export const Strong = styled.p`
  margin-right: 10px;
  font-weight: bold;
  color: black;
`;
