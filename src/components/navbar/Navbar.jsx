import React, { useState, useEffect } from 'react';
import {
  Container,
  MenuLink,
  Text,
  Wrapper,
  Menu,
  ButtonContainer,
  Auth,
} from './styled.navbar';
import '../../styles/module.global.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const user = true;
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
  }, []);
  return (
    <>
      <Container className={navbar ? 'nav' : 'nav_scrolled'}>
        <Wrapper>
          <Text>Dapuy</Text>
          <Menu>
            <MenuLink>
              <Link className='link' to='/'>
                Home
              </Link>
            </MenuLink>
            <MenuLink>
              <Link className='link' to='/products'>
                Products
              </Link>
            </MenuLink>
            <MenuLink>
              <Link className='link' to='/about'>
                About
              </Link>
            </MenuLink>
            <MenuLink>
              <Link className='link' to='/contact'>
                Contact
              </Link>
            </MenuLink>
          </Menu>
          <ButtonContainer>
            {user ? (
              <Auth className='sign-out'>
                <Link className='link' to='/sign-out'>
                  Sign Out
                </Link>
              </Auth>
            ) : (
              <>
                <Auth>
                  <Link className='link' to='/sign-in'>
                    Sign In
                  </Link>
                </Auth>
                <Auth>
                  <Link className='link' to='/sign-up'>
                    Sign Up
                  </Link>
                </Auth>
              </>
            )}
          </ButtonContainer>
        </Wrapper>
      </Container>
    </>
  );
};
