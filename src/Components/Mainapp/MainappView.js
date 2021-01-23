import React from 'react';

import { classNames } from './../../constants/classNames';
import Header from './../Header';
import Breadcrumb from './../Breadcrumb';
import Content from './../Content';

import './mainapp.scss';

const MainappView = () => {
  const { mainContainer, contentContainer } = classNames.mainapp;
  return (
    <div className={mainContainer}>
      <Header />
      <div className={contentContainer}>
        <Breadcrumb />
        <Content />
      </div>
    </div>
  );
};

export default MainappView;
