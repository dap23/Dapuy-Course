import React from 'react';
import {
  Container,
  Wrapper,
  Text,
  TextBox,
  SubText,
  Image,
} from './styled.header';
import Icon from '../../images/icon.png';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Image src={Icon} />
        <TextBox>
          <Text>Develop your skills</Text>
          <SubText>
            Learn in-demand programming languages like Python, Java, C++, and
            more. <Link to='courses'>Find the course for you</Link>
          </SubText>
        </TextBox>
      </Wrapper>
    </Container>
  );
};
