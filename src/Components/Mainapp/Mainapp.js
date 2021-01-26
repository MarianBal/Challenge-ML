import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { classNames } from './../../constants/classNames';
import Header from './../Header';
import Content from './../Content';
import Detail from './../Detail';

import './mainapp.scss';

const Mainapp = () => {
  const { mainContainer } = classNames.mainapp;

  return (
    <div className={mainContainer}>
      <Header />
      <Switch>
        <Route exact path='/' />
        <Route path='/search' component={Content} strict />
        <Route path='/items/:id' component={Detail} exact />
      </Switch>
    </div>
  );
};

export default Mainapp;
