import React from 'react';
import { Header } from '../../components/header/Header';
import { Learning } from '../../components/learning/Learning';
import { Suggest } from '../../components/suggest/Suggest';

export const Home = () => {
  return (
    <>
      <Header />
      <Learning />
      <Suggest />
    </>
  );
};
