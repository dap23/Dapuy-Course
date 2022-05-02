import React from 'react';
import {
  Bottom,
  Container,
  LinkFooter,
  LinkList,
  Text,
  Top,
  LinkWrapper,
  Wrapper,
  Date,
  Language,
  LanguageWrapper,
} from './styled.footer';
import { AiOutlineGlobal } from 'react-icons/ai';

export const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <LinkWrapper>
            <LinkFooter>
              <LinkList>Dapuy on Business</LinkList>
              <LinkList>Teach on Dapuy</LinkList>
              <LinkList>Get the app</LinkList>
              <LinkList>About us</LinkList>
              <LinkList>Contact us</LinkList>
            </LinkFooter>
            <LinkFooter>
              <LinkList>Careers</LinkList>
              <LinkList>Blog</LinkList>
              <LinkList>Help and Support</LinkList>
              <LinkList>Affiliate</LinkList>
              <LinkList>Investors</LinkList>
            </LinkFooter>
            <LinkFooter>
              <LinkList>Terms</LinkList>
              <LinkList>Privacy Policy</LinkList>
              <LinkList>Cookie settings</LinkList>
              <LinkList>Sitemap</LinkList>
              <LinkList>Accessibility statement</LinkList>
            </LinkFooter>
          </LinkWrapper>
          <Language>
            <LanguageWrapper>
              <AiOutlineGlobal
                style={{ paddingRight: '10px', fontSize: '30px' }}
              />
              English
            </LanguageWrapper>
          </Language>
        </Top>
        <Bottom>
          <Text>Dapuy</Text>
          <Date>&copy; Dapuy, Inc</Date>
        </Bottom>
      </Wrapper>
    </Container>
  );
};
