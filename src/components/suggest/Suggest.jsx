import React from 'react';
import { Box, Container, TextBox, Title, Wrapper } from './styled.suggest';

export const Suggest = () => {
  return (
    <Container>
      <Wrapper>
        <TextBox>
          <Title>What to learn next?</Title>
        </TextBox>
        <Box></Box>
      </Wrapper>
    </Container>
  );
};
