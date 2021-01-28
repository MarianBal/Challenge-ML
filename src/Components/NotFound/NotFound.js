import React from 'react';

import Header from '../Header';
import { translations } from '../../constants/tranlations';
import { classNames } from './../../constants/classNames';

import './notFound.scss';

const NotFound = () => {
  return (
    <>
      <Header />
      <div className={classNames.notFound.notContent}>
        <span>{translations.notFoundText.text}</span>
      </div>
    </>
  );
};

export default NotFound;
