import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'DM Sans', serif;
  width: 100%;
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  margin-bottom: 30px;
  width: 100%;
  height: 60vh;
  position: relative;
  background-color: #214db5;
`;

export const Image = styled.img`
  position: absolute;
  top: 30%;
  right: 10%;
  transform: translate(-10%, -10%);
  background-color: #fff;
  width: 300px;
  z-index: 9;
`;

export const TextBox = styled.div`
  position: absolute;
  top: 30%;
  left: 10%;
  transform: translate(-10%, -10%);
  background-color: #fff;
  width: 400px;
  height: 200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.h1`
  color: #000;
  font-size: 2rem;
  margin-bottom: 10px;
`;

export const SubText = styled.p`
  font-size: 1.1rem;
  line-height: 1.5rem;
`;
