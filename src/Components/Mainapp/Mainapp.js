import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { classNames } from './../../constants/classNames';
import Header from './../Header/Header';
import Content from './../Content/Content';
import Detail from './../Detail/Detail';

import './mainapp.scss';

const Mainapp = () => {
  const { mainContainer } = classNames.mainapp;

  return (
    <div className={mainContainer}>
      <Switch>
        <Route exact path='/' component={Header} />
        <Route path='/search/:category' component={Content} />
        <Route path='/items/:id' component={Detail} />
      </Switch>
    </div>
  );
};

export default Mainapp;
