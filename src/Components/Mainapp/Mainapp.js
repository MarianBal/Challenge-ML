import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { classNames } from './../../constants/classNames';
import Header from './../Header';
import Content from './../Content';
import Detail from './../Detail';
import NotFound from './../NotFound';

import './mainapp.scss';

const Mainapp = () => {
  const { mainContainer } = classNames.mainapp;

  return (
    <div className={mainContainer}>
      <Switch>
        <Route exact path='/' component={Header} />
        <Route path='/search/:category' component={Content} />
        <Route path='/items/:id' component={Detail} />
        <Route path='/not-found' component={NotFound} />
      </Switch>
    </div>
  );
};

export default Mainapp;
