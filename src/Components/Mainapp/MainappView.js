import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PATHS } from '../../constants/paths';
import { classNames } from './../../constants/classNames';
import Header from './../Header';
import Breadcrumb from './../Breadcrumb';
import Content from './../Content';
import Detail from './../Detail';

import './mainapp.scss';

const MainappView = () => {
  const { mainContainer } = classNames.mainapp;
  const { searchBar, content, detail } = PATHS;
  return (
    <div className={mainContainer}>
      <Header />
      <Switch>
        <Route exact path={searchBar} />

        <Route exact path={content}>
          <Breadcrumb />
          <Content />
        </Route>

        <Route exact path={detail}>
          <Breadcrumb />
          <Detail />
        </Route>
      </Switch>
    </div>
  );
};

export default MainappView;
