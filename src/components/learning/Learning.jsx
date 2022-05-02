import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Wrapper,
  TextBox,
  Text,
  SubText,
  Image,
  Box,
  BoxTitle,
  TextContainer,
  BoxSubTitle,
  Details,
  Strong,
} from './styled.learning';
import '../../styles/module.global.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FreeMode } from 'swiper';

export const Learning = () => {
  return (
    <Container>
      <Wrapper>
        <TextBox>
          <Text>Let's start learning, Muhammad Daffa</Text>
          <Link className='link' to='courses'>
            <SubText>My learning</SubText>
          </Link>
        </TextBox>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className='mySwiper'>
          <SwiperSlide>
            <Box>
              <Image src='https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cnNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' />
              <TextContainer>
                <BoxTitle>Python Data Analysis</BoxTitle>
                <BoxSubTitle>5. Working with Jupyter</BoxSubTitle>
                <Details>
                  <Strong>Lecture</Strong>9 min left
                </Details>
              </TextContainer>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box>
              <Image src='https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cnNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' />
              <TextContainer>
                <BoxTitle>Web Bootcamp Developer</BoxTitle>
                <BoxSubTitle>1. What's Javascript?</BoxSubTitle>
                <Details>
                  <Strong>Lecture</Strong>5 min left
                </Details>
              </TextContainer>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box>
              <Image src='https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cnNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' />
              <TextContainer>
                <BoxTitle>UI/UX</BoxTitle>
                <BoxSubTitle>10. Brainstorming</BoxSubTitle>
                <Details>
                  <Strong>Lecture</Strong>2 min left
                </Details>
              </TextContainer>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box>
              <Image src='https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cnNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' />
              <TextContainer>
                <BoxTitle>MERN React</BoxTitle>
                <BoxSubTitle>5. useState React</BoxSubTitle>
                <Details>
                  <Strong>Lecture</Strong>1 min left
                </Details>
              </TextContainer>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box>
              <Image src='https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cnNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' />
              <TextContainer>
                <BoxTitle>JSON</BoxTitle>
                <BoxSubTitle>1. What's JSON?</BoxSubTitle>
                <Details>
                  <Strong>Lecture</Strong>3 min left
                </Details>
              </TextContainer>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Wrapper>
    </Container>
  );
};
