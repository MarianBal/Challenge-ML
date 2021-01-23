import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PATHS } from '../../constants/paths';
import { classNames } from './../../constants/classNames';
import Header from './../Header';
import Breadcrumb from './../Breadcrumb';
import Content from './../Content';
import ProductDetail from './../ProductDetail';

import './mainapp.scss';

const MainappView = ({ showDetail, setShowDetail }) => {
  const { mainContainer } = classNames.mainapp;
  const { searchBar, content, detail } = PATHS;
  return (
    <div className={mainContainer}>
      <Header />
      <Breadcrumb />
      <Switch>
        <Route exact path={searchBar} />
        <Route path={content}>
          <Content />
        </Route>
        <Route path={detail}>
          <ProductDetail />
        </Route>
      </Switch>
      ;
    </div>
  );
};

{
}
{
  /* const MainappView = ({ showDetail, setShowDetail }) => {
  const { mainContainer, contentContainer } = classNames.mainapp;
  return (
    <div className={mainContainer}>
      <Header />
      <div className={contentContainer}>
        <Breadcrumb />
        {showDetail ? 'lalala' : <Content />}
      </div>
    </div>
  );
}; */
}

export default MainappView;
