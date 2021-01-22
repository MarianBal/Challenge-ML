import React from 'react';

import { classNames } from './../../constants/classNames';
import Header from './../Header';
import Breadcrumb from './../Breadcrumb';
import Content from './../Content';

import './mainapp.scss';

const MainappView = ({ users, handleModal, takeUserId, editUserId }) => {
  const { mainContainer, contentContainer } = classNames.mainapp;
  return (
    <div className={mainContainer}>
      <Header handleModal={handleModal} />
      <div className={contentContainer}>
        {' '}
        <Breadcrumb />
        <Content
          users={users}
          takeUserId={takeUserId}
          editUserId={editUserId}
        />
      </div>
    </div>
  );
};

export default MainappView;
